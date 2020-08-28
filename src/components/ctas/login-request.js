import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import Emoji from "../shared/emoji"

const LoginRequest = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ marginBottom: "3rem" }}>
            <Emoji symbol="👋" label="welcome" /> Bitte erst einloggen
          </h1>
          <Link
            to="/"
            className="btn btn-outline-primary"
            style={{ marginRight: ".5rem" }}
            onClick={event => {
              event.preventDefault()
              loginWithPopup({ action: "signup" })
            }}
          >
            Anmelden
          </Link>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginRight: "0" }}
            onClick={event => {
              event.preventDefault()
              loginWithPopup()
            }}
          >
            Einloggen
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginRequest
