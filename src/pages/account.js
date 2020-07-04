import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from 'react-bootstrap'

import Layout from "../components/layout"
import headerStyles from "../styles/header.module.scss"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import Teambuilding from "../img/svg/Teambuilding.svg"


const Profil = () => {
  const { isAuthenticated, user } = useAuth0()
  return <Row>
          <Col>
            <p>Moin {user.name}!</p>
      <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre>
    </Col>
  </Row>
}
const Einstellungen = () => <p>TBD</p>
const Abrechnung = () => <p>TBD...</p>

const Account = () => {
  const { isAuthenticated, loading } = useAuth0()
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col>
              <Nav>
              <Nav.Item>
                <Link to="/account/" className={headerStyles.navItem}>Profil</Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                <Link to="/account/einstellungen/" className={headerStyles.navItem}>Einstellungen</Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                <Link to="/account/abrechnung/" className={headerStyles.navItem}>Abrechnung</Link>{'   '}
                </Nav.Item>
              </Nav>
              <Router>
                <Profil path="/account/" />
                <Einstellungen path="/account/einstellungen" />
                <Abrechnung path="/account/abrechnung" />
              </Router>
              <Teambuilding style={{maxWidth:"800px", maxHeight:"400px"}}/>
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