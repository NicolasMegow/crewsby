import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import PHuntCTA from "../components/ctas/phunt-cta"
import TrainingRow from "../components/layout/training-row"

import Teamboat from "../img/svg/EinBoot.svg"
import { FaMask, FaNumber } from "../components/shared/fa-icons"

const TrainingPage = () => {
  return (
    <Layout>
      <SEO title="Training on the job" />
      <Container>
        <Row>
          <Col>
            <Teamboat width="100%" />
            <h1>Learn with peers.</h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Crewsby matches you with a crew of three peers. Together you work
              through 12 exercises.
            </p>
          </Col>
        </Row>
        <TrainingRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <p className="mintitle">Crew</p>
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
            <p
              style={{ fontWeight: "bold", fontSize: "1.6rem", margin: "2rem" }}
            >
              <Emoji symbol="🗺️" label="world" /> Contacts<br></br>
              <Emoji symbol="🥊" label="feedback" /> Feedback<br></br>
              <Emoji symbol="☕" label="coffee" /> Support<br></br>
              <Emoji symbol="📅" label="time" /> Commitment
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg>
            <p className="mintitle">Exercises</p>
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
            <p className="feature-num">
              <Emoji symbol="🎯" label="target" />{" "}
            </p>
            <strong style={{ fontSize: "1.6rem", marginLeft: "1rem" }}>
              Practice <br></br>makes <br></br>perfect.
            </strong>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Progress</p>
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
            <p
              style={{ fontWeight: "bold", fontSize: "1.6rem", margin: "2rem" }}
            >
              <FaMask icon="check" size="2x" />{" "}
              <FaMask icon="check" size="2x" />{" "}
              <FaMask icon="check" size="2x" />{" "}
              <FaMask icon="check" size="2x" /> <br></br>
              <FaMask icon="check" size="2x" />{" "}
              <FaMask icon="check" size="2x" />{" "}
              <FaMask icon="check" size="2x" />{" "}
              <FaMask icon="check" size="2x" /> <br></br>
              <FaMask icon="check" size="2x" /> <FaNumber number={10} />{" "}
              <FaNumber number={11} /> <FaNumber number={12} />
            </p>
          </Col>
        </Row>
        <PHuntCTA />
      </Container>
    </Layout>
  )
}

export default TrainingPage
