import React, { useState } from "react"
import { Link } from "gatsby"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import faunadb, { query as q } from "faunadb"

import { FormControl, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgressBar from "./progress-bar"


var styles = {
    hidden: {
        display: 'none',
    },
    star: {
        cursor: 'pointer',
        transition: 'color 200ms',
    }
}

const FeedbackSlide = ({ level, step, currentStep, setStep, length, type }) => {
    const { isAuthenticated, loading, user } = useAuth0();
    const training = level.toString()
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState("");
    const ratingText = ["Wenig hilfreich", "Ganz ok", "Hilfreich", "Sehr hilfreich", "Richtig gut"]
    const handleInputChange = e => {
        setFeedback(e.target.value);
    };

    const updateUserLevel = async () => {
        if (loading || !isAuthenticated) return;
        const curTime = new Date().toLocaleString();
        const fauna_secret = user["https://fauna.com/id/secret"];
        const client = new faunadb.Client({ secret: fauna_secret });
        const docKey = type === 'team-tutorials' ? 'punkte_team' : 'punkte_solo';

        await client.query(
            q.Update(
                q.Select(['ref'], q.Get(q.Match(
                    q.Index('profile_by_email'), user.email,
                ))),
                // keine optimale Lösung aber tuts erstmal, was passiert hier:
                // - docKey ist entweder punkte_team oder punkte_solo
                // - anstatt eines array wird ein object mit index keys verwendet (hier default erstmal 1)
                // - level beschreibt dieses tutorial wo einfach eine 1 gesetzt wird
                //   statt level sollte ein slug/id verwendet werden die sich nicht ändert
                // So wird die aktion idempotent
                // Für die Punkte unter mein-account wird gezählt wie viele keys gesetzt sind
                { data: { [docKey]: { 1: { [level]: curTime, } } } }
            )
        )
    }


    const sendFeedback = async (ratingValue, feedbackText) => {
        const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK;
        const client = new faunadb.Client({ secret: fauna_secret });
        await client.query(
            q.Create(
                q.Collection('feedback'),
                { data: { "training": training, "rating": ratingValue, "feedback": feedbackText } }
            )
        )
    }
    if (currentStep !== step) {
        return null
    }

    return <>
        <Row style={{ width: "100vw", height: "7rem", marginBottom: "1.4rem" }}>
            <Col>
                <p>Wie fandest Du das Training {training}?</p>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (<label key={ratingValue}>
                        <input
                            type="radio"
                            name="rating"
                            id="rating"
                            aria-label="star-rating"
                            style={styles.hidden}
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FontAwesomeIcon
                            icon={['fas', 'star']}
                            fixedWidth
                            size="2x" style={styles.star}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#FFD970" : "#DAE4F2"} />
                    </label>)
                })}
                <p style={{ fontSize: "1rem" }}>{ratingText[hover - 1]}</p>
            </Col>
        </Row>
        <Row style={{ width: "100vw", minHeight: "2ch" }}>
            <Col>
                <label htmlFor="feedback-text">Bitte gib uns kurz Feedback zu Deiner Bewertung:</label>
                <FormControl as="textarea" rows="6" aria-label="feedback-text" onChange={handleInputChange} value={feedback} />
            </Col>
        </Row>
        <Row style={{ width: "100vw", marginTop: "2rem" }}><Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => setStep(currentStep - 1)}>Zurück</Button>
            <ProgressBar length={length} step={currentStep} />
            <Link className="btn btn-secondary" to="../" onClick={() => sendFeedback(rating, feedback)}>Tutorial abschliessen</Link>
        </Col></Row>
    </>
};

export default FeedbackSlide