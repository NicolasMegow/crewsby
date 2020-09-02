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
          Lerne gemeinsam in einer Crew mit drei ausgewählten Peers.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          1<br></br>Stunde
        </p>
        <p className="feature-text">
          Investiere 1 Stunde pro Woche in gemeinsame Übungen mit Deiner Crew.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          12<br></br>Wochen
        </p>
        <p className="feature-text">
          Entwickle echte Fähigkeiten in einem strukturierten Programm.
        </p>
      </Col>
    </Row>
  )
}

export default SetRow
