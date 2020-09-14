import React from "react"
import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"

const LearningZoneInfo = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col>
        <h1>
          <Emoji symbol="🐡" label="fugu" />
          <Emoji symbol="🔪" label="knife" />
          <Emoji symbol="🍣" label="sushi" />
        </h1>
        <h1>
          You deserve opportunities <br></br>to make mistakes.
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Top performer spend at least 10% of their time in their learning zone.
          <br></br>
          Join them and improve your game constantly!
        </p>
      </Col>
    </Row>
  )
}

export default LearningZoneInfo
