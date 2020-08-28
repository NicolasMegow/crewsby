import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"
import CTA from "../components/ctas/cta"

import FAQData from "../content/faq.yaml"

const PreisePage = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <h1>
              <Emoji symbol="❓" label="question" /> Deine Fragen,<br></br>
              unsere Antworten<span style={{ color: "#4285F4" }}>.</span>
            </h1>
            {FAQData.content.map(hinweis => (
              <div style={{ marginTop: "3rem" }} key={hinweis.id}>
                <h3>{hinweis.q}</h3>
                <p>{hinweis.a}</p>
              </div>
            ))}
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <p>
              Wir freuen uns von Dir zu hören! Schreib uns eine E-Mail an{" "}
              <a href="mailto:Fragen@crewsby.com">Fragen@crewsby.com.</a>
            </p>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default PreisePage
