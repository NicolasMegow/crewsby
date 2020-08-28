import React from "react"
import { Row, Col } from "react-bootstrap"

import Emoji from "../shared/emoji"

const BenefitRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ fontSize: "2.4rem" }}>
            <Emoji symbol="❤️" label="heart" />{" "}
          </span>
          Starkes Teamgefühl
        </p>
      </Col>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ fontSize: "2.4rem" }}>
            <Emoji symbol="💪" label="muscle" />{" "}
          </span>
          Inspaniduelle Abläufe
        </p>
      </Col>
      <Col lg={4}>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ fontSize: "2.4rem" }}>
            <Emoji symbol="🧠" label="brain" />{" "}
          </span>
          Entfesselte Kreativität
        </p>
      </Col>
    </Row>
  )
}

export default BenefitRow
