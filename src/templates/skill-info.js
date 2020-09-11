import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import { FaMask } from "../components/shared/fa-icons"
import SharingButtons from "../components/ctas/sharing-buttons"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Emoji from "../components/shared/emoji"

const shortcodes = {
  Emoji,
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
  const url = location.href ? location.href : ""
  const { skill } = data.mdx.fields
  const { job, method, icon, sources, benefits, summary } = data.mdx.frontmatter

  return (
    <Layout>
      <SEO title={skill} description={summary} pathname={`/skills/${skill}`} />
      <Container>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col>
            <Link to="../">⟵ Back</Link>
            <h1>
              <FaMask icon={icon} />
              <br></br>
              {job}
            </h1>
            <p>{method}</p>
            <p>{summary}</p>
            <p>Learn how to:</p>
            <ul>
              {benefits.map((benefit, i) => (
                <li id={i}>{benefit}</li>
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
        <SharingButtons link={url} message={`${job}`} />
      </Container>
    </Layout>
  )
}

export default SkillInfo
