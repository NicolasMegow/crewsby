import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import FaCheck from "../components/shared/facheck"
import CTA from "../components/layout/cta"
import FeatureRow from "../components/layout/feature-row"

import Teambuilding from "../img/svg/Teambuilding.svg"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Startseite" />
      <Container>
        <Row>
          <Col>
            <Teambuilding width="100%" />
            <h1>Die Trainings-Flatrate für moderne Teamarbeit.</h1>
            <h2>Crewsby hilft Dir neue Fähigkeiten zu entwickeln, als Team zusammen zu wachsen und agil zu arbeiten.</h2>
          </Col>
        </Row>
        <FeatureRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Trainings-Flatrate</p>
            <h2>Trainiere unbegrenzt.</h2>
            <p>Alle Trainings stehen Dir sofort 24/7 zur Verfügung.
            Mobil und am Desktop, zwischendurch oder geblockt.
            Setze Deine persönlichen Schwerpunkte und
            lerne gemeinsam im Team oder alleine für Dich.
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>...<br></br>
              <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>...<br></br>
                            Machen<span style={{ color: "#4285F4" }}>.</span>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Moderne Teamarbeit</p>
            <h2>Nutze bewährte Methoden.</h2>
            <p>Moderne Teamarbeit hat viele Facetten.
            Crewsby bietet Dir einen Einblick in alle bewährten Methoden.
            So kannst Du mit Deinem Team schnell die für euch passende Elemente ausprobieren & anwenden.
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold" }}>
              <FaCheck />{' '}Radical Candor<br></br>
              <FaCheck />{' '}Psychological Safety<br></br>
              <FaCheck />{' '}OKRs<br></br>
              <FaCheck />{' '}Kanban<br></br>
              <FaCheck />{' '}Lean Management<br></br>
              <FaCheck />{' '}Scrum<br></br>
              <FaCheck />{' '}Design Thinking<br></br>
            </p>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage