import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import MakeChange from "../img/svg/MakeChange.svg"
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
              Use our tutorials & exercises to grow personally or improve
              together as a team.
            </p>
            <Link
              className="btn btn-lg btn-primary"
              to="/people-skills"
              style={{ marginRight: "2rem" }}
            >
              Develop a people skill
            </Link>
            <Link className="btn btn-lg btn-outline-primary" to="/teambuilding">
              Start teambuilding
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="skills">
          <Col lg>
            <h2>Learn by doing.</h2>
            <p>
              Change doesn't happen. It is made by you. Crewsby designs
              tutorials & exercises from the best ideas out there. Deploy them
              right on your job.
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
              Knowing + <span style={{ color: "#4285F4" }}>Doing</span>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="crew">
          <Col lg>
            <h2>Grow personally & as a team.</h2>
            <p>
              Learn to contribute to a great team & improve as a crew how you
              collaborate together. Committing to improve as a crew holds you
              accountable.
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
            <p style={{ fontSize: "3rem" }}>
              <Emoji symbol="👩🏾‍🦱" label="crew-1" />{" "}
              <Emoji symbol="🧔🏼" label="crew-2" /> <br></br>
              <Emoji symbol="👩🏻‍🦰" label="crew-3" />{" "}
              <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                & YOU
              </span>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="training on the job">
          <Col lg>
            <h2>Teamwork = Team + Work.</h2>
            <p>
              Great teamwork requires both: A workflow unique to your crew &
              strong personal relationships within the crew.
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
            <span style={{ textAlign: "center" }}>
              <p style={{ marginBottom: "0" }}>Workflow</p>
              <TeamPlusWork height="10rem" />
              <p>Relationships</p>
            </span>
          </Col>
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default IndexPage
