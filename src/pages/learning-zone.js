import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import headerStyles from "../styles/header.module.scss"
import Emoji from "../components/shared/emoji"

import Loading from "../components/shared/loading"
import LoginRequest from "../components/ctas/login-request"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import faunadb, { query as q } from "faunadb"

const Profile = () => {
  const { user } = useAuth0()
  const fauna_secret = user["https://fauna.com/id/secret"]
  const [data, setData] = useState([])

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
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Moin moin.</h1>
        <p>
          <strong>Profil:</strong> {user.nickname}
        </p>
        <p>
          <strong>E-Mail:</strong> {user.email}
        </p>
        <p>
          <strong>Unternehmen:</strong> TBD
        </p>
        {data["level"] && <p>{data.level["default"]}</p>}
        {data["punkte_solo"] && (
          <div>
            <p>
              <strong>Solo Punkte: </strong>
              {Object.keys(data["punkte_solo"][0] || {}).length} /&nbsp;
              {Object.keys(data["punkte_solo"][1] || {}).length} /&nbsp;
              {Object.keys(data["punkte_solo"][2] || {}).length}
            </p>
            <p>
              <strong>Team Punkte: </strong>
              {Object.keys(data["punkte_team"][0] || {}).length} /&nbsp;
              {Object.keys(data["punkte_team"][1] || {}).length} /&nbsp;
              {Object.keys(data["punkte_team"][2] || {}).length}
            </p>
          </div>
        )}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Col>
    </Row>
  )
}

const Einstellungen = () => (
  <Row style={{ marginTop: "4rem" }}>
    <Col>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Hier siehst du bald deine Einstellungen.
      </h1>
      <p>
        <Emoji symbol="👍" label="like" /> Bisher ist alles kostenlos.
      </p>
    </Col>
  </Row>
)

const Team = () => (
  <Row style={{ marginTop: "4rem" }}>
    <Col>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Hier siehst du bald deine Teamgefährten.
      </h1>
    </Col>
  </Row>
)

const LearningZone = () => {
  const { isAuthenticated, loading } = useAuth0()
  if (loading) {
    return <Loading />
  }

  return (
    <Layout>
      <SEO title="Learning zone" />
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col>
              <Nav>
                <Nav.Item>
                  <Link to="/learning-zone/" className={headerStyles.navItem}>
                    Profile
                  </Link>
                  {"   "}
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/learning-zone/team/"
                    className={headerStyles.navItem}
                  >
                    Team
                  </Link>
                  {"   "}
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/learning-zone/einstellungen/"
                    className={headerStyles.navItem}
                  >
                    Einstellungen
                  </Link>
                  {"   "}
                </Nav.Item>
              </Nav>
              <Router>
                <Profile path="/learning-zone/" />
                <Einstellungen path="/learning-zone/einstellungen" />
                <Team path="/learning-zone/team" />
              </Router>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoginRequest />
      )}
    </Layout>
  )
}

export default LearningZone
