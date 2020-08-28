import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "react-bootstrap"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import FaPlus from "../shared/faplus"

const PreiseRow = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <>
      <Row style={{ marginTop: "8rem", marginBottom: "2rem" }}>
        <Col>
          <p className="mintitle">Training als Flatrate</p>
          <h2 className="feature-h">Alle Übungen kostenlos & ohne Login.</h2>
          <p>
            <Link to="/solo-training/uebungen">→ Solo-Übungen ansehen</Link>{" "}
            <Link to="/teamentwicklung/uebungen">→ Team-Übungen ansehen</Link>
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          lg
          style={{
            marginTop: "2rem",
            border: "1px solid #000000",
            padding: "1.2rem",
            margin: "1.2rem",
          }}
        >
          <h3>Solo-Account</h3>
          <p>Alle Übungen</p>
          <p>
            <FaPlus /> Solo-Sets & Logbuch<br></br>
            <FaPlus /> Newletter mit neuen Übungen<br></br>
          </p>
          <h3 style={{ marginBottom: "0" }}>kostenlos</h3>
          <p>für immer</p>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={event => {
              event.preventDefault()
              loginWithPopup({ action: "signup" })
            }}
          >
            Solo-Training starten
          </Button>
        </Col>
        <Col
          lg
          style={{
            marginTop: "2rem",
            border: "1px solid #000000",
            padding: "1.2rem",
            margin: "1.2rem",
          }}
        >
          <h3>Team-Account</h3>
          <p>Solo-Accounts für die Crew</p>
          <p>
            <FaPlus /> Team-Sets & Logbuch<br></br>
            <FaPlus /> exklusive Team-Challenges<br></br>
          </p>
          <h3 style={{ marginBottom: "0" }}>89 €</h3>
          <p>pro Team/Monat</p>
          <Button
            variant="primary"
            size="lg"
            onClick={event => {
              event.preventDefault()
              loginWithPopup({ action: "signup" })
            }}
          >
            Team-Account testen
          </Button>
        </Col>
        <Col
          lg
          style={{
            marginTop: "2rem",
            border: "1px solid #000000",
            padding: "1.2rem",
            margin: "1.2rem",
          }}
        >
          <h3>Business-Account</h3>
          <p>Solo- & Team-Accounts</p>
          <p>
            <FaPlus /> Weiterbildungs-Dashboard<br></br>
            <FaPlus /> exklusive Solo-Programme<br></br>
          </p>
          <h3 style={{ marginBottom: "0" }}>9 €</h3>
          <p>pro Mitarbeiter/Monat</p>
          <Button
            variant="outline-primary"
            size="lg"
            href="mailto:moin@crewsby.de"
          >
            Mehr erfahren
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default PreiseRow
