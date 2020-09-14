import React from "react"
import { Row, Col } from "react-bootstrap"

import { FaMask } from "../shared/fa-icons"

// Benefits of entering the learning zone

const BenefitRow = () => {
  return (
    <Row style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <FaMask icon="check" size="2x" /> Interesting challenges{" "}
        </p>
      </Col>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <FaMask icon="check" size="2x" /> Mistakes expected
        </p>
      </Col>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <FaMask icon="check" size="2x" /> Exercise & reflection
        </p>
      </Col>
    </Row>
  )
}

export default BenefitRow
