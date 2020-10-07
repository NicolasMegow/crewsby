import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import EmailSignup from "../components/ctas/email-signup"
import KeyFeatures from "../components/layout/key-features"
import SkillGallery from "../components/layout/skill-gallery"
import PricingRow from "../components/layout/pricing-row"
import SignupCTA from "../components/ctas/signup-cta"

import Teambuilding from "../img/svg/Teambuilding.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row id="intro">
          <Col>
            <Teambuilding width="100%" />
            <h1>
              People skills training on the job<br></br>with a curated crew of
              peers.
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Upgrade your <Emoji symbol="❤️" label="heart" /> communication,{" "}
              <Emoji symbol="💪" label="muscle" /> collaboration, and{" "}
              <Emoji symbol="🧠" label="brain" /> innovation skills with
              Crewsby.
            </p>
          </Col>
        </Row>
        <EmailSignup />
        <KeyFeatures id="key features" />
        <Row style={{ marginTop: "8rem" }} id="skills">
          <Col lg>
            <p className="mintitle">People skills</p>
            <h2 className="feature-h">Teamwork like a pro.</h2>
            <p>
              Continuous learning is the basis for success. Crewsby offers
              professional trainings to develop your people skills on the job.
            </p>
            <p>
              <Link to="/people-skills">→ More skills are coming soon!</Link>
            </p>
          </Col>
          <Col
            lg
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SkillGallery style={{ margin: "2rem" }} />
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }} id="training on the job">
          <Col lg>
            <p className="mintitle">Training on the job</p>
            <h2 className="feature-h">Learn through exercise.</h2>
            <p>
              Everyone learns best by doing. Crewsby designs sequences of
              exercises to guide you on this adventure. In your learning zone
              you can experiment safely and effectively to develop and hone your
              skills.
            </p>
            <p>
              <Link to="/training-on-the-job">
                → Discover your training on the job
              </Link>
            </p>
          </Col>
          <Col
            lg
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                lineHeight: "1.2",
                margin: "2rem",
              }}
            >
              Knowing
              <br></br>
              <span style={{ color: "#4285F4" }}>+</span>
              <br></br>
              Doing
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }} id="crew">
          <Col lg>
            <p className="mintitle">Curated crews</p>
            <h2 className="feature-h">Learn with peers.</h2>
            <p>
              Training is easier and better with peers. Your crew of peers
              provides support and feedback. It also holds you accountable for
              your progress when the daily grind clogs you down.
            </p>
            <p>
              <Link to="/curated-crews">→ Explore training with peers</Link>
            </p>
          </Col>
          <Col
            lg
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "3rem", margin: "2rem", color: "#151515" }}>
              <Emoji symbol="👩🏾‍🦱" label="crew-1" />{" "}
              <Emoji symbol="🧔🏼" label="crew-2" /> <br></br>
              <Emoji symbol="👩🏻‍🦰" label="crew-3" />{" "}
              <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                & YOU
              </span>
            </p>
          </Col>
        </Row>
        <PricingRow />
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default IndexPage
