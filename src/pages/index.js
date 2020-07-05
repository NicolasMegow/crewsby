import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import Teamboat from "../img/svg/EinBoot.svg"
import Flexibel from "../img/svg/Flexibel.svg"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Startseite" />
      <Container>
        <Row>
          <Col>
            <Teamboat width="100%" height={400}/>
            <h1 style={{ marginBottom: "0", color: "#4285F4" }}>Seite an Seite</h1>
            <h1 style={{ marginTop: "0" }}>durch Dick & Dünn.</h1>
            <h2>Teamgefühl ist deine Trainings-App für großartige Teamarbeit.</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <FontAwesomeIcon icon={['fas', 'dumbbell']} size="2x" color="#4285F4" />
            <p className="mintitle">Wirkungsvolles Training</p>
            <h2>Entwickle echte Fähigkeiten.</h2>
            <p>Hör auf Ratschläge zu konsumieren.
            Erst die Anwendung der Mechanismen führt zu besserer Teamarbeit und Leistungssteigerung.
            Teamgefühl liefert dir unzählige Tutorials, um alleine oder im Team die Anwendung zu trainieren.
            </p>
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>...<br></br>
              <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>...<br></br>
            MACHEN.</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <FontAwesomeIcon icon={['fas', 'phone-laptop']} size="2x" color="#4285F4" />
            <p className="mintitle">100% Flexibel</p>
            <h2>Trainiere dann, wenn du es brauchst.</h2>
            <p>Trainiere wann du willst, wo du willst und was du willst.
              Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
              <Link to={`/training`} style={{ marginTop: "1.4rem" }}>Mehr erfahren</Link>
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <Flexibel width="100%" height="260"/>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <h2>USE CASES</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'graduation-cap']} mask={['fas', 'square']} size="4x" color="#4285F4" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Führungskompetenz entwickeln</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten. ZERTIFIKAT<br></br>
            </p>
          </Col>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'battery-bolt']} mask={['fas', 'square']} size="4x" color="#4285F4" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Fähigkeiten auffrischen</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
            </p>
          </Col>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'map-signs']} mask={['fas', 'square']} size="4x" color="#4285F4" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Teamentwicklung gestalten</h3>
            <p>FÜR TL. Spitzenleistung ensteht immer aus Teamarbeit.
                        Im Team lernt ihr voneinander und feiert gemeinsame Erfolge.<br></br>
            </p>
          </Col>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'tv-retro']} mask={['fas', 'square']} size="4x" color="#4285F4" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Retrospektiven verbessern</h3>
            <p>Checkin. Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
            </p>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage