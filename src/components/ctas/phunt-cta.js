import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import Emoji from "../shared/emoji"

const PHuntCTA = () => {
  const { loginWithPopup } = useAuth0()
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
          Save $89 per peer training until Oct 1st, 2020.
        </p>
        <p>
          Every peer training consists of 12 exercises for you to do with your
          crew of peers. <br></br>We'll match you to three peers according to
          your preferences.
        </p>
        <Link
          to="/"
          onClick={event => {
            event.preventDefault()
            loginWithPopup({ action: "signup" })
          }}
          className="btn btn-primary btn-lg"
          style={{ marginTop: "2rem" }}
        >
          Join a crew
        </Link>
      </Col>
    </Row>
  )
}

export default PHuntCTA
