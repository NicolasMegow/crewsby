import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"
import SignupCTA from "../components/ctas/signup-cta"
import { FaCheck } from "../components/shared/fa-icons"

import ReturnOnLearning from "../img/svg/ReturnOnLearning.svg"

import FAQData from "../content/faq.yaml"

const PricingPage = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <Row>
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <h1>Invest in culture.</h1>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "2rem",
                }}
              >
                The soft issues do not rush, but they kill great companies
                silently. Steadily investing in the way you work together pays
                dividends individually & collectively.
              </p>
            </span>
          </Col>
          <Col lg>
            <ReturnOnLearning width="100%" height="300" />
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col>
            <h2>Crewsby Free: Free forever</h2>
            <p>Everything you need to make change.</p>
          </Col>
        </Row>
        <Row>
          <div
            className="area-blue"
            style={{ margin: ".5rem", width: "32rem" }}
          >
            <h3>
              <FaCheck /> All people skills.
            </h3>
            <p style={{ marginBottom: "0" }}>
              Grow personally by completing all our trainings on people skills.
            </p>
          </div>
          <div
            className="area-blue"
            style={{ margin: ".5rem", width: "32rem" }}
          >
            <h3>
              <FaCheck /> All teambuilding resources.
            </h3>
            <p style={{ marginBottom: "0" }}>
              Grow together as a team with all our tutorials & exercises on
              great teamwork.
            </p>
          </div>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col>
            <h2>
              Crewsby Business: $99/month flat <small>coming soon!</small>
            </h2>
            <p>Everything you need to change continuously & at scale.</p>
          </Col>
        </Row>
        <Row>
          <div
            className="area-blue"
            style={{ margin: ".5rem", width: "32rem" }}
          >
            <h3>
              <FaCheck /> Unlock the learning zone.
            </h3>
            <p style={{ marginBottom: "0" }}>
              Get access to specific training programs & peer supervision for
              leaders & managers.
            </p>
          </div>
          <div
            className="area-blue"
            style={{ margin: ".5rem", width: "32rem" }}
          >
            <h3>
              <FaCheck /> Unlock the crewbuilder.
            </h3>
            <p style={{ marginBottom: "0" }}>
              Get access to crew-specific recommendations for teambuilding &
              individal development.
            </p>
          </div>
          <div
            className="area-blue"
            style={{ margin: ".5rem", width: "32rem" }}
          >
            <h3>
              <FaCheck /> Celebrate learning on the job.
            </h3>
            <p style={{ marginBottom: "0" }}>
              Show your crew that you appreciate & support their efforts to
              improve w/ Crewsby.
            </p>
          </div>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>Free yourself of ineffective E-Learning!</h2>
          </Col>
          <Col lg className="area-white">
            <h3>
              <Emoji symbol="🍏" label="appel" />
              <br></br>Crewsby
            </h3>
            <p>
              Tutorials & exercises<br></br>→ Learning by doing
            </p>
          </Col>
          <Col lg className="area-white">
            <h3>
              <Emoji symbol="🍿" label="popcorn" />
              <br></br> Edutainment
            </h3>
            <p>
              Advice & video lectures<br></br>→ Fake competence
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col>
            <h2>
              <Emoji symbol="❓" label="question" /> Common questions
            </h2>
            {FAQData.content.map(hinweis => (
              <div style={{ marginTop: "3rem" }} key={hinweis.id}>
                <h3>{hinweis.q}</h3>
                <p>{hinweis.a}</p>
              </div>
            ))}
            <h3 style={{ marginTop: "3rem" }}>
              What if I have more questions?
            </h3>
            <p>
              We'd be happy to answer them! Just send us an email at{" "}
              <a href="mailto:hello@crewsby.com">hello@crewsby.com.</a>
            </p>
          </Col>
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default PricingPage
