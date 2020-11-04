import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"
import faunadb, { query as q } from "faunadb"

import LearningObjective from "../components/learning-zone/learning-objective"
import SelfReview from "../components/learning-zone/self-review"
import AddHack from "../components/learning-zone/add-hack"
import TrackRecord from "../components/learning-zone/track-record"

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "peopleskills" } } }) {
      edges {
        node {
          frontmatter {
            hack
            type
          }
        }
      }
    }
  }
`

const LearningZone = ({ data }) => {
  const { isAuthenticated, loading, user } = useAuth0()
  const fauna_secret =
    !loading && isAuthenticated ? user["https://fauna.com/id/secret"] : ""
  const user_email = !loading && isAuthenticated ? user.email : ""
  const [profile, setProfile] = useState([])
  const [actions, setActions] = useState("starting")
  useEffect(() => {
    if (!loading && isAuthenticated) {
      async function getUserProfile() {
        const client = new faunadb.Client({ secret: fauna_secret })
        const response = await client.query(
          q.Select(
            ["data"],
            q.Get(q.Match(q.Index("profile_by_email"), user_email))
          )
        )
        const profileData = await response
        setProfile(profileData)
      }
      getUserProfile()
      const lol = actions
    }
  }, [loading, isAuthenticated, fauna_secret, user_email, actions])

  if (loading) {
    return <Loading />
  }

  return (
    <Layout>
      <SEO title="Learning zone" />
      <Container>
        <Row>
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <h1>Learning zone</h1>
              <p className="subtitle">
                Change is a rollercoaster. Take a moment to pause and observe
                the trend beneath your ups and downs.
              </p>
            </span>
          </Col>
          <Col lg></Col>
        </Row>{" "}
        <Row style={{ marginTop: "4rem" }}>
          <Col lg>
            <h2>Quick start</h2>
            <p style={{ marginTop: "1rem" }}>
              Your learning zone is the time you spend deliberately trying new
              stuff expecting to fail.
            </p>
            <p>
              <strong>1) Set yourself a learning objective.</strong>
              <br></br>
              An objective could be to improve your candor or to streamline the
              way your team completes work.
            </p>
            <p>
              <strong>2) Commit to an activity of trial & error.</strong>
              <br></br>
              Activities are the input to your progress. Measure how often you
              share your appreciation or how much waste you eliminate from your
              processes.
            </p>
            <p>
              <strong>3) Pause once a week & review your progress.</strong>
              <br></br>
              You own your progress. Regular check-ins show you how much you've
              achieved and help to narrow down where further improvement is
              warranted.
            </p>
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "2rem",
              }}
            >
              <strong>Access to your learning zone is free.</strong>
              <br></br>We might switch to a Freemium setup later.
            </p>
          </Col>
          <Col lg>
            <LearningObjective
              learnObj={profile.learnObj}
              isAuth={isAuthenticated}
              user={user}
              update={setActions}
            />
            <SelfReview
              behavior={["times", "shared your appreciation"]}
              isAuth={isAuthenticated}
              user={user}
              learnObj={profile.learnObj}
              update={setActions}
              weeks={profile.weeks}
            />
            <AddHack
              hackCollection={data}
              isAuth={isAuthenticated}
              user={user}
              update={setActions}
            />
            {!loading && isAuthenticated && profile.logs != null ? (
              <TrackRecord logData={profile.logs} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default LearningZone
