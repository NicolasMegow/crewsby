import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"
import { FaCheck, FaTimes } from "../components/shared/fa-icons"

import EmailSignup from "../components/ctas/email-signup"
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
            <h1>Hack your culture.</h1>
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "2rem",
              }}
            >
              Crewsby curates & designs spicy culture hacks{" "}
              <Emoji symbol="🌶️" label="spice" /> for crews.
              <br></br>Enter your learning zone to enjoy bittersweet reflection{" "}
              <Emoji symbol="🍋" label="zest" />.<br></br>Or join our community
              for nutritious peer-feedback{" "}
              <Emoji symbol="🍏" label="vitamins" />.
            </p>
          </Col>
        </Row>
        <EmailSignup />
        <Row style={{ marginTop: "6rem" }} id="skills">
          <Col lg>
            <p className="mintitle">Culture hacks</p>
            <h2 className="feature-h">Use actionable resources.</h2>
            <p>
              The world is full of advice. Crewsby curates the best ideas &
              designs actionable resources for you to deploy on your job. Change
              doesn't happen. It is created by exploring new paths.
            </p>
            <p>
              <Link to="/culture-hacks">→ Deploy culture hacks</Link>
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
              Knowing
              <span style={{ color: "#4285F4" }}> + </span>
              Doing
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="training on the job">
          <Col lg>
            <p className="mintitle">Learning zone</p>
            <h2 className="feature-h">Track & review your journey.</h2>
            <p>
              Everyone learns best by doing. In your learning zone you can
              experiment safely and effectively on the job. Start developing
              your skills or track the progress of your change initiative.
            </p>
            <p>
              <Link to="/learning-zone">→ Enter your learning zone</Link>
            </p>
          </Col>
          <Col
            lg
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <span>
              <FaTimes />
              <FaTimes />
              <FaCheck />
              <FaTimes />
              <br></br>
              <FaCheck />
              <FaTimes />
              <FaTimes />
              <FaTimes />
              <br></br>
              <FaCheck />
              <FaTimes />
              <FaCheck />
              <FaCheck />
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="crew">
          <Col lg>
            <p className="mintitle">Peer support</p>
            <h2 className="feature-h">Learn with & from peers.</h2>
            <p>
              Learning is easier and better with peers. Your crew of peers
              provides support and feedback. It also holds you accountable for
              your progress when the daily grind clogs you down.
            </p>
            <p>
              <Link to="/peer-support">→ Explore learning with peers</Link>
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
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default IndexPage
