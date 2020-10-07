import React from "react"

import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"
import EmailSignup from "./email-signup"

const SignupCTA = () => {
  return (
    <>
      <Row style={{ marginTop: "4rem" }}>
        <Col>
          <h2 className="feature-h">
            <Emoji symbol="👋" label="welcome" /> Join your first crew for free!
          </h2>
          <p>
            <strong>
              {" "}
              We'll match you to three interesting peers according to your
              preferences.
            </strong>
          </p>
        </Col>
      </Row>
      <EmailSignup />
    </>
  )
}

export default SignupCTA
