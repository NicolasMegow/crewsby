import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import { FaCheck } from "../components/shared/fa-icons"

import UpgradeReminder from "../components/ctas/upgrade-reminder"

import Teambuilding from "../img/svg/Teambuilding.svg"
import ComingSoon from "../components/people-skills/coming-soon"
import SignupCTA from "../components/ctas/signup-cta"

const SupportPage = () => {
  return (
    <Layout>
      <SEO title="People skills" />
      <Container>
        <Row>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end" }}>
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
          <Col lg={6}>
            <Teambuilding width="100%" />
          </Col>
          <Col lg={6} style={{ marginTop: "2rem" }}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Learn whenever you like.
              </h3>
              <p style={{ marginBottom: "0" }}>
                All you need is your smartphone, a pen & some paper.
              </p>
            </div>
          </Col>
          <Col lg={6} style={{ marginTop: "2rem" }}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Make learning a habit.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Schedule weekly sessions to truly hone your people skills.
              </p>
            </div>
          </Col>
          <Col lg={12}>
            <UpgradeReminder variant="peopleskills" />
          </Col>
        </Row>
        <ComingSoon />
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default SupportPage
