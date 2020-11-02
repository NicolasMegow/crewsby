import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"
import SignupCTA from "../components/ctas/signup-cta"
import { FaCheck } from "../components/shared/fa-icons"

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
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "2rem" }}>
              <h1>Invest in teamwork.</h1>
              <p className="subtitle">
                Soft issues don't rush, but they kill great teams silently.
                Steadily investing in the way you work together pays dividends &
                compounds.
              </p>
            </span>
          </Col>
          <Col lg>
            <ReturnOnLearning width="100%" height="300" />
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>Crewsby Free: Free forever</h2>
            <p className="subtitle">
              Access all tutorials & exercises without login. Create a free
              account to log & track your progress.
            </p>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaCheck /> All people skills.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Grow personally by training with our combos of tutorials &
                exercises on workflows & relationships.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaCheck /> All teambuilding resources.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Grow together as a crew with our tutorials & exercises on great
                teamwork.
              </p>
            </div>
          </Col>
          <Col lg={12} style={{ marginTop: "2rem" }}>
            <Link
              className="btn btn-lg btn-primary"
              to="/"
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
              onClick={event => {
                event.preventDefault()
                loginWithPopup({ action: "signup" })
              }}
            >
              Signup for free
            </Link>
            <Link
              className="btn btn-lg btn-outline-primary"
              to="/teambuilding"
              style={{ marginBottom: "1rem" }}
            >
              Start without signup
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>
              Crewsby Teams: $49/month flat <small>coming soon!</small>
            </h2>
            <p className="subtitle">Everything in Crewsby Free plus:</p>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Unlock the learning zone.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Get access to training programs w/ peer support to develop
                lasting skills & new connections.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Unlock the crewbuilder.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Get access to recommendations & combos specific to your crew.
                Join crewmates into a single team.
              </p>
            </div>
          </Col>
          <Col lg={12} style={{ marginTop: "2rem" }}>
            <Waitlist />
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>
              Crewsby Business: $99/month flat <small>coming soon!</small>
            </h2>
            <p className="subtitle">
              Everything in Crewsby Teams at scale for the whole company.
            </p>
          </Col>{" "}
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Celebrate learning on the job.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Show your crew that you appreciate & support their efforts to
                improve w/ Crewsby.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Visualize learning on the job.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Get access to a dashboard of all the teams learning with Crewsby
                & their progress.
              </p>
            </div>
          </Col>
          <Col lg={12} style={{ marginTop: "2rem" }}>
            <Waitlist />
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>Free yourself of ineffective E-Learning!</h2>
            <p className="subtitle">
              It's your choice which type of culture you favor. We don't judge
              ;)
            </p>
          </Col>
          <Col lg className="area-white">
            <h3 style={{ fontSize: "1.8rem" }}>
              <Emoji symbol="🍏" label="appel" />
              <br></br>Crewsby
            </h3>
            <p>
              Tutorials & exercises
              <br></br>→ Learn by doing
              <br></br>→ Increase in self-efficiancy
              <br></br>→ Fuel for change
            </p>
          </Col>
          <Col lg className="area-white">
            <h3 style={{ fontSize: "1.8rem" }}>
              <Emoji symbol="🍿" label="popcorn" />
              <br></br> Edutainment
            </h3>
            <p>
              Advice & video lectures
              <br></br>→ Fake competence
              <br></br>→ Increase in complacency
              <br></br>→ Fuel for stagnation
            </p>
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
