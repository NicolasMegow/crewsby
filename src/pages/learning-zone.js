import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"
import faunadb, { query as q } from "faunadb"

import LearningZoneInfo from "../components/layout/learning-zone-info"
import LearningZoneRow from "../components/layout/learning-zone-row"
import LoginReminder from "../components/ctas/login-reminder"

import SkillRow from "../components/learning-zone/skill-row"
import Profile from "../components/learning-zone/profile"

export const query = graphql`
  query {
    allMdx(
      filter: {
        fields: { contentType: { eq: "skills" }, slug: { eq: "_index" } }
      }
    ) {
      group(field: frontmatter___category) {
        edges {
          node {
            fields {
              slug
              contentType
              skill
            }
            frontmatter {
              job
              method
              level
              category
              icon
              type
              summary
              benefits
            }
          }
        }
      }
    }
  }
`

const Skills = ({ user, skills }) => {
  const fauna_secret = user["https://fauna.com/id/secret"]
  const [data, setData] = useState([])
  const categories = [
    ["❤️", "heart", "Strengthen your relationships"],
    ["💪", "muscle", "Individualize your processes"],
    ["🧠", "brain", "Unleash your creativity"],
  ]

  useEffect(() => {
    async function getUserProfile() {
      const client = new faunadb.Client({ secret: fauna_secret })
      const response = await client.query(
        q.Select(
          ["data"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        )
      )
      const newData = await response
      setData(newData)
    }
    getUserProfile()
  }, [fauna_secret, user.email])

  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          <Emoji symbol="🧰" label="skills" /> Your skills:
        </h2>
        {skills.allMdx.group.map((group, i) => {
          return (
            <Row style={{ marginBottom: "4rem" }}>
              <Col>
                <h3 style={{ marginBottom: "1rem" }}>
                  <Emoji symbol={categories[i][0]} label={categories[i][1]} />{" "}
                  {categories[i][2]}
                </h3>
                {group.edges.map((edge, i) => {
                  return <SkillRow edge={edge} key={i} />
                })}
              </Col>
            </Row>
          )
        })}
        <hr></hr>
        {data["level"] && <p>{data.level["default"]}</p>}
        {data["punkte_solo"] && (
          <div>
            <p>
              <strong>Team Punkte: </strong>
              {Object.keys(data["punkte_team"][0] || {}).length} /&nbsp;
              {Object.keys(data["punkte_team"][1] || {}).length} /&nbsp;
              {Object.keys(data["punkte_team"][2] || {}).length}
            </p>
          </div>
        )}
      </Col>
    </Row>
  )
}

const LearningZone = ({ data }) => {
  const { isAuthenticated, loading, user } = useAuth0()
  if (loading) {
    return <Loading />
  }

  return (
    <Layout>
      <SEO title="Learning zone" />
      <Container>
        {isAuthenticated ? (
          <Row>
            <Col>
              <Profile user={user} />
              <hr></hr>
              <Skills user={user} skills={data} />
            </Col>
          </Row>
        ) : (
          <>
            <LearningZoneInfo />
            <LearningZoneRow />
            <LoginReminder />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default LearningZone
