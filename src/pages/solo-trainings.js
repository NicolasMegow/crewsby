import React from "react"
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

import data from "../content/filter.json"

const TutorialPage = () => {
  const { isAuthenticated, loading } = useAuth0()
  if (loading) {
    return (
      <><Loading /></>
    )
  }
  return (
    <Layout>
      <Head title="Meine Trainings" />
        <Container>
          <Row style={{marginBottom:"2rem", }}>
            <Col>
              <h1 style={{fontSize:"2rem", marginBottom:"1rem"}}>Verbessere Deinen Teambeitrag</h1>
              <Legend info="SO" />
              {!isAuthenticated ? (<LoginReminder/>):(null)}
            </Col>
          </Row>
          {data.TUTS[1].SO.map(mode => {
            return (
              <Row key={mode.part} style={{ marginBottom: "2rem" }}>
                <Col>
                  <h2>
                    <Emoji symbol={mode.symbol} label={mode.label} />{" "}
                    {mode.name} <small>• {mode.job}</small>
                  </h2>
                  <Row>
                    {mode.tuts.map((tut, id) => {
                      return (
                        <TrainingTile
                          key={id}
                          id={tut.key}
                          url={tut.url}
                          topic={tut.thema}
                          content={tut.inhalt}
                          icon={tut.icon}
                        />
                      )
                    })}
                  </Row>
                </Col>
              </Row>
            )
          })}
          <Row>
            <Col>
              <ComingSoon type="SO" />
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}

export default TutorialPage
