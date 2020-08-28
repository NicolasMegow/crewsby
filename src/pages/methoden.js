import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import SvgTile from "../components/shared/svg-tile"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "methoden" } } }) {
      group(field: frontmatter___category) {
        edges {
          node {
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
              type
            }
          }
        }
      }
    }
  }
`

const SoloPage = ({ data }) => {
  const { loading } = useAuth0()
  const categories = [
    ["❤️", "heart", "Starkes Teamgefühl", "Beziehungen gestalten"],
    ["💪", "muscle", "Individuelle Abläufe", "Leistung steigern"],
    ["🧠", "brain", "Entfesselte Kreativität", "Talente entwickeln"],
  ]

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <Layout>
      <SEO title="Methoden-Wiki" />
      <Container>
        <Row style={{ marginBottom: "2rem" }}>
          <Col>
            <h1>Methoden-Wiki</h1>
            <p>
              Methoden helfen uns dabei Kategorien zu bilden und den Überblick
              zu bewahren. Aber Methoden alleine verändern nichts. Erst
              Veränderungen im Verhalten führen zu besseren Ergebnissen.
            </p>
          </Col>
        </Row>
        {data.allMdx.group.map((group, i) => {
          return (
            <Row key={categories[i][2]} style={{ marginBottom: "2rem" }}>
              <Col>
                <h2>
                  <Emoji symbol={categories[i][0]} label={categories[i][1]} />{" "}
                  {categories[i][2]} <small>• {categories[i][3]}</small>
                </h2>
                <Row>
                  {group.edges.map((edge, i) => {
                    return <SvgTile key={i} edge={edge} />
                  })}
                </Row>
              </Col>
            </Row>
          )
        })}
      </Container>
    </Layout>
  )
}

export default SoloPage
