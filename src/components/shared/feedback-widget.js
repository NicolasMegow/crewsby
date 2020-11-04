import React, { useState, useRef } from "react"
import { Button } from "react-bootstrap"

import formStyles from "../../styles/form.module.scss"
import faunadb, { query as q } from "faunadb"
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

const FeedbackWidget = ({ resource }) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const [feedback, setFeedback] = useState("")
  const btnRef = useRef()
  const ratingText = [
    "Not helpful",
    "Ok",
    "Worth my time",
    "Really helpful",
    "Just awesome",
  ]
  const handleInputChange = e => {
    setFeedback(e.target.value)
  }

  const sendFeedback = async (ratingValue, feedbackText) => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("feedback"), {
        data: {
          resource: resource,
          rating: ratingValue,
          feedback: feedbackText,
        },
      })
    )
  }

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "6px",
        background: "#ebebeb",
        maxWidth: "750px",
        marginTop: "2rem",
      }}
    >
      <p style={{ fontSize: "1.4rem" }}>How do you like {resource}?</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "4rem",
        }}
      >
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
              <span
                className="fa-layers fa-fw"
                style={{ marginRight: "1.2rem" }}
              >
                <FontAwesomeIcon
                  icon={["fas", "star"]}
                  fixedWidth
                  size="2x"
                  style={styles.star}
                  color={
                    ratingValue <= (hover || rating) ? "#FFD970" : "#ffffff"
                  }
                />
                <FontAwesomeIcon
                  icon={["fal", "star"]}
                  fixedWidth
                  size="2x"
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </span>
            </label>
          )
        })}
        <p
          style={{
            marginLeft: "2rem",
            fontWeight: "500",
          }}
        >
          {ratingText[hover ? hover - 1 : rating - 1]}
        </p>
      </div>
      <p htmlFor="feedback-text" className={formStyles.fieldtitle}>
        Please elaborate on your rating:
      </p>
      <textarea
        className={formStyles.formfield}
        rows="4"
        aria-label="feedback-text"
        onChange={handleInputChange}
        value={feedback}
      />
      <br></br>
      <Button
        className="btn btn-primary btn-lg"
        ref={btnRef}
        onClick={() => {
          sendFeedback(rating, feedback) &&
            btnRef.current.setAttribute("disabled", "disabled")
        }}
      >
        Send feedback
      </Button>
    </div>
  )
}

export default FeedbackWidget
