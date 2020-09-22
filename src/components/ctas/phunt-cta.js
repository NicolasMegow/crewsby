import React, { useState, useRef } from "react"

import { Row, Col, Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"

import Emoji from "../shared/emoji"
import { TextField } from "../shared/form-fields"

const PHuntCTA = () => {
  const [signupData, setSignup] = useState()
  const [signupState, setState] = useState(false)
  const btnRef = useRef()
  const handleCallback = (name, info) => {
    setSignup(prevState => ({
      ...prevState,
      [name]: info,
    }))
  }

  const sendSignup = async signupData => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("signup"), {
        data: { signupData },
      })
    )
  }
  return (
    <Row style={{ marginTop: "8rem" }}>
      <Col>
        <h2 className="feature-h">
          <Emoji symbol="👋" label="welcome" /> Join for free today!
        </h2>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          Save $89 per skill until Oct 1st, 2020.
        </p>
        <p>
          Every skill consists of 12 practise sessions for you and your crew of
          peers. <br></br>We'll match you to three peers according to your
          preferences.
        </p>
        <Row>
          <Col>
            <TextField
              name="Name"
              type="text"
              placeholder="Jay Gatsby"
              handleCallback={handleCallback}
            />
          </Col>
          <Col>
            <TextField
              name="Email"
              type="email"
              placeholder="jay.gatsby@crewsby.com"
              handleCallback={handleCallback}
            />
          </Col>
        </Row>
        <br></br>
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
              Welcome! We've received your info and are off to work. We'll send
              you everything you need soon to get you started. <br></br>
              Thank you for training with us!
            </strong>
          ) : null}
        </p>
      </Col>
    </Row>
  )
}

export default PHuntCTA
