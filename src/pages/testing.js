import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import StarRating from "../components/app/star-rating"

const TestingPage = () => {
    const curTime = new Date().toLocaleString();
    const level = "1. Kleine Gesten"
    return (
        <Layout>
            <SEO title="TESTING" />
            <Container style={{ maxWidth: "700px", marginLeft: "0" }}>
                <Row style={{ marginTop: "3rem" }}>
                    <Col>
                        <p>Läuft</p>
                        <p>{curTime}</p>
                        <StarRating level={level} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default TestingPage

