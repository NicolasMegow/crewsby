import React from "react"
import { graphql, Link, navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import { FaTitle } from "../components/shared/fa-icons"

import Loading from "../components/shared/loading"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

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
      body
    }
  }
`

const SkillTemplate = ({ data }) => {
  const { isAuthenticated, user, loading } = useAuth0()
  const { skill } = data.mdx.fields
  const { job, icon, summary } = data.mdx.frontmatter

  if (loading) {
    return <Loading />
  }
  if (!isAuthenticated && typeof window !== "undefined") {
    navigate("../")
    return <Loading />
  }
  return (
    <Layout>
      <SEO title={job} description={summary} pathname={`/skills/${skill}`} />
      <Container>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col>
            <Link to="../">⟵ Back</Link>
            <h1 style={{ fontSize: "3rem" }}>
              <FaTitle icon={icon} title={job} />
            </h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SkillTemplate
