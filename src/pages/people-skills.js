import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Teambuilding from "../img/svg/Teambuilding.svg"
import ComingSoon from "../components/people-skills/coming-soon"
import SignupCTA from "../components/ctas/signup-cta"

const SupportPage = () => {
  return (
    <Layout>
      <SEO title="People skills" />
      <Container>
        <Row>
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <h1>Grow personally.</h1>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "2rem",
                }}
              >
                Learn on the job, because you can. Level up your people skills
                to build stronger relationships & create smooth workflows.
              </p>
            </span>
          </Col>
          <Col lg>
            <Teambuilding width="100%" />
          </Col>
        </Row>
        <ComingSoon />
        <Row style={{ marginTop: "6rem" }}></Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default SupportPage
