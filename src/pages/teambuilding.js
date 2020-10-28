import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Teamboat from "../img/svg/EinBoot.svg"

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
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <h1>Grow together.</h1>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "2rem",
                }}
              >
                You are on the job & in the same boat. Use our tutorials &
                exercises to make the best out of yourselves.
              </p>
            </span>
          </Col>
          <Col lg>
            <Teamboat width="100%" />
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
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
