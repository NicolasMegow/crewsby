import React from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"

import Layout from "../components/layout"
import Head from "../components/head"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import rows from "../content/rows.json"
import TutRow from "../components/tutrow"

const TutorialPage = () => {
  const { isAuthenticated, loading } = useAuth0()
  if (loading) {
    return (
      <Layout>
        <Head title="Tutorial-Navigator" />
        <Container>
          <Row>
            <Col>
              <h1>Loading...</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
  return (
    <Layout>
      <Head title="Tutorial-Navigator" />
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col>
              <h1 style={{ fontSize: "2rem" }}>Deine Tutorials</h1>
            </Col>
          </Row>
          {rows.TUTS.map(item => (
            <Row style={{ marginTop: "4rem" }} key={item.part}>
              <Col>
                <Badge variant="secondary">{item.mode}</Badge>
                <h2>{item.name}</h2>
                <TutRow data={item.tuts} />
              </Col>
            </Row>
          ))}
        </Container>
      ) : (
        <Container>
          <Row>
            <Col>
              <h1>Bitte erst einloggen.</h1>
            </Col>
          </Row>
        </Container>
      )}
    </Layout>
  )
}

export default TutorialPage
