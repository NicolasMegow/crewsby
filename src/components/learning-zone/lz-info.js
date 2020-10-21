import React from "react"
import { Row, Col } from "react-bootstrap"

const LZInfo = () => {
  return (
    <Row style={{ marginTop: "2rem" }}>
      <Col lg={6} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">A</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Personal learning zone
          </h3>
          <p className="feature-text">
            Make continuous improvment a habit & track your progress.
          </p>
        </div>
      </Col>
      <Col lg={6} style={{ display: "flex", alignItems: "flex-end" }}>
        <div className="feature-num">B</div>
        <div>
          <h3 style={{ marginBottom: "0" }} className="mintitle">
            Crew learning zone
          </h3>
          <p className="feature-text">
            Come together with your crew ot get ever better together.
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default LZInfo
