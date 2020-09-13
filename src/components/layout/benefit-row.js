import React from "react"
import { Row, Col } from "react-bootstrap"

import Emoji from "../shared/emoji"

// Benefits of entering the learning zone

const BenefitRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ fontSize: "2.4rem" }}>
            <Emoji symbol="❤️" label="heart" />{" "}
          </span>
          Strong relationships
        </p>
      </Col>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ fontSize: "2.4rem" }}>
            <Emoji symbol="💪" label="muscle" />{" "}
          </span>
          Individual processes
        </p>
      </Col>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ fontSize: "2.4rem" }}>
            <Emoji symbol="🧠" label="brain" />{" "}
          </span>
          Unleashed creativity
        </p>
      </Col>
    </Row>
  )
}

export default BenefitRow
