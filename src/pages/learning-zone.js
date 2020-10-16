import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/shared/loading"
import faunadb, { query as q } from "faunadb"

import ReturnOnLearning from "../img/svg/ReturnOnLearning.svg"
import SelfReview from "../components/learning-zone/self-review"
import LearningObjective from "../components/learning-zone/learning-objective"
import AddHack from "../components/learning-zone/add-hack"
import TrackRedord from "../components/learning-zone/track-record"

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "hacks" } } }) {
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
    }
  }, [loading, isAuthenticated, fauna_secret, user_email])

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
              <p className="title-emoji">
                <Emoji symbol="🍋" label="bittersweet" />
              </p>
              <h1>Learning zone</h1>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "2rem",
                }}
              >
                Change is a rollercoaster. Take a moment to pause and observe
                the trend beneath your ups and downs.
              </p>
            </span>
          </Col>
          <Col lg>
            <ReturnOnLearning width="100%" height="300" />
          </Col>
        </Row>
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
              <br></br>We might switch to a fremium setup later.
            </p>
          </Col>
          <Col lg>
            <LearningObjective
              learnObj={profile.learnObj}
              isAuth={isAuthenticated}
              user={user}
            />
            <SelfReview
              behavior={["times", "shared your appreciation"]}
              isAuth={isAuthenticated}
              user=""
            />
            <AddHack
              hackCollection={data}
              isAuth={isAuthenticated}
              user={user}
            />
            {!loading && isAuthenticated && profile.hacks != null ? (
              <TrackRedord logData={profile.hacks} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default LearningZone
