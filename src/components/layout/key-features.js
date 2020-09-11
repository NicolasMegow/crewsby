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
          Meet for 1 hour every week to learn with and from your peers.
        </p>
      </Col>
      <Col lg={4}>
        <p className="feature-num" style={{ fontSize: "3rem" }}>
          12 Weeks
        </p>
        <p className="feature-text">
          Develop and hone skill over the course of 12 weeks.
        </p>
      </Col>
    </Row>
  )
}

export default SetRow
