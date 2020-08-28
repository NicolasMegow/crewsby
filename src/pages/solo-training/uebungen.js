import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout/layout"
import SEO from "../../components/shared/seo"
import Emoji from "../../components/shared/emoji"

import EmojiTile from "../../components/shared/emoji-tile"
import ComingSoon from "../../components/shared/coming-soon"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import Loading from "../../components/shared/loading"

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "solo-training" } } }
      sort: { fields: [frontmatter___level], order: ASC }
    ) {
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
              method_slug
              excerpt
              emojis
              title
              level
              type
              category
              icon
            }
          }
        }
      }
    }
  }
`

const SoloPage = ({ data }) => {
  const { isAuthenticated, loading } = useAuth0()
  const categories = [
    ["❤️", "heart", "Starkes Teamgefühl", "Beziehungen gestalten"],
    ["💪", "muscle", "Individuelle Abläufe", "Leistung steigern"],
    ["🧠", "brain", "Entfesselte Kreativität", "Talente entwickeln"],
  ]

  if (loading) {
    return <Loading />
  }
  return (
    <Layout>
      <SEO title="Solo-Übungen" />
      <Container>
        <Row style={{ marginBottom: "4rem" }}>
          <Col>
            <h1>Übungen für Dich</h1>
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
                    return <EmojiTile key={i} edge={edge} />
                  })}
                </Row>
              </Col>
            </Row>
          )
        })}
        <Row>
          <Col>
            <ComingSoon type="SO" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SoloPage
