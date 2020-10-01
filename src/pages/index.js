import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import KeyFeatures from "../components/layout/key-features"
import SkillGallery from "../components/layout/skill-gallery"
import PHuntCTA from "../components/ctas/phunt-cta"

import Teambuilding from "../img/svg/Teambuilding.svg"

import EmailSignup from "../components/ctas/email-signup"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row id="intro">
          <Col>
            <Teambuilding width="100%" />
            <h1>
              Develop your leadership skills<br></br>with a crew of peers.
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Crewsby helps you to strengthen relationships
              <Emoji symbol="❤️" label="heart" />, optimize processes{" "}
              <Emoji symbol="💪" label="muscle" />, and unleash creativity{" "}
              <Emoji symbol="🧠" label="brain" />.
            </p>
          </Col>
        </Row>
        <EmailSignup />
        <KeyFeatures id="key features" />
        <Row style={{ marginTop: "8rem" }} id="skills">
          <Col lg>
            <p className="mintitle">Skills</p>
            <h2 className="feature-h">Become a leader.</h2>
            <p>
              Continuous learning is the basis for success. Crewsby offers
              professional trainings to develop your leadership skills on the
              job.
            </p>
            <p>
              <Link to="/leadership-skills">
                → More skills are coming soon!
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
            <SkillGallery style={{ margin: "2rem" }} />
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }} id="crew">
          <Col lg>
            <p className="mintitle">Peer training</p>
            <h2 className="feature-h">Learn with peers.</h2>
            <p>
              Training becomes easier with peers. Your crew of peers provides
              support and feedback. Your crew also holds you accountable for
              your progress when the daily grind clogs you down.
            </p>
            <p>
              <Link to="/peer-training">→ See the peer in training</Link>
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
        <Row style={{ marginTop: "8rem" }} id="training">
          <Col lg>
            <p className="mintitle">Learning zone</p>
            <h2 className="feature-h">Learn through exercise.</h2>
            <p>
              Everyone learns best by doing. Crewsby designs sequences of
              exercises to guide you on this adventure. In your learning zone
              you can experiment safely and effectively to develop and hone your
              skills.
            </p>
            <p>
              <Link to="/learning-zone">→ Explore your learning zone</Link>
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
              <strike style={{ textDecorationColor: "#DB4437" }}>
                Dreaming
              </strike>
              ...<br></br>
              <strike style={{ textDecorationColor: "#DB4437" }}>
                Talking
              </strike>
              ...<br></br>
              Doing<span style={{ color: "#4285F4" }}>.</span>
            </p>
          </Col>
        </Row>
        <PHuntCTA />
      </Container>
    </Layout>
  )
}

export default IndexPage
