import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import Emoji from "../components/shared/emoji"
import Legend from "../components/app/legend"
import TrainingTile from "../components/app/trainingtile"
import ComingSoon from "../components/app/comingsoon"

import data from "../content/filter.json"

const TutorialPage = () => {
  return (
    <Layout>
      <Head title="Meine Trainings" />
        <Container>
          <Row>
            <Col>
              <Legend info="SO" />
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
