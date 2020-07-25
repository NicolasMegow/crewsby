import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"

import Layout from "../components/layout"
import Head from "../components/head"
import Emoji from "../components/emoji"
import Legend from "../components/legend"
import appStyles from "../styles/app.module.scss"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/loading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


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
                        {mode.tuts.map(tut => {
                          return (
                            <Col
                              md={6}
                              lg={4}
                              className={appStyles.menuItem}
                              key={tut.key}
                            >
                              <Link to={tut.url}>
                                <h4>{tut.thema}</h4>
                                    <p
                                      style={{
                                        fontSize: "1rem",
                                        marginBottom: "0",
                                      }}
                                    >
                                      {tut.inhalt}
                                    </p>
                                    <FontAwesomeIcon
                                      icon={tut.icon}
                                      size="2x"
                                      style={{ float: "right" }}
                                    />
                              </Link>
                            </Col>
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
                        {mode.tuts.map(tut => {
                          return (
                            <Col
                              md={6}
                              lg={4}
                              className={appStyles.menuItem}
                              key={tut.key}
                            >
                              <Link to={tut.url}>
                                <h4>{tut.thema}</h4>
                                    <p
                                      style={{
                                        fontSize: "1rem",
                                        marginBottom: "0",
                                      }}
                                    >
                                      {tut.inhalt}
                                    </p>
                                    <FontAwesomeIcon
                                      icon={tut.icon}
                                      size="2x"
                                      style={{float:"right"}}
                                    />
                              </Link>
                            </Col>
                          )
                        })}
                      </Row>
                    </Col>
                  </Row>
                )
              })}
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
