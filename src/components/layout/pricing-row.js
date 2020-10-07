import React from "react"
import { Row, Col } from "react-bootstrap"

const PricingRow = () => {
  return (
    <Row style={{ marginTop: "8rem" }}>
      <Col
        md
        style={{
          border: "1px solid #151515",
          borderRadius: "6px",
          padding: "1.4rem",
          margin: "1.4rem",
        }}
      >
        <h3>Single level</h3>
        <p>
          <strong>Level 1, 2, or 3 of a people skill.</strong>
        </p>
        <p style={{ marginBottom: "0" }}>Includes:</p>
        <ul>
          <li>Matching to a crew of peers</li>
          <li>4 sessions w/ self-reviews & exercises</li>
          <li>4 bonus resources</li>
          <li>Lifetime access</li>
        </ul>
        <h3>
          39€{" "}
          <small style={{ fontWeight: "bold", color: "#4285F4" }}>
            0€ for your first level!
          </small>
        </h3>
      </Col>
      <Col
        md
        style={{
          border: "1px solid #151515",
          borderRadius: "6px",
          padding: "1.4rem",
          margin: "1.4rem",
        }}
      >
        <h3>Full skill</h3>
        <p>
          <strong>Levels 1-3 for a people skill.</strong>
        </p>
        <p style={{ marginBottom: "0" }}>Includes:</p>
        <ul>
          <li>Matching to 1-3 crews of peers</li>
          <li>12 sessions w/ self-reviews & exercises</li>
          <li>12 bonus resources</li>
          <li>Lifetime access</li>
        </ul>
        <h3>
          99€{" "}
          <small style={{ fontWeight: "bold", color: "#4285F4" }}>
            SAVE 15%!
          </small>
        </h3>
      </Col>
    </Row>
  )
}

export default PricingRow
