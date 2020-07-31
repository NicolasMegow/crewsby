import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import Emoji from "../components/shared/emoji"
import CTA from "../components/layout/cta"

import FAQData from "../content/faq.yaml"

const PreisePage = () => {
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <h2><Emoji symbol="❓" label="question"/>{' '}Deine Fragen, unsere Antworten.</h2>
                        {FAQData.content.map((hinweis) => (
                            <div style={{marginTop:"3rem"}} key={hinweis.id}>
                            <h3>{hinweis.q}</h3>
                            <p>{hinweis.a}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row style={{ marginTop: "3rem" }}>
                    <Col>
                        <p>Wir freuen uns von Dir zu hören!
                            Schreib uns eine E-Mail an <a href="mailto:Fragen@crewsby.com">Fragen@crewsby.com.</a></p>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default PreisePage