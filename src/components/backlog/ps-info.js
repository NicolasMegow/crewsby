import React from "react"
import { Row, Col } from "react-bootstrap"

const PSInfo = () => {
  return (
    <Row style={{ marginTop: "2rem" }}>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">A</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Get feedback
          </h3>
          <p className="feature-text">
            Learn from the experience of your peers in different industries.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">B</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Give feedback
          </h3>
          <p className="feature-text">
            Share your experience & point of view to help others in similar
            situations.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">C</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Join a circle
          </h3>
          <p className="feature-text">
            Persevere on your journey despite the daily grind clogging you down.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default PSInfo
