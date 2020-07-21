import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import headerStyles from "../styles/header.module.scss"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"


const Profil = () => {
  const { user } = useAuth0()
  return (
    <Row style={{marginTop:"4rem"}}>
          <Col>
            <h1 style={{fontSize: "2rem", marginBottom:"2rem"}}>Moin moin.</h1>
            <p><strong>Profil:</strong> {user.nickname}</p>
            <p><strong>E-Mail:</strong> {user.email}</p>
            <p><strong>Unternehmen:</strong> TBD</p>
    </Col>
  </Row>)
}
const Einstellungen = () => {
  return (
    <Row style={{marginTop:"4rem"}}>
          <Col>
            <h1 style={{fontSize: "2rem", marginBottom:"2rem"}}>Hier siehst du bald deine Einstellungen.</h1>
    </Col>
  </Row>)
}
const Team = () => {
  return (
    <Row style={{marginTop:"4rem"}}>
          <Col>
            <h1 style={{fontSize: "2rem", marginBottom:"2rem"}}>Hier siehst du bald deine Teamgefährten.</h1>
    </Col>
  </Row>)
}


const Account = () => {
  const { isAuthenticated, loading } = useAuth0()
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      <Head title="Dein Account" />
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col>
              <Nav>
              <Nav.Item>
                <Link to="/dein-account/" className={headerStyles.navItem}>Profil</Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                <Link to="/dein-account/team/" className={headerStyles.navItem}>Team</Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                <Link to="/dein-account/einstellungen/" className={headerStyles.navItem}>Einstellungen</Link>{'   '}
                </Nav.Item>
              </Nav>
              <Router>
                <Profil path="/dein-account/" />
                <Einstellungen path="/dein-account/einstellungen" />
                <Team path="/dein-account/team" />
              </Router>
            </Col>
          </Row>
        </Container>
      ) : (
          <Container>
            <Row>
              <Col>
                <h1>Hi, try logging in:</h1>
              </Col>
            </Row>
          </Container>
        )}
    </Layout>
  )
}

export default Account