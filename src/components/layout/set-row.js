import React from "react"
import { Row, Col } from "react-bootstrap"

const SetRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          4<br></br>Menschen
        </p>
        <p className="feature-text">
          Lerne gemeinsam in einer Crew mit 3 ausgewählten Peers.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          60<br></br>Minuten
        </p>
        <p className="feature-text">
          Lerne 60 Minuten pro Woche in gemeinsamen Übungen mit Deiner Crew.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          12<br></br>Wochen
        </p>
        <p className="feature-text">
          Entwickele echte Fähigkeiten über 12 Wochen strukturierter Übungen.
        </p>
      </Col>
    </Row>
  )
}

export default SetRow
