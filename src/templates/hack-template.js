import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Emoji from "../components/shared/emoji"
import { Hint1, Hint2 } from "../components/culture-hacks/hint"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FeedbackWidget from "../components/culture-hacks/feedback-widget"
import MarkAsDone from "../components/culture-hacks/mark-as-done"
import SharingButtons from "../components/ctas/sharing-buttons"

const shortcodes = {
  Emoji,
  h2: props => <h2 {...props} style={{ marginTop: "4rem" }} />,
  td: props => (
    <td {...props} style={{ border: "1px solid #151515", padding: ".4rem" }} />
  ),
  th: props => <th {...props} style={{ padding: ".4rem", color: "#4285f4" }} />,
  table: props => (
    <table {...props} style={{ marginTop: ".5rem", marginBottom: "2rem" }} />
  ),
}

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

const HackTemplate = ({ data, location }) => {
  const { slug } = data.mdx.fields
  const { hack, type, job, time, crewsize } = data.mdx.frontmatter
  const url = location.href ? location.href : ""

  return (
    <Layout>
      <SEO title={hack} description={job} pathname={`/culture-hacks/${slug}`} />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <Link to="../">⟵ Back</Link>
            <h1>{hack}</h1>
            <p style={{ marginBottom: 0 }}>
              {type} • {crewsize}{" "}
              <FontAwesomeIcon icon={["fas", "users"]} fixedWidth /> • {time}{" "}
              <FontAwesomeIcon icon={["fas", "hourglass-half"]} fixedWidth /> •{" "}
              {job}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col style={{ maxWidth: "750px" }}>
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
            <FeedbackWidget hack={hack} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default HackTemplate
