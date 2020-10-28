import React from "react"

import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"
import EmailSignup from "./email-signup"

const SignupCTA = () => {
  return (
    <>
      <Row style={{ marginTop: "6rem" }}>
        <Col>
          <h2>
            <Emoji symbol="👋" label="welcome" /> Stay up to date on new
            resources!
          </h2>
          <p>
            We'll send you the occasional heads-up when we've added new
            tutorials or exercises to our collection.
          </p>
        </Col>
      </Row>
      <EmailSignup />
    </>
  )
}

export default SignupCTA
