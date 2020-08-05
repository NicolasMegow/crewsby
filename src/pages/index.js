import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import FaCheck from "../components/shared/facheck"
import Emoji from "../components/shared/emoji"
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
            <h1>Einfache Trainings für super Teamarbeit.</h1>
            <h2>Crewsby hilft Dir neue Fähigkeiten zu entwickeln, als Team zusammen zu wachsen und agil zu arbeiten.</h2>
          </Col>
        </Row>
        <FeatureRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Trainings-Flatrate</p>
            <h2>Trainiere unbegrenzt.</h2>
            <p>Alle Trainings stehen Dir 24/7 zur Verfügung.
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
            <p>Fähigkeiten entstehen in der Anwendung.
            Mit Crewsby trainierst Du bewährte Methoden und kannst diese problemlos im Tagesgeschäft nutzen.
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
        <Row style={{ marginTop: "6rem" }}>
          <Col>
            <h2 style={{ fontSize: "3.2rem", fontWeight: "bold", textAlign: "center" }}>Training ohne Trainer.</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Col md style={{ border: "1px solid #000000", padding: "1.4rem", margin: "1.4rem" }}>
            <h3>Solo-Trainings</h3>
            <strong>Kostenlos</strong>
            <p style={{ marginTop: "1.4rem" }}>Alle Solo-Trainings<br></br>für Dich.</p>
            <p>
              <Emoji symbol="💞" label="brain" />{' '}Beitrag zum Teamgefühl<br></br>
              <Emoji symbol="⚡" label="heart" />{' '}Neue Fähigkeiten<br></br>
              <Emoji symbol="💼" label="muscle" />{' '}Berufliche Weiterbildung
            </p>
            <Link to='/solo-trainings' className="btn btn-primary btn-lg">Jetzt trainieren</Link>
          </Col>
          <Col md style={{ border: "1px solid #000000", padding: "1.4rem", margin: "1.4rem" }}>
            <h3>Team-Trainings</h3>
            <strong>89€ / Monat</strong>
            <p style={{ marginTop: "1.4rem" }}>Alle Solo- & Team-Trainings<br></br>für Dich & Dein Team.</p>
            <p>
              <Emoji symbol="❤️" label="heart" />{' '}Starkes Teamgefühl<br></br>
              <Emoji symbol="💪" label="muscle" />{' '}Gesteigerte Leistung<br></br>
              <Emoji symbol="🧠" label="brain" />{' '}Entfesselte Kreativität
            </p>
            <Link to='/team-trainings' className="btn btn-outline-primary btn-lg">Mehr erfahren</Link>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage