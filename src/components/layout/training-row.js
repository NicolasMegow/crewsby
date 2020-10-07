import React from "react"
import { Row, Col } from "react-bootstrap"

const TrainingRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">1</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Self-reviews{" "}
          </p>
          <p className="feature-text">
            Reflect on your actions and strengthen your self-efficacy.
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
            Learn by doing in exercises with your crew of peers.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">3</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Levels
          </p>
          <p className="feature-text">
            Upgrade your people skills over 3 levels of 4 exercises each.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default TrainingRow
