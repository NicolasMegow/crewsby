import React from "react"
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import FAQData from "../content/faq.yaml"

const FAQPage = () => {
    return (
        <Layout>
            <Head title="FAQ" />
            <Container>
                <Row>
                    <Col>
                        <p style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <FontAwesomeIcon icon={['fal', 'question-circle']} fixedWidth size="4x"/>
                            <FontAwesomeIcon icon={['fal', 'question-circle']} fixedWidth size="4x" rotation={90} />
                            <FontAwesomeIcon icon={['fal', 'question-circle']} fixedWidth size="4x" rotation={180} />
                            <FontAwesomeIcon icon={['fal', 'question-circle']} fixedWidth size="4x" rotation={270} /> {'  '}
                            <FontAwesomeIcon icon={['fal', 'info-circle']} fixedWidth size="4x" color="#0f62cc" /></p>
                        <h1>Deine Fragen, <p style={{color:"#0f62cc"}}>unsere Antworten ;)</p></h1>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Accordion defaultActiveKey="1">
                        {FAQData.content.map((hinweis) => (
                            <Card key={hinweis.id}>
                                    <Accordion.Toggle  as={Card.Header} eventKey={hinweis.id} >
                                        {hinweis.q}
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey={hinweis.id}>
                                    <Card.Body>{hinweis.a}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </Row>
                <Row style={{ marginTop: "3rem" }}>
                    <Col>
                        <p>Wir freuen uns von euch zu hören!
                            Schreibt uns bei weiteren Fragen gerne persönlich eine E-Mail an Lächeln@Teamgefühl.com.</p>
                    </Col>
                </Row>
                <CTA/>
            </Container>
        </Layout>
    )
}

export default FAQPage