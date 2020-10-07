import React from "react"
import { Row, Col } from "react-bootstrap"

const SetRow = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          4 Peers
        </p>
        <p className="feature-text">
          Join a crew of 4 peers to develop a new skill together.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          1 Hour
        </p>
        <p className="feature-text">
          Meet in 1 hour sessions to practise and reflect with your peers.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          4 Sessions
        </p>
        <p className="feature-text">
          Develop and hone a skill over 3 levels of 4 sessions each.
        </p>
      </Col>
    </Row>
  )
}

export default SetRow
