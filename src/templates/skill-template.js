import React from "react"
import { graphql, Link, navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import { FaTitle } from "../components/shared/fa-icons"

import Loading from "../components/shared/loading"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import SessionRow from "../components/learning-zone/session-row"

export const query = graphql`
  query($slug: String!, $skill: String!) {
    mdx(fields: { slug: { eq: $slug }, skill: { eq: $skill } }) {
      fields {
        contentType
        skill
        slug
      }
      frontmatter {
        job
        method
        level
        icon
        sources
        benefits
        summary
      }
    }
    allMdx(
      filter: { fields: { skill: { eq: $skill }, slug: { ne: $slug } } }
      sort: { fields: [frontmatter___level], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            contentType
            skill
          }
          frontmatter {
            method
            method_slug
            title
            type
            level
            emojis
            excerpt
          }
        }
      }
    }
  }
`

const SkillTemplate = ({ data }) => {
  const { isAuthenticated, user, loading } = useAuth0()
  const { skill } = data.mdx.fields
  const { job, icon, summary } = data.mdx.frontmatter
  const startingDate = new Date("2020-09-14")

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {!isAuthenticated && typeof window !== "undefined" ? (
        navigate("../")
      ) : (
        <Layout>
          <SEO
            title={job}
            description={summary}
            pathname={`/skills/${skill}`}
          />
          <Container>
            <Row style={{ margin: "2rem 0" }}>
              <Col>
                <Link to="../">⟵ Back</Link>
                <h1 style={{ fontSize: "3rem" }}>
                  <FaTitle icon={icon} title={job} />
                </h1>
                <p>Currently: 0 / 12</p>
              </Col>
            </Row>
            {data.allMdx.edges.map((session, i) => {
              const sessionValue = i + 1
              return (
                <SessionRow
                  session={sessionValue}
                  exercise={session}
                  key={i}
                  week={[startingDate, i]}
                />
              )
            })}
          </Container>
        </Layout>
      )}
    </>
  )
}

export default SkillTemplate
