import React from "react"
import { Row, Col } from 'react-bootstrap'


const HowToRow = () => {
    return (
        <Row style={{ marginTop: "4rem" }}>
            <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                <div className="feature-num">1</div>
                <div>
                    <h3>20 Min. blocken</h3>
                    <p className="feature-text">Etwas Zeit investieren.</p>
                </div>
            </Col>
            <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                <div className="feature-num">2</div>
                <div>
                    <h3>Ziel setzen</h3>
                    <p className="feature-text">Verbesserung aussuchen.</p>
                </div>
            </Col>
            <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                <div className="feature-num">3</div>
                <div>
                    <h3>Übung machen</h3>
                    <p className="feature-text">Methode trainieren.</p>
                </div>
            </Col>
        </Row>
    )
}

export default HowToRow