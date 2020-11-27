import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"
import SignupCTA from "../components/ctas/signup-cta"
import { FaCheck, FaMask } from "../components/shared/fa-icons"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import ReturnOnLearning from "../img/svg/ReturnOnLearning.svg"
import Waitlist from "../components/ctas/waitlist-signup"
import FAQData from "../content/faq.yaml"

const PricingPage = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <Row>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "2rem" }}>
              <h1>Invest in teamwork.</h1>
              <p className="subtitle">
                Soft issues don't rush, but they kill great teams silently.
                Steadily investing in the way you work together pays dividends &
                compounds.
              </p>
            </span>
          </Col>
          <Col lg={6}>
            <ReturnOnLearning width="100%" height="300" />
          </Col>
          <Col lg={4}>
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                <FaCheck /> Learn by doing
              </span>
            </p>
          </Col>
          <Col lg={4}>
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                <FaCheck /> Boost self-efficacy
              </span>
            </p>
          </Col>
          <Col lg={4}>
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                <FaCheck /> Fuel new work
              </span>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>Crewsby Free: Free forever</h2>
            <p className="subtitle">
              Access all tutorials & exercises free forever. No logins, no
              limits, no excuses. <br></br>We'll continue to add new people
              skills & team building resources.
            </p>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaMask icon="user" /> People skills
              </h3>
              <p style={{ marginBottom: "0" }}>
                Grow personally by training with our combos of 12 exercises on
                workflows & relationships.
              </p>
              <Link
                className="btn btn-lg btn-primary"
                to="/people-skills"
                style={{ margin: ".8rem 0" }}
              >
                Discover your people skills
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaMask icon="users" /> Team building
              </h3>
              <p style={{ marginBottom: "0" }}>
                Grow together as a crew with our tutorials & exercises on great
                teamwork.
              </p>
              <Link
                className="btn btn-lg btn-primary"
                to="/team-building"
                style={{ margin: ".8rem 0" }}
              >
                Start team building
              </Link>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>
              Crewsby Business: $299/month flat <small>coming soon!</small>
            </h2>
            <p className="subtitle">
              Unleash teamwork at scale for the whole business.<br></br>
              Crewsby Business delivers learning on the job for everyone.
            </p>
          </Col>{" "}
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaMask icon="comments" /> Unlock learning circles.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Get access to learning circles w/ peer support to develop
                lasting skills & new connections.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaMask icon="award" /> Celebrate learning on the job.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Show your crew that you appreciate & support their efforts to
                improve w/ Crewsby.
              </p>
            </div>
          </Col>
          <Col lg={12} style={{ marginTop: "2rem" }}>
            <Waitlist />
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col>
            <h2>
              <Emoji symbol="❓" label="question" /> Common questions
            </h2>
            {FAQData.content.map(hinweis => (
              <div
                style={{ marginTop: "2rem", maxWidth: "750px" }}
                key={hinweis.id}
              >
                <h3>{hinweis.q}</h3>
                <p>{hinweis.a}</p>
              </div>
            ))}
            <h3 style={{ marginTop: "2rem" }}>
              What if I have more questions?
            </h3>
            <p>
              We'd be happy to answer them! Just send us an email at{" "}
              <a href="mailto:support@crewsby.com">support@crewsby.com.</a>
            </p>
          </Col>
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default PricingPage
