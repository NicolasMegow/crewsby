import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import CrewImage from "../components/layout/crew-example"
import CrewRow from "../components/layout/crew-row"
import { FaMask, FaNumber } from "../components/shared/fa-icons"
import SignupCTA from "../components/ctas/signup-cta"

const CrewsPage = () => {
  return (
    <Layout>
      <SEO title="Curated crews" />
      <Container>
        <Row>
          <Col>
            <CrewImage />
            <h1>Train with a curated crew of peers.</h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Crewsby matches you with a crew of three peers. Together you work
              through 4-12 sessions.
            </p>
          </Col>
        </Row>
        <CrewRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <p className="mintitle">Networking</p>
            <h2>Training is social.</h2>
            <p>
              Peers accelerate your learning by offering new perspectives. They
              also challenge you to perform at your best. Every time you come
              together, you do a little check-in with your crew. This helps keep
              everyone in the loop and on track.
            </p>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="feature-emoji">
              <Emoji symbol="🗺️" label="networking" />{" "}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg>
            <p className="mintitle">Perspectives</p>
            <h2>Training on the job.</h2>
            <p>
              Exercises provide application and reflection of new methods and
              ideas. All the exercises in a peer training are self guided and
              can be done literally anywhere in 60 minutes.
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
            <p className="feature-emoji">
              <Emoji symbol="☕" label="support" />{" "}
            </p>
            <p className="feature-emoji">
              <Emoji symbol="🥊" label="feedback" />{" "}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Accountability</p>
            <h2>Training in chunks.</h2>
            <p>
              Peer trainings gradually develop your skills through structured
              sequences of 12 exercises. Each exercise takes you one step
              further.
            </p>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="feature-emoji">
              <Emoji symbol="📅" label="accountability" />{" "}
            </p>
          </Col>
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default CrewsPage
