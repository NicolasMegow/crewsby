import React from "react"

import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"
import EmailSignup from "./email-signup"

const SignupCTA = () => {
  return (
    <>
      <Row style={{ marginTop: "8rem" }}>
        <Col>
          <h2 className="feature-h">
            <Emoji symbol="👋" label="welcome" /> Stay up to date on new culture
            hacks!
          </h2>
          <p>
            We'll send you the occasional heads-up when we've added new culture
            hacks to our collection.
          </p>
        </Col>
      </Row>
      <EmailSignup />
    </>
  )
}

export default SignupCTA
