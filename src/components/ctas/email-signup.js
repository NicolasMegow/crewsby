import React, { useState, useRef } from "react"
import { Row, Col, Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"
import { TextField } from "../shared/form-fields"

const EmailSignup = () => {
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
    <>
      <Row>
        <Col lg>
          <TextField
            name="Name"
            type="text"
            placeholder="Jay Gatsby"
            handleCallback={handleCallback}
          />
        </Col>
        <Col lg>
          <TextField
            name="Email"
            type="email"
            placeholder="jay.gatsby@crewsby.com"
            handleCallback={handleCallback}
          />
        </Col>
        <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
          <Button
            size="lg"
            style={{ marginBottom: "2rem" }}
            ref={btnRef}
            onClick={() => {
              sendSignup(signupData)
              btnRef.current.setAttribute("disabled", "disabled")
              setState(true)
            }}
          >
            Find me a crew!
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            {signupState ? (
              <strong>
                Welcome! We've received your info and are off to work. We'll
                send you everything you need soon to get you started. <br></br>
                Thank you for training with us!
              </strong>
            ) : null}
          </p>
        </Col>
      </Row>
    </>
  )
}

export default EmailSignup
