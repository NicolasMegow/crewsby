import React, { useState } from "react"
import { Link } from "gatsby"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import faunadb, { query as q } from "faunadb"

import { FormControl, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

var styles = {
  hidden: {
    display: "none",
  },
  star: {
    cursor: "pointer",
    transition: "color 200ms",
  },
}

const FeedbackSlide = ({
  level,
  step,
  currentStep,
  setStep,
  length,
  type,
  title,
}) => {
  const { isAuthenticated, loading, user } = useAuth0()
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [feedback, setFeedback] = useState("")
  const ratingText = [
    "Wenig hilfreich",
    "Ganz ok",
    "Hilfreich",
    "Sehr hilfreich",
    "Richtig gut",
  ]
  const handleInputChange = e => {
    setFeedback(e.target.value)
  }

  const updateUserLevel = async () => {
    if (loading || !isAuthenticated) return
    const curTime = new Date().toLocaleString()
    const fauna_secret = user["https://fauna.com/id/secret"]
    const client = new faunadb.Client({ secret: fauna_secret })
    const docKey = type === "team-uebung" ? "punkte_team" : "punkte_solo"

    await client.query(
      q.Update(
        q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        ),
        { data: { [docKey]: { 1: { [level]: curTime } } } }
      )
    )
  }

  const sendFeedback = async (ratingValue, feedbackText) => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("feedback"), {
        data: { uebung: title, rating: ratingValue, feedback: feedbackText },
      })
    )
  }
  if (currentStep !== step) {
    return null
  }

  return (
    <>
      <Row style={{ width: "100vw", height: "7rem", marginBottom: "1.4rem" }}>
        <Col>
          <p>
            Wie fandest Du die Übung <strong>{title}</strong>?
          </p>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1

            return (
              <label key={ratingValue}>
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
                  icon={["fas", "star"]}
                  fixedWidth
                  size="2x"
                  style={styles.star}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  color={
                    ratingValue <= (hover || rating) ? "#FFD970" : "#DAE4F2"
                  }
                />
              </label>
            )
          })}
          <p style={{ fontSize: "1rem" }}>{ratingText[hover - 1]}</p>
        </Col>
      </Row>
      <Row style={{ width: "100vw", minHeight: "2ch" }}>
        <Col>
          <label htmlFor="feedback-text">
            Bitte gib uns kurz Feedback zu Deiner Bewertung:
          </label>
          <FormControl
            as="textarea"
            rows="6"
            aria-label="feedback-text"
            onChange={handleInputChange}
            value={feedback}
          />
        </Col>
      </Row>
      <Row style={{ width: "100vw", marginTop: "2rem" }}>
        <Col style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={() => setStep(currentStep - 1)}>Zurück</Button>
          <strong>
            {step}/{length}
          </strong>
          <Link
            className="btn btn-secondary"
            to="../"
            onClick={() => sendFeedback(rating, feedback)}
          >
            Übung abschließen
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default FeedbackSlide
