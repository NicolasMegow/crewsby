import React from "react"
import { Row, Col } from "react-bootstrap"

const CrewRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">1</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Networking{" "}
          </h3>
          <p className="feature-text">
            Connect to peers from different industries and countries.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">2</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Perspectives
          </h3>
          <p className="feature-text">
            Learn from the experience of your peers and share your point of
            view.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">3</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Accountability
          </h3>
          <p className="feature-text">
            Persevere on your journey despite the daily grind clogging you down.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default CrewRow
