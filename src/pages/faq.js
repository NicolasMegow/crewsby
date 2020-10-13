import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"
import SignupCTA from "../components/ctas/signup-cta"

import FAQData from "../content/faq.yaml"

const PreisePage = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <h1>
              <Emoji symbol="❓" label="question" /> Your questions,<br></br>
              our answers<span style={{ color: "#4285F4" }}>.</span>
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
              We'd love to read from you! Just send us an email at{" "}
              <a href="mailto:hello@crewsby.com">hello@crewsby.com.</a>
            </p>
          </Col>
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default PreisePage
