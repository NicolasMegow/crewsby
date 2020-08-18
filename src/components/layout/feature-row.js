import React from "react"
import { Row, Col } from 'react-bootstrap'

import Emoji from "../shared/emoji"

const FeatureRow = () => {
    return (
        <Row style={{ marginTop: "4rem" }}>
            <Col lg={4}>
                <div style={{ fontSize: "2.4rem" }}><Emoji symbol="❤️" label="heart" />{' '}</div>
                <p style={{ fontSize: "1.4rem" }}>Starkes Teamgefühl</p>
            </Col>
            <Col lg={4}>
                <div style={{ fontSize: "2.4rem" }}><Emoji symbol="💪" label="muscle" />{' '}</div>
                <p style={{ fontSize: "1.4rem" }}>Individuelle Abläufe</p>
            </Col>
            <Col lg={4}>
                <div style={{ fontSize: "2.4rem" }}><Emoji symbol="🧠" label="brain" />{' '}</div>
                <p style={{ fontSize: "1.4rem" }}>Entfesselte Kreativität</p>
            </Col>
        </Row>
    )
}

export default FeatureRow