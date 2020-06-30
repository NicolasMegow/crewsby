import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from 'react-bootstrap'

import Layout from "../components/layout"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"



const Home = () => {
  const { isAuthenticated, user} = useAuth0()
  return <>
    <p>Hi !</p>
    <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre>
    </>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  const { isAuthenticated, loading} = useAuth0()
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      {isAuthenticated ? (
      <Nav>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        <Link to="/account/billing/">Billing</Link>{" "}
      </Nav>
      ) : (
        <Container>
            <Row>
                <Col>
                    <h1>Hi, try logging in:</h1>
            </Col>
          </Row>
        </Container>
      )}
      <Router>
        <Home path="/account/"/>
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </Layout>
  )
}

export default Account