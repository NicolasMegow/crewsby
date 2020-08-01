import React from "react"
import { Row, Col } from 'react-bootstrap'

import Emoji from "../shared/emoji"

const FeatureRow = () => {
    return (
        <Row style={{ marginTop: "4rem" }}>
            <Col lg={4}>
                <div style={{fontSize:"2.4rem"}}><Emoji symbol="⏱" label="timer" />{' '}</div>
                <p style={{fontSize:"1.4rem"}}>30 Min / Training</p>
            </Col>
            <Col lg={4}>
                <div style={{fontSize:"2.4rem"}}><Emoji symbol="💻" label="laptop" />{' '}</div>
                <p style={{fontSize:"1.4rem"}}>Remote by Design</p>
            </Col>
            <Col lg={4}>
                <div style={{fontSize:"2.4rem"}}><Emoji symbol="✨" label="duble" />{' '}</div>
                <p style={{fontSize:"1.4rem"}}>Solo + Team Trainings</p>
            </Col>
        </Row>
    )
}

export default FeatureRow