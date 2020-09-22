import React from "react"

import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"
import EmailSignup from "./email-signup"

const PHuntCTA = () => {
  return (
    <>
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
            Every skill consists of 12 practise sessions for you and your crew
            of peers. <br></br>We'll match you to three peers according to your
            preferences.
          </p>
        </Col>
      </Row>
      <EmailSignup />
    </>
  )
}

export default PHuntCTA
