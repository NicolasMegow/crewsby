import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { shortcodes } from "./shortcodes"

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

const TutorialTemplate = ({ data, location }) => {
  const { slug } = data.mdx.fields
  const { hack, type, job, time, crewsize } = data.mdx.frontmatter
  const url = location.href ? location.href : ""

  return (
    <Layout>
      <SEO title={hack} description={job} pathname={`/culture-hacks/${slug}`} />
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
            <p style={{ margin: "1rem 0rem 0rem .3rem", fontWeight: "500" }}>
              {type}:
            </p>
            <h1 style={{ marginTop: 0, lineHeight: 1 }}>{hack}</h1>
            <p style={{ marginBottom: 0, fontSize: "1.4rem" }}>{job}</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </Col>
        </Row>
        <Row>
          <Col style={{ maxWidth: "750px" }}>
            <SharingButtons link={url} message={`${hack}`} />
            <MarkAsDone hackName={hack} hackType={type} />
            <FeedbackWidget hack={hack} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default TutorialTemplate
