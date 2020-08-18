import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import Emoji from "../components/shared/emoji"
import Legend from "../components/app/legend"
import TrainingTile from "../components/app/training-tile"
import ComingSoon from "../components/app/coming-soon"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/app/loading"
import LoginReminder from "../components/app/login-reminder"

export const query = graphql`
query{
  allMdx (filter: { fields: { uebungType: { eq: "team-uebungen" } slug: {eq: "_index"} } }
  sort: {fields:[frontmatter___date], order: DESC})
  {
    group(field: frontmatter___category) {
    edges {
      node {
        fields {
          slug
          uebungType
          method
        }
        frontmatter {
          job
          skill
          levels
          category
          pass
          icon
        }
      }
    }
  }
}
}
`


const TeamPage = ({ data }) => {
  const { isAuthenticated, loading } = useAuth0()
  const categories = [
    ["❤️", "heart", "Starkes Teamgefühl", "Beziehungen gestalten"],
    ["💪", "muscle", "Gesteigerte Leistung", "Abläufe optimieren"],
    ["🧠", "brain", "Entfesselte Kreativität", "Talente entwickeln"],
  ]

  if (loading) {
    return (
      <><Loading /></>
    )
  }
  return (
    <Layout>
      <Head title="Team-Tutorials" />
      <Container>
        <Row style={{ marginBottom: "2rem", }}>
          <Col>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Verbessert eure Teamarbeit</h1>
            <Legend info="TM" />
            {!isAuthenticated ? (<LoginReminder />) : (null)}
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
                    const { skill, levels, job, pass, icon } = edge.node.frontmatter
                    const { method } = edge.node.fields
                    return (
                      <TrainingTile
                        key={i}
                        skill={skill}
                        url={method}
                        topic={job}
                        pass={pass}
                        levels={levels}
                        icon={icon}
                      />
                    )
                  }
                  )}
                </Row>
              </Col>
            </Row>
          )
        })}
        <Row>
          <Col>
            <ComingSoon type="TM" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default TeamPage
