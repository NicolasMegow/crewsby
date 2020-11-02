import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Teamboat from "../img/svg/EinBoot.svg"

import FilteredList from "../components/teambuilding/filtered-list"
import { FaCheck } from "../components/shared/fa-icons"
import UpgradeReminder from "../components/ctas/upgrade-reminder"

import HackTile from "../components/teambuilding/hack-tile"
import SignupCTA from "../components/ctas/signup-cta"

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "teambuilding" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            hack
            type
            category
            time
            job
            crewsize
          }
        }
      }
    }
  }
`

const HacksPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Teambuilding" />
      <Container>
        <Row>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <h1>Grow together.</h1>
              <p className="subtitle">
                You are on the job & in the same boat. Use our tutorials &
                exercises to make the best out of yourselves.
              </p>
            </span>
          </Col>
          <Col lg={6}>
            <Teamboat width="100%" />
          </Col>
          <Col lg={6} style={{ marginTop: "2rem" }}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Spice up your team meeting.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Pick & choose what you like for your next meeting or
                retrospective.
              </p>
            </div>
          </Col>
          <Col lg={6} style={{ marginTop: "2rem" }}>
            <div className="area-blue">
              <h3>
                <FaCheck /> Make your own combos.
              </h3>
              <p style={{ marginBottom: "0" }}>
                Combine tutorials & exercises for a unique teambuilding
                workshop.
              </p>
            </div>
          </Col>
          <Col lg={12}>
            <UpgradeReminder variant="teambuilding" />
          </Col>
        </Row>
        {/*<FilteredList data={data} />*/}
        <Row
          style={{ marginTop: "4rem", marginLeft: "auto", marginRight: "auto" }}
        >
          {data.allMdx.edges.map((hack, i) => {
            return <HackTile key={i} edge={hack} />
          })}
        </Row>
        <SignupCTA />
      </Container>
    </Layout>
  )
}

export default HacksPage
