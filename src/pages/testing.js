import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"

import StarRating from "../components/app/star-rating"

const TestingPage = () => {
    const curTime = new Date().toLocaleString();

    return (
        <Layout>
            <Head title="TESTING" />
                <Container style={{ maxWidth: "700px", marginLeft: "0" }}>
                    <Row style={{ marginTop: "3rem" }}>
                        <Col>
                            <p>Läuft</p>
                            <p>{curTime}</p>
                            <StarRating />
                        </Col>
                    </Row>
                </Container>
        </Layout>
    );
}

export default TestingPage

