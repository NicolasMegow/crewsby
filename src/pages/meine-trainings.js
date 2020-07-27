import React from "react"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import Emoji from "../components/shared/emoji"
import Legend from "../components/app/legend"
import TrainingTile from "../components/app/trainingtile"
import ComingSoon from "../components/app/comingsoon"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/layout/loading"

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
      {isAuthenticated ? (
        <Container>
          <Tabs defaultActiveKey="TM" id="uncontrolled-tab-example">
            <Tab eventKey="TM" title="Team-Trainings">
              <Legend info="TM"/>
              {data.TUTS[0].TM.map(mode => {
                return (
                  <Row key={mode.part} style={{ marginBottom: "2rem" }}>
                    <Col>
                      <h2><Emoji symbol={mode.symbol} label={mode.label}/>{' '}{mode.name}{' '}<small>•{' '}{mode.job}</small></h2>
                      <Row>
                        {mode.tuts.map((tut, id) => {
                          return (
                            <TrainingTile key={id} id={tut.key} url={tut.url} topic={tut.thema} content={tut.inhalt} icon={tut.icon}/>
                          )
                        })}
                      </Row>
                    </Col>
                  </Row>
                )
              })}
            </Tab>
            <Tab eventKey="SO" title="Solo-Trainings">
              <Legend info="SO"/>
              {data.TUTS[1].SO.map(mode => {
                return (
                  <Row key={mode.part} style={{ marginBottom: "2rem" }}>
                    <Col>
                      <h2><Emoji symbol={mode.symbol} label={mode.label}/>{' '}{mode.name}{' '}<small>•{' '}{mode.job}</small></h2>
                      <Row>
                        {mode.tuts.map((tut, id) => {
                          return (
                            <TrainingTile key={id} id={tut.key} url={tut.url} topic={tut.thema} content={tut.inhalt} icon={tut.icon}/>
                          )
                        })}
                      </Row>
                    </Col>
                  </Row>
                )
              })}
            </Tab>
            <Tab eventKey="CS" title="Coming soon">
              <ComingSoon />
            </Tab>
          </Tabs>
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
