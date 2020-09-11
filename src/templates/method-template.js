import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import EmojiTile from "../components/shared/emoji-tile"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Emoji from "../components/shared/emoji"

const shortcodes = {
  Emoji,
  hr: props => (
    <hr
      {...props}
      style={{ marginTop: "4rem", marginBottom: "4rem", borderStyle: "dashed" }}
    />
  ),
}

export const query = graphql`
  query($slug: String!, $contentType: String!) {
    mdx(fields: { slug: { eq: $slug }, contentType: { eq: $contentType } }) {
      fields {
        slug
        contentType
      }
      frontmatter {
        job
        method
        levels
        category
        icon
      }
      body
      excerpt
    }
    allMdx(
      filter: { frontmatter: { method_slug: { eq: $slug } } }
      sort: { fields: [frontmatter___level], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            contentType
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

const MethodTemplate = ({ data, props }) => {
  const { method, job } = data.mdx.frontmatter

  return (
    <MDXProvider components={shortcodes}>
      <Layout>
        <SEO
          title={method}
          pathname={`/${method}`}
          description={data.mdx.excerpt}
        />
        <Container>
          <Row>
            <Col>
              <h1>{method}</h1>
              <h2>{job}</h2>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              maxWidth: "700px",
            }}
          >
            <Col>
              <MDXRenderer {...props}>{data.mdx.body}</MDXRenderer>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Erste Übungen zu {method}:</h2>
            </Col>
          </Row>
          <Row>
            {data.allMdx.edges.map((edge, i) => {
              return <EmojiTile key={i} edge={edge} info="true" />
            })}
          </Row>
        </Container>
      </Layout>
    </MDXProvider>
  )
}

export default MethodTemplate
