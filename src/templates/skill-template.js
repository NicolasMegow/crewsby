import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { shortcodes } from "./shortcodes"

import SharingButtons from "../components/ctas/sharing-buttons"
import FeedbackWidget from "../components/teambuilding/feedback-widget"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        contentType
        slug
      }
      frontmatter {
        skill
        category
        method
        crewsize
        time
      }
      body
    }
  }
`

const SkillTemplate = ({ data, location }) => {
  const { slug } = data.mdx.fields
  const { skill, category, method } = data.mdx.frontmatter
  const url = location.href ? location.href : ""

  return (
    <Layout>
      <SEO
        title={skill}
        description={method}
        pathname={`/people-skills/${slug}`}
      />
      <Container
        style={{
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <Link to="../" style={{ marginLeft: ".3rem" }}>
              ⟵ Back
            </Link>
            <h1 style={{ marginTop: 0, lineHeight: 1 }}>{skill}</h1>
            <p className="subtitle">
              Improve {category} with {method}.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          <Col>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </Col>
        </Row>
        <Row>
          <Col style={{ maxWidth: "750px" }}>
            <SharingButtons link={url} message={`${skill}`} />
            <FeedbackWidget resource={skill} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SkillTemplate
