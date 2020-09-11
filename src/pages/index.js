import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import KeyFeatures from "../components/layout/key-features"
import SkillGallery from "../components/layout/skill-gallery"
import PHuntCTA from "../components/ctas/phunt-cta"

import Teambuilding from "../img/svg/Teambuilding.svg"

const IndexPage = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row id="intro">
          <Col>
            <Teambuilding width="100%" />
            <h1>
              Develop your skills<br></br>with a crew of peers.
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Crewsby offers a range of peer trainings that develop your
              professional skills and expand your network.
            </p>
            <Link
              to="/skills"
              className="btn btn-outline-primary btn-lg"
              style={{ marginRight: "2rem", marginBottom: "2rem" }}
            >
              {" "}
              Browse the skills
            </Link>
            <Link
              to="/"
              onClick={event => {
                event.preventDefault()
                loginWithPopup({ action: "signup" })
              }}
              className="btn btn-primary btn-lg"
              style={{ marginRight: "2rem", marginBottom: "2rem" }}
            >
              Join a crew
            </Link>
          </Col>
        </Row>
        <KeyFeatures id="key features" />
        <Row style={{ marginTop: "8rem" }} id="skills">
          <Col lg>
            <p className="mintitle">Professional skills</p>
            <h2 className="feature-h">Develop professionally.</h2>
            <p>
              Continuous learning is the basis for success. Crewsby provides
              easy online delivery for a range of peer trainings to enhance your
              professional skills on the job.
            </p>
            <p>
              <Link to="/skills">→ More skills are coming soon!</Link>
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
            <SkillGallery />
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }} id="crew">
          <Col lg>
            <p className="mintitle">Peer training</p>
            <h2 className="feature-h">Learn with peers.</h2>
            <p>
              Training becomes easier with peers. Your crew of peers provides
              support and feedback. You learn with and from them just as much as
              they learn from you. Your crew also holds you accountable for your
              progress when the daily grind clogs you down.
            </p>
            <p>
              <Link to="/skills">→ See the peer in training</Link>
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
            <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
              <Emoji symbol="🗺️" label="world" /> Contacts<br></br>
              <Emoji symbol="🥊" label="feedback" /> Feedback<br></br>
              <Emoji symbol="☕" label="coffee" /> Support<br></br>
              <Emoji symbol="📅" label="time" /> Commitment
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
