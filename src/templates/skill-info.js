import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import { FaTitle, FaLoading } from "../components/shared/fa-icons"
import SharingButtons from "../components/ctas/sharing-buttons"

import TrainingSignup from "../components/ctas/training-signup"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Emoji from "../components/shared/emoji"
import LoginRequest from "../components/ctas/login-request"

const shortcodes = {
  Emoji,
}

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

const SkillInfo = ({ data, props, location }) => {
  const { isAuthenticated, user, loading } = useAuth0()
  const url = location.href ? location.href : ""
  const { skill } = data.mdx.fields
  const {
    job,
    method,
    level,
    icon,
    sources,
    benefits,
    summary,
  } = data.mdx.frontmatter

  return (
    <Layout>
      <SEO title={job} description={summary} pathname={`/skills/${skill}`} />
      <Container>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col>
            <Link to="../">⟵ Back</Link>
            <h1>
              <FaTitle icon={icon} title={job} />
            </h1>
            <p>
              Level {level} of {method}
            </p>
            <p>{summary}</p>
            <p>Learn how to:</p>
            <ul>
              {benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <p>
              Inspired by: <Link to={`/about-us`}>{sources}</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <MDXProvider components={shortcodes}>
              <MDXRenderer {...props}>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </Col>
        </Row>
        {isAuthenticated ? (
          !loading ? (
            <TrainingSignup skill={job} user={user} />
          ) : (
            <FaLoading />
          )
        ) : (
          <LoginRequest />
        )}
        <SharingButtons link={url} message={`${job}`} />
      </Container>
    </Layout>
  )
}

export default SkillInfo
