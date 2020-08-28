import React from "react"
import { graphql, Link } from "gatsby"
import { navigate } from "@reach/router"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"
import Emoji from "../components/shared/emoji"
import SharingButtons from "../components/ctas/sharing-buttons"

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
        title
        level
        type
        method_slug
        emojis
        excerpt
        source
        benefit
        requisites
        context
      }
      body
    }
  }
`

const UebungInfo = ({ data, props, location }) => {
  const { loading } = useAuth0()
  const url = location.href ? location.href : ""
  const { slug, contentType } = data.mdx.fields
  const {
    job,
    method,
    title,
    level,
    type,
    method_slug,
    emojis,
    excerpt,
    source,
    benefit,
    requisites,
    context,
  } = data.mdx.frontmatter

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        pathname={`/${type}/${contentType}/${slug}`}
      />
      <Container>
        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col>
            <h1>
              {emojis.map((emoji, i) => {
                return <Emoji symbol={emoji[0]} label={emoji[1]} key={i} />
              })}
            </h1>
            <h1>{title}</h1>
            <p>{excerpt}</p>
            <p>
              Methode:{" "}
              <Link to={`/methoden/${method_slug}`}>
                {method} | {job}
              </Link>{" "}
              • Level: {level}
            </p>
            <p>Nutzen: {benefit}</p>
            <p>
              Inspiriert von: <Link to={`/ueber-uns`}>{source}</Link>
            </p>
            <p>Diese Übung braucht:</p>
            <ul>
              {requisites.map((requisite, i) => {
                return <li key={i}>{requisite}</li>
              })}
            </ul>
            <p>Mach diese Übung, wenn...</p>
            <ul>
              {context.map((c, i) => {
                return <li key={i}>{c}</li>
              })}
            </ul>
          </Col>
        </Row>
        <SharingButtons link={url} message={`${job}`} />
        <Row>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={event => {
                event.preventDefault()
                navigate(-1)
              }}
            >
              Zurück
            </Button>
            <Link to="42" className="btn btn-primary">
              Übung starten
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default UebungInfo
