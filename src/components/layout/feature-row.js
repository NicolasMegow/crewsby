import React from "react"
import { Row, Col } from "react-bootstrap"

const FeatureRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">1</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            24 / 7 / 365
          </p>
          <p className="feature-text">
            Trainiere wann Du willst, wo Du willst.
          </p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">2</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            Max 30 Min.
          </p>
          <p className="feature-text">Trainiere in vielen kleinen Einheiten.</p>
        </div>
      </Col>
      <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">3</div>
        <div>
          <p style={{ marginBottom: "0" }} className="mintitle">
            100% online
          </p>
          <p className="feature-text">
            Kein Trainer, keine Reisen, nur Training.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default FeatureRow
