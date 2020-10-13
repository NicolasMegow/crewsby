import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import LoginReminder from "../components/ctas/login-reminder"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Emoji from "../components/shared/emoji"
import Hint from "../components/culture-hacks/hint"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FeedbackWidget from "../components/culture-hacks/feedback-widget"
import SharingButtons from "../components/ctas/sharing-buttons"

const shortcodes = {
  Emoji,
  Hint,
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
      <SEO
        title={hack}
        description={"Placeholder"}
        pathname={`/culture-hacks/${slug}`}
      />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col lg={8}>
            <Link to="../">⟵ Back</Link>
            <h1>{hack}</h1>
            <p style={{ marginBottom: 0 }}>
              {type} • {crewsize}{" "}
              <FontAwesomeIcon icon={["fas", "users"]} fixedWidth /> • {time}{" "}
              <FontAwesomeIcon icon={["fas", "hourglass-half"]} fixedWidth /> •{" "}
              {job}
            </p>
          </Col>
          <Col lg={4} style={{ display: "flex", alignItems: "center" }}>
            <LoginReminder />
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem", marginBottom: "4rem" }}>
          <Col style={{ maxWidth: "750px" }}>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </Col>
        </Row>
        <SharingButtons link={url} message={`${hack}`} />
        <FeedbackWidget hack={hack} />
      </Container>
    </Layout>
  )
}

export default HackTemplate
