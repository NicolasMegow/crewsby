import React, { useState } from "react"
import faunadb, { query as q } from "faunadb"
import { FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var styles = {
    hidden: {
        display: 'none',
    },
    star: {
        cursor: 'pointer',
        transition: 'color 200ms',
    }
}

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [btnStatus, setBtnStatus] = useState(false);
    const [message, setMessage] = useState("Feedback absenden");
    const ratingText = ["Wenig hilfreich", "Ganz ok", "Hilfreich", "Sehr hilfreich", "Richtig gut"]
    const handleInputChange = e => {
        setFeedback(e.target.value);
      };

    const sendFeedback = async (ratingValue, feedbackText) => {
        const fauna_secret = process.env.FAUNA_FEEDBACK;
        const client = new faunadb.Client({ secret: fauna_secret });
        await client.query(
            q.Create(
                q.Collection('feedback'),
                { data: { "rating": ratingValue, "feedback": feedbackText }}
            )
        )
    }

    return <div>
        <div style={{height:"7rem", marginBottom:"1.4rem"}}>
        <p>Wie fandest Du das Training?</p>
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
                    color={ratingValue <= ( hover || rating ) ? "#FFD970" : "#DAE4F2"} />
                </label>)
        })}
        <p style={{fontSize:"1rem"}}>{ratingText[hover-1]}</p>
        </div>
        <label htmlFor="feedback-text">Bitte gib uns kurz Feedback zu Deiner Bewertung:</label>
        <FormControl as="textarea" aria-label="feedback-text" onChange={handleInputChange} value={feedback}/>
        <Button variant="primary" style={{marginTop:"1.4rem"}} disabled={btnStatus} onClick={() => sendFeedback(rating, feedback) & setRating(null) & setFeedback("") & setMessage("Vielen Dank!") & setBtnStatus(true)}>{message}</Button>
    </div>
};

export default StarRating