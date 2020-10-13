import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import HackTile from "../components/culture-hacks/hack-tile"

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "hacks" } } }) {
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
      <SEO title="Culture hacks" />
      <Container>
        <Row>
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <p className="title-emoji">
                <Emoji symbol="🌶️" label="spicy" />
              </p>
              <h1>Culture hacks</h1>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "2rem",
                }}
              >
                Everything you do influences culture. Find actionable hacks to
                improve teamwork and collaboration.
              </p>
            </span>
          </Col>
          <Col
            lg
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "2rem",
            }}
          >
            <span>
              <h2>Tutorials</h2>
              <p>Step-by-step guides for self-made change.</p>
              <h2 style={{ marginTop: "2rem" }}>Exercises</h2>
              <p>Simple activities that stretch your comfort zone.</p>
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            {data.allMdx.edges.map((hack, i) => {
              return <HackTile key={i} edge={hack} />
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default HacksPage
