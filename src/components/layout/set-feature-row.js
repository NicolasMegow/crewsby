import React from "react"
import { Row, Col } from "react-bootstrap"

const SetFeatureRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">1</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Crew{" "}
          </p>
          <p className="feature-text">
            Lerne mit und von drei ausgewählten Menschen.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">2</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Übungen
          </p>
          <p className="feature-text">
            Lerne durch Ausprobieren im sicheren Rahmen.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">3</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Fortschritt
          </p>
          <p className="feature-text">
            Lerne Stück für Stück in einem strukturierten Programm.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default SetFeatureRow
