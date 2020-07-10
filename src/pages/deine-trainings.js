import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"

import Layout from "../components/layout"
import Head from "../components/head"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import appStyles from "../styles/app.module.scss"
import data from "../content/filter.json"

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
              <h1 style={{ fontSize: "2rem" }}>Deine Trainings</h1>
            </Col>
          </Row>
          <Tabs defaultActiveKey="TM-R" id="uncontrolled-tab-example">
            <Tab eventKey="TM-R" title="Team - Remote">
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />{" "}
                    Alle Trainings für Remote-Teams nach Zielen im Teambuilding.
                  </p>
                </Col>
              </Row>
              {data.TUTS[0].TMR.map(mode => {
                return (
                  <Row key={mode.part} style={{ marginBottom: "4rem" }}>
                    <Col>
                      <h2>{mode.name}</h2>
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
                                <Row>
                                  <Col xs={8}>
                                    <p
                                      style={{
                                        fontSize: ".8rem",
                                        marginBottom: "0",
                                      }}
                                    >
                                      {tut.inhalt}
                                    </p>
                                  </Col>
                                  <Col xs={4}>
                                    <FontAwesomeIcon
                                      icon={tut.icon}
                                      size="2x"
                                      style={{ float: "right" }}
                                    />
                                  </Col>
                                </Row>
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
            <Tab eventKey="TM" title="Team - Vor Ort">
              <Row>
                <Col>
                <p>
                    <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />{" "}
                    Alle Trainings für Teams vor Ort nach Zielen im Teambuilding.
                  </p>
                  <h2 style={{ fontSize: "2rem" }}>Coming soon!</h2>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="SO" title="Solo">
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />{" "}
                    Alle Trainings für Teamriesen nach Zielen im Teambuilding.
                  </p>
                </Col>
              </Row>
              {data.TUTS[1].SO.map(mode => {
                return (
                  <Row key={mode.part} style={{ marginBottom: "4rem" }}>
                    <Col>
                      <h2>{mode.name}</h2>
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
                                <Row>
                                  <Col xs={8}>
                                    <p
                                      style={{
                                        fontSize: ".8rem",
                                        marginBottom: "0",
                                      }}
                                    >
                                      {tut.inhalt}
                                    </p>
                                  </Col>
                                  <Col xs={4}>
                                    <FontAwesomeIcon
                                      icon={tut.icon}
                                      size="2x"
                                      style={{ float: "right" }}
                                    />
                                  </Col>
                                </Row>
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
