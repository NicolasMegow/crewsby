import React, { useState, useRef } from "react"
import { Row, Col, Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"

import { FieldTitle, ChoiceChips } from "../shared/form-fields"
import Emoji from "../shared/emoji"

const TrainingSignup = ({ skill, user }) => {
  const userInfo = [user.nickname, user.email]
  const [signupData, setSignup] = useState({ user: userInfo })
  const [signupState, setState] = useState(false)
  const btnRef = useRef()
  const handleCallback = (name, info) => {
    setSignup(prevState => ({
      ...prevState,
      [name]: info,
    }))
  }
  const sendSignup = async userData => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("signup"), {
        data: { userData },
      })
    )
  }
  return (
    <>
      <Row style={{ marginTop: "8rem" }}>
        <Col>
          <h2 className="feature-h">
            <Emoji symbol="🙌" label="hands-up" />
            <br></br>Join a crew to starting learning!
          </h2>
          <p>
            You'll get an invoice for $89 after 6 exercises. Until then you can
            withdraw without penalty.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <FieldTitle>Which weekdays suit you best?</FieldTitle>
          <ChoiceChips
            name="day-choices"
            options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
            handleCallback={handleCallback}
          />
        </Col>
        <Col md={8}>
          <FieldTitle>Which time of day suit you best?</FieldTitle>
          <ChoiceChips
            name="time-choices"
            options={["Mornings (7-9am)", "Noon (12-1pm)", "Evening (5-7pm)"]}
            handleCallback={handleCallback}
          />
        </Col>
        <Col md={8}>
          <FieldTitle>When would you like to start?</FieldTitle>
          <ChoiceChips
            name="start-dates"
            options={["This week", "Next week", "In 2 weeks", "In a month"]}
            handleCallback={handleCallback}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            size="lg"
            ref={btnRef}
            onClick={() => {
              sendSignup(signupData)
              btnRef.current.setAttribute("disabled", "disabled")
              setState(true)
            }}
          >
            Find me a crew!
          </Button>
          <p>
            {signupState ? (
              <strong>
                Welcome! We've received your info and are off to work. We'll
                send you everything you need soon.
              </strong>
            ) : null}
          </p>
        </Col>
      </Row>
    </>
  )
}

export default TrainingSignup
