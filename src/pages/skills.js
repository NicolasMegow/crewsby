import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import ReturnOnTeam from "../img/svg/ReturnOnTeam.svg"
import SkillTile from "../components/shared/skill-tile"
import ComingSoon from "../components/shared/coming-soon"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"

export const query = graphql`
  query {
    allMdx(
      filter: {
        fields: { contentType: { eq: "skills" }, slug: { eq: "_index" } }
      }
    ) {
      group(field: frontmatter___category) {
        edges {
          node {
            fields {
              slug
              contentType
              skill
            }
            frontmatter {
              job
              method
              level
              category
              icon
              type
              summary
              benefits
            }
          }
        }
      }
    }
  }
`

const SkillsPage = ({ data }) => {
  const { loading } = useAuth0()
  const categories = [
    ["❤️", "heart", "Strenghten relationships"],
    ["💪", "muscle", "Individualize processes"],
    ["🧠", "brain", "Unleash creativity"],
  ]

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <Layout>
      <SEO title="Skills" />
      <Container>
        <Row style={{ marginBottom: "2rem" }}>
          <Col>
            <ReturnOnTeam width="100%" height="300" />
            <h1>Skills trump know-how.</h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Crewsby provides a range of skills to develop your professonal
              work. All of these skills are rooted in tried and tested methods.
            </p>
          </Col>
        </Row>
        {data.allMdx.group.map((group, i) => {
          return (
            <Row key={categories[i][2]} style={{ marginBottom: "2rem" }}>
              <Col>
                <h2>
                  <Emoji symbol={categories[i][0]} label={categories[i][1]} />{" "}
                  {categories[i][2]}
                </h2>
                <Row>
                  {group.edges.map((edge, i) => {
                    return <SkillTile key={i} edge={edge} />
                  })}
                </Row>
              </Col>
            </Row>
          )
        })}
        <Row>
          <Col>
            <ComingSoon />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SkillsPage
