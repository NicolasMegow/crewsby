import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { shortcodes } from "./shortcodes"

import { Hint1, Hint2 } from "../components/teambuilding/hint"

import SharingButtons from "../components/ctas/sharing-buttons"
import MarkAsDone from "../components/teambuilding/mark-as-done"
import FeedbackWidget from "../components/teambuilding/feedback-widget"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        contentType
        slug
      }
      frontmatter {
        hack
        type
        job
        crewsize
        time
      }
      body
    }
  }
`

const ExerciseTemplate = ({ data, location }) => {
  const { slug } = data.mdx.fields
  const { hack, type, job } = data.mdx.frontmatter
  const url = location.href ? location.href : ""

  return (
    <Layout>
      <SEO title={hack} description={job} pathname={`/teambuilding/${slug}`} />
      <Container
        style={{
          maxWidth: "750px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <Link to="../" style={{ marginLeft: ".3rem" }}>
              ⟵ Back
            </Link>
            <p style={{ margin: "1rem 0rem 0rem .3rem", fontWeight: "500" }}>
              {type}:
            </p>
            <h1 style={{ marginTop: 0, lineHeight: 1 }}>{hack}</h1>
            <p className="subtitle">{job}</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          <Col>
            <Hint1 />
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
            <Hint2 />
          </Col>
        </Row>
        <Row>
          <Col style={{ maxWidth: "750px" }}>
            <SharingButtons link={url} message={`${hack}`} />
            <MarkAsDone hackName={hack} hackType={type} />
            <FeedbackWidget resource={hack} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ExerciseTemplate
