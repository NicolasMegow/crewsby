import React, { useState } from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Emoji from "../shared/emoji"
import CheckinForm from "./checkin-form"
import CheckinResults from "./checkin-results"

function addDays(date, days) {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const SessionRow = ({ session, exercise, week }) => {
  const [sessionDone, setDone] = useState(false)
  const [checkinDone, setCheckin] = useState(false)
  const [exerciseDone, setExercise] = useState(false)
  const [sessionVisible, setVisability] = useState(false)
  const { title, emojis } = exercise.node.frontmatter
  const { slug, skill } = exercise.node.fields
  const resultsData = {
    behavior: 5,
    obstacle: "my ego",
    learning: "I'm stupid",
    goals: "Go Home + eat burger + sleep it off",
  }

  return (
    <Row style={{ margin: "1rem 0" }} id={title}>
      <Col
        style={{
          border: "1px solid #151515",
          borderRadius: "6px",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>
            Session {session}{" "}
            <small>
              • {addDays(week[0], week[1] * 7).toLocaleDateString()} -
              {addDays(week[0], week[1] * 7 + 4).toLocaleDateString()}
            </small>
          </h2>
          <span style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginBottom: 0, marginRight: "2rem" }}>
              Check in: {checkinDone ? "Done" : "Pending"} • Exercise:{" "}
              {exerciseDone ? "Done" : "Pending"}{" "}
            </p>
            {!sessionVisible ? (
              <button
                className="btn btn-outline-primary"
                onClick={() => setVisability(true)}
              >
                Show
              </button>
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={() => setVisability(false)}
              >
                Hide
              </button>
            )}
          </span>
        </div>
        {!sessionVisible ? null : (
          <div>
            {!checkinDone ? (
              <CheckinForm
                setDone={setCheckin}
                behavior={["times", "shared your appreciation"]}
              />
            ) : (
              <CheckinResults
                results={resultsData}
                behavior={["times", "shared your appreciation"]}
              />
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ margin: "2rem 0" }}>
                <h3>
                  {emojis.map((emoji, i) => {
                    return <Emoji symbol={emoji[0]} label={emoji[1]} key={i} />
                  })}{" "}
                  {title}
                </h3>
              </span>
              <Link to={slug} className="btn btn-primary">
                Start the exercise
              </Link>
            </div>
          </div>
        )}
      </Col>
    </Row>
  )
}

export default SessionRow
