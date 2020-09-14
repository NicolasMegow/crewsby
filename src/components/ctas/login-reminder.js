import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import Emoji from "../shared/emoji"

const LoginReminder = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <Row>
      <Col>
        <h2
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          className="feature-h"
        >
          <Emoji symbol="👋" label="welcome" /> Please log in to enter your
          learning zone.
        </h2>
        <Link
          to="/"
          className="btn btn-outline-primary  btn-lg"
          style={{ marginRight: ".5rem" }}
          onClick={event => {
            event.preventDefault()
            loginWithPopup({ action: "signup" })
          }}
        >
          Sign up
        </Link>
        <Link
          to="/"
          className="btn btn-primary btn-lg"
          style={{ marginRight: "0" }}
          onClick={event => {
            event.preventDefault()
            loginWithPopup()
          }}
        >
          Log in
        </Link>
      </Col>
    </Row>
  )
}

export default LoginReminder
