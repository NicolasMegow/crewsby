import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

import Zusammenhalt from "../img/svg/Zusammenhalt.svg"

const BasicsPage = () => {
  return (
    <Layout>
      <Head title="Basics" />
      <Container>
        <Row>
            <Col>
              <h1 style={{ fontSize: "2rem" }}>Die Basics</h1>
            </Col>
          </Row>
        <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'link']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Zusammenhalt</p>
                        <h2>Euer Team, eure Entscheidung.</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
                        die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Zusammenhalt width="100%" height="260"/>
                    </Col>
                </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <FontAwesomeIcon icon={['fas', 'calendar-star']} size="2x" color="#4285F4" />
            <p className="mintitle">Anwendung</p>
            <h2>Für den Alltag, im Alltag.</h2>
            <p>Trainiere wann Du willst, wo Du willst und was Du willst.
              Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon icon={['fal', 'lightbulb']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#67A4F4" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'stopwatch']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#418DF1" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'question']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#4285F4" transform="shrink-8" />
                    </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <FontAwesomeIcon icon={['fas', 'road']} size="2x" color="#4285F4" />
            <p className="mintitle">Struktur</p>
            <h2>Der Rahmen für Veränderung.</h2>
            <p>Trainiere wann Du willst, wo Du willst und was Du willst.
              Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon icon={['fal', 'shoe-prints']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#67A4F4" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'shoe-prints']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#418DF1" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'shoe-prints']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#4285F4" transform="shrink-8" />
                    </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BasicsPage