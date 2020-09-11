import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"
import Emoji from "../components/shared/emoji"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "katex/dist/katex.min.css"

import Hint from "../components/exercise/hint"
import Deck from "../components/exercise/deck"

const components = {
  wrapper: ({ children, ...props }) => {
    const arr = React.Children.toArray(children)
    const splits = []
    const slides = []
    arr.forEach((child, i) => {
      const { mdxType } = child.props
      if (mdxType === "hr") splits.push(i)
    })
    let previousSplit = 0
    splits.forEach(i => {
      const children = [...arr.slice(previousSplit, i)]
      slides.push(children)
      previousSplit = i + 1
    })

    slides.push([...arr.slice(previousSplit)])

    return <Deck {...props} slides={slides} length={slides.length} />
  },
  Hint,
  Row,
  Col,
  Emoji,
  h1: props => <h1 {...props} />,
  h2: props => (
    <h2
      {...props}
      style={{ color: "#4285F4", fontSize: "2rem", fontWeight: "bold" }}
    />
  ),
  p: props => <p {...props} style={{ fontSize: "1.4rem" }} />,
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        contentType
        slug
      }
      frontmatter {
        job
        method
        method_slug
        title
        level
        type
        date
        version
        excerpt
      }
      body
    }
  }
`

const ExerciseTemplate = ({ data, props }) => {
  const { loading } = useAuth0()
  const { slug, contentType } = data.mdx.fields
  const { method, level, type, title } = data.mdx.frontmatter

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <MDXProvider components={components}>
      <Layout>
        <SEO
          title={title}
          description={data.mdx.frontmatter.excerpt}
          pathname={`/${type}/${contentType}/${slug}`}
        />
        <Container>
          <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <MDXRenderer
              {...props}
              skill={method}
              type={type}
              level={level}
              title={title}
            >
              {data.mdx.body}
            </MDXRenderer>
          </Row>
        </Container>
      </Layout>
    </MDXProvider>
  )
}

export default ExerciseTemplate
