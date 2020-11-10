import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import { FaCheck } from "../components/shared/fa-icons"

import UpgradeReminder from "../components/ctas/upgrade-reminder"

import GrowPersonally from "../img/svg/Growpersonally.svg"
import SkillTile from "../components/people-skills/skill-tile"
import ComingSoon from "../components/people-skills/coming-soon"
import SignupCTA from "../components/ctas/signup-cta"

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "peopleskills" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            skill
            category
            method
            sources
          }
        }
      }
    }
  }
`

const SupportPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="People skills" />
      <Container>
        <Row>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <h1>Grow personally.</h1>
              <p className="subtitle">
                Learn on the job, because you can. Level up your people skills
                to build stronger relationships & create smooth workflows.
              </p>
            </span>
          </Col>
          <Col lg={6}>
            <GrowPersonally width="100%" height="18rem" />
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
                Set yourself weekly goals to constantly refine your skills.
              </p>
            </div>
          </Col>
          <Col lg={12}>
            <UpgradeReminder variant="peopleskills" />
          </Col>
        </Row>
        <Row
          style={{ marginTop: "4rem", marginLeft: "auto", marginRight: "auto" }}
        >
          {data.allMdx.edges.map((hack, i) => {
            return <SkillTile key={i} edge={hack} />
          })}
        </Row>
        <ComingSoon />
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default SupportPage
