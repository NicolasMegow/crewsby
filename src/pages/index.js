import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Emoji from "../components/shared/emoji"
import { FaCheck } from "../components/shared/fa-icons"
import MakeChange from "../img/svg/MakeChange.svg"
import Helix from "../img/svg/Helix.svg"
import TeamPlusWork from "../img/svg/Teampluswork.svg"
import SignupCTA from "../components/ctas/signup-cta"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row id="intro">
          <Col>
            <MakeChange width="100%" />
            <h1>Make change.</h1>
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "2rem",
              }}
            >
              You are the source of change. Crewsby is your power-up. <br></br>
              Use our tutorials, exercises & trainings to grow personally and
              improve together as a team.
            </p>
            <Link
              className="btn btn-lg btn-primary"
              to="/people-skills"
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
            >
              Develop a people skill
            </Link>
            <Link
              className="btn btn-lg btn-outline-primary"
              to="/teambuilding"
              style={{ marginBottom: "1rem" }}
            >
              Start teambuilding
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="skills">
          <Col lg style={{ display: "flex", alignItems: "center" }}>
            <span>
              <h2>Learn by doing.</h2>
              <p>
                Change doesn't happen. It is made by you. Crewsby designs
                actionable tutorials, exercises & trainings for you to deploy
                right on your job. Every resource we offer is remote-ready and
                works without a trainer.
              </p>
            </span>
          </Col>
          <Col lg style={{ padding: "0 2rem" }}>
            <div className="area-blue">
              <p style={{ marginBottom: "0" }}>
                <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                  <FaCheck /> Tutorials:
                </span>{" "}
                Step by step guides
              </p>
            </div>
            <div className="area-blue">
              <p style={{ marginBottom: "0" }}>
                <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                  <FaCheck /> Exercises:
                </span>{" "}
                Activities for deliberate practice
              </p>
            </div>
            <div className="area-blue">
              <p style={{ marginBottom: "0" }}>
                <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                  <FaCheck /> Trainings:
                </span>{" "}
                Combos of tutorials & exercises
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="crew">
          <Col lg>
            <h2>Grow personally & together.</h2>
            <p>
              Learn to contribute to a great team & improve as a crew how you
              collaborate together. Great teamwork requires mindful crewmates &
              regular investments in collaboration.
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
            <p>People skills</p>
            <Helix width="8rem" height="8rem" />
            <p>Teambuilding</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="training on the job">
          <Col lg style={{ display: "flex", alignItems: "center" }}>
            <span>
              <h2>Improve Team + Work.</h2>
              <p>
                A unique workflow is just the visible part of teamwork. Under
                the surface great teamwork emerges from strong personal
                relationships within the crew. Work on both with Crewsby.
              </p>
            </span>
          </Col>
          <Col
            lg
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "0" }}>
                <Emoji symbol="💪" label="muscle" /> Workflow
              </p>
              <TeamPlusWork height="10rem" />
              <p>
                <Emoji symbol="❤️" label="heart" /> Relationships
              </p>
            </span>
          </Col>
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default IndexPage
