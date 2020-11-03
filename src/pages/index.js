import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Emoji from "../components/shared/emoji"
import { FaCheck, FaError, FaSuccess } from "../components/shared/fa-icons"
import MakeChange from "../img/svg/MakeChange.svg"
import Helix from "../img/svg/Helix.svg"
import Leverage from "../img/svg/Leverage.svg"
import TeamPlusWork from "../img/svg/Teampluswork.svg"
import SignupCTA from "../components/ctas/signup-cta"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Self-made team development" />
      <Container>
        <Row id="intro">
          <Col lg={12}>
            <MakeChange width="100%" />
            <h1>Improve teamwork.</h1>
            <p className="subtitle">
              Crewsby offers actionable resources for self-service leadership &
              team development. <br></br>
              Use our free tutorials & exercises to grow personally and upgrade
              the way you work together.
            </p>
          </Col>
          <Col lg={4}>
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                <FaCheck /> Optimize workflow
              </span>
            </p>
          </Col>
          <Col lg={4}>
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                <FaCheck /> Boost team spirit
              </span>
            </p>
          </Col>
          <Col lg={4}>
            <p style={{ marginBottom: "0" }}>
              <span style={{ fontWeight: "700", fontSize: "1.4rem" }}>
                <FaCheck /> Increase performance
              </span>
            </p>
          </Col>
          <Col lg={12} style={{ marginTop: "2rem" }}></Col>
        </Row>
        <Row style={{ marginTop: "6rem" }}>
          <Col lg={12} style={{ marginBottom: "1rem" }}>
            <h2>Grow personally & together.</h2>
            <p className="subtitle">
              Great teamwork rests on two pillars. Strengthen either or both
              with Crewsby.
            </p>
          </Col>
          <Col lg className="area-white">
            <h3>People skills</h3>
            <p>
              Combos of tutorials & exercises for deliberate practice in
              improving workflows & relationships.
            </p>
            <Link
              className="btn btn-lg btn-primary"
              to="/people-skills"
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
            >
              Discover your people skills
            </Link>
          </Col>
          <Col
            lg={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Helix width="8rem" height="8rem" />
          </Col>
          <Col lg className="area-white">
            <h3>Teambuilding</h3>
            <p>
              Tutorials & exercises that provide new ways of working together as
              a team.
            </p>
            <Link
              className="btn btn-lg btn-primary"
              to="/teambuilding"
              style={{ marginBottom: "1rem" }}
            >
              Start teambuilding
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "6rem" }} id="skills">
          <Col lg={12} style={{ marginBottom: "2rem" }}>
            <h2>Improve on the job.</h2>
            <p className="subtitle">
              All our tutorials & exercises are free, remote-ready and work
              without a trainer.
            </p>
          </Col>
          <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
            <span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "16rem",
                }}
              >
                <span>
                  <FaError />
                  <FaSuccess />
                  <FaError />
                  <FaError />
                  <br></br>
                  <FaSuccess />
                  <FaSuccess />
                  <FaError />
                  <FaSuccess />
                  <br></br>
                  <FaError />
                  <FaSuccess />
                  <FaSuccess />
                  <FaSuccess />
                </span>
              </div>
              <h3>Learn by doing.</h3>
              <p>
                Grow personally & together through deliberate practice and
                reflection.
              </p>
            </span>
          </Col>
          <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
            <span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "16rem",
                }}
              >
                <Leverage height="8rem" width="14rem" />
              </div>
              <h3>Focus on the essentials.</h3>
              <p>
                Leverage the essential 20% of behaviors & practices for 80%
                improvement.
              </p>
            </span>
          </Col>
          <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
            <span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "16rem",
                }}
              >
                <span style={{ textAlign: "center" }}>
                  <p style={{ marginBottom: "0" }}>
                    <Emoji symbol="💪" label="muscle" /> Workflow
                  </p>
                  <TeamPlusWork height="8rem" width="14rem" />
                  <p>
                    <Emoji symbol="❤️" label="heart" /> Relationships
                  </p>
                </span>
              </div>
              <h3>Boost Team + Work.</h3>
              <p>
                Create unique workflows & build strong relationships under the
                surface.
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
