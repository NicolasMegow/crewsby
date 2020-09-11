import React from "react"
import { Row, Col } from "react-bootstrap"

const TrainingRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">1</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Crew{" "}
          </p>
          <p className="feature-text">
            Learn from and with a crew of three peers.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">2</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Exercises
          </p>
          <p className="feature-text">
            Learn by doing in exercises and reflecting on your experiences.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">3</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Progress
          </p>
          <p className="feature-text">
            Develop and hone your skill over the course of 12 exercises.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default TrainingRow
