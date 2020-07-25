import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import headerStyles from "../styles/header.module.scss"

import Loading from "../components/loading"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import faunadb, { query as q } from "faunadb"


const Profil = () => {
  const { user } = useAuth0();
  const fauna_secret = user["https://fauna.com/id/secret"];
  const [data, setData] = useState([]);
  useEffect(() => {
      async function getUserProfile() {
          const client = new faunadb.Client({ secret: fauna_secret });
          const response =  await client.query(
              q.Select( ["data"] , q.Get(q.Match(q.Index('profile_by_email'), user.email)))
              );
          const newData = await response;
          setData(newData);
      }
      getUserProfile()
  }, []);
  
  return (
    <Row style={{marginTop:"4rem"}}>
          <Col>
            <h1 style={{fontSize: "2rem", marginBottom:"2rem"}}>Moin moin.</h1>
            <p><strong>Profil:</strong> {user.nickname}</p>
            <p><strong>E-Mail:</strong> {user.email}</p>
            <p><strong>Unternehmen:</strong> TBD</p>
            <pre>{JSON.stringify(data,null,2)}</pre>
{/*            <p><strong>Solo Punkte:</strong> {data["punkte_solo"][0]} / {data["punkte_solo"][1]} / {data["punkte_solo"][2]}</p>*/}
{/*            <p><strong>Team Punkte:</strong> {data["punkte_team"][0]} / {data["punkte_team"][1]} / {data["punkte_team"][2]}</p>*/}

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
    return (<><Loading /></>)
  }

  return (
    <Layout>
      <Head title="Account" />
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col>
              <Nav>
              <Nav.Item>
                <Link to="/mein-account/" className={headerStyles.navItem}>Profil</Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                <Link to="/mein-account/team/" className={headerStyles.navItem}>Team</Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                <Link to="/mein-account/einstellungen/" className={headerStyles.navItem}>Einstellungen</Link>{'   '}
                </Nav.Item>
              </Nav>
              <Router>
                <Profil path="/mein-account/" />
                <Einstellungen path="/mein-account/einstellungen" />
                <Team path="/mein-account/team" />
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