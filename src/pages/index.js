import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const bombStyle = {
  "--fa-secondary-color": "#D64045",
  "--fa-secondary-opacity": .8
};

const cakeStyle = {
  "--fa-primary-color": "#67A4F4",
  "--fa-secondary-color": "#FDE74C",
  "--fa-secondary-opacity": .8
};

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Startseite" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span className="fa-layers fa-6x">
                <FontAwesomeIcon icon={['fas', 'walking']} color="#67A4F4" transform="shrink-4 up-4 right-4" />
                <FontAwesomeIcon icon={['fas', 'walking']} color="#418DF1" transform="shrink-2 up-2 right-2" />
                <FontAwesomeIcon icon={['fas', 'walking']} color="#0f62cc" />
              </span>{'   '}
              <FontAwesomeIcon icon={['fad', 'birthday-cake']} fixedWidth size="4x" style={cakeStyle} /> {'  '}
              <FontAwesomeIcon icon={['fad', 'bomb']} fixedWidth size="4x" style={bombStyle} /></p>
            <h1 style={{ marginBottom: "0", color: "#0f62cc" }}>Seite an Seite</h1>
            <h1 style={{ marginTop: "0" }}>durch Dick & Dünn.</h1>
            <h2>Teamgefühl ist deine Trainings-App für großartige Teamarbeit.</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6} lg={8}>
            <FontAwesomeIcon icon={['fal', 'dumbbell']} size="2x" color="#0f62cc" />
            <p className="mintitle">Wirkungsvolles Training</p>
            <h2>Entwickle echte Fähigkeiten.</h2>
            <p>Hör auf Ratschläge zu konsumieren.
            Erst die Anwendung der Mechanismen führt zu besserer Teamarbeit und Leistungssteigerung.
            Teamgefühl liefert dir unzählige Tutorials, um alleine oder im Team die Anwendung zu trainieren.
            </p>
          </Col>
          <Col md={6} lg={4} style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <strike style={{ textDecorationColor: "#D64045" }}>Wollen</strike>...<br></br>
              <strike style={{ textDecorationColor: "#D64045" }}>Reden</strike>...<br></br>
            MACHEN.</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'cloud-download']} size="2x" color="#0f62cc" />
            <p className="mintitle">100% Flexibel</p>
            <h2>Trainiere dann, wenn du es brauchst.</h2>
            <p>Trainiere wann du willst, wo du willst und was du willst.
              Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FontAwesomeIcon icon={['fal', 'cube']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#67A4F4" transform="shrink-8" />
            <FontAwesomeIcon icon={['fal', 'door-open']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#418DF1" transform="shrink-8" />
            <FontAwesomeIcon icon={['fal', 'tablet']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#0f62cc" transform="shrink-8" />
          </Col>
        </Row>
        <Row style={{ marginTop: "1.4rem" }}>
          <Col>
            <Link to={`/training`}>Mehr erfahren</Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <h2>USE CASES</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'battery-bolt']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Führungskompetenz entwickeln</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten. ZERTIFIKAT<br></br>
            </p>
          </Col>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'sync']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Fähigkeiten auffrischen</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
            </p>
          </Col>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'link']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Teamentwicklung gestalten</h3>
            <p>FÜR TL. Spitzenleistung ensteht immer aus Teamarbeit.
                        Im Team lernt ihr voneinander und feiert gemeinsame Erfolge.<br></br>
            </p>
          </Col>
          <Col md={6}>
            <FontAwesomeIcon icon={['fal', 'tv-retro']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
            <h3>Retrospektiven verbessern</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
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