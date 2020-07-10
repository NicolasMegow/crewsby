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
            <h1 style={{ marginBottom: "0"}}>Seite an Seite</h1>
            <h1 style={{ marginTop: "0", color: "#4285F4"}}>durch Dick & Dünn.</h1>
            <h2>Crewsby ist Deine Trainings-App für starke Teamarbeit.</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <FontAwesomeIcon icon={['fas', 'dumbbell']} size="2x" color="#4285F4" />
            <p className="mintitle">Wirkungsvolles Training</p>
            <h2>Verbessere Deine Fähigkeiten.</h2>
            <p>Hör auf Ratschläge zu konsumieren.
            Erst die Anwendung der Mechanismen führt zu besserer Teamarbeit und Leistungssteigerung.
            Crewsby liefert Dir unzählige Tutorials, um alleine oder im Team die Anwendung zu trainieren.
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>...<br></br>
              <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>...<br></br>
            MACHEN.</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem", marginBottom:"3rem" }}>
          <Col>
            <h2>Crewsby unterstützt großartige Teamarbeit.</h2>
            <p>Jedes Team ist anders. Aber die Ansatzpunkte für Verbesserungen sind zum Glück überschaubar. 
              Die Trainings von uns unterstützen euch in 4 Bereichen.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'graduation-cap']} size="2x" color="#4285F4"/>
            <p className="mintitle">frische Führungskräfte</p>
            <h3>Führungskompetenz entwickeln</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten. ZERTIFIKAT<br></br>
            </p>
          </Col>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'battery-bolt']} size="2x" color="#4285F4"/>
            <p className="mintitle">erfahrene Führungskräfte</p>
            <h3>Fähigkeiten auffrischen</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
            </p>
          </Col>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'map-signs']} size="2x" color="#4285F4"/>
            <p className="mintitle">Selbstbewusste Teams</p>
            <h3>Teamentwicklung gestalten</h3>
            <p>FÜR TL. Spitzenleistung ensteht immer aus Teamarbeit.
                        Im Team lernt ihr voneinander und feiert gemeinsame Erfolge.<br></br>
            </p>
          </Col>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'tv-retro']} size="2x" color="#4285F4"/>
            <p className="mintitle">Agile Teams</p>
            <h3>Retrospektiven verbessern</h3>
            <p>Checkin. Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <FontAwesomeIcon icon={['fas', 'phone-laptop']} size="2x" color="#4285F4" />
            <p className="mintitle">100% Flexibel</p>
            <h2>Trainiere so, wie Du möchtest.</h2>
            <p>Trainiere wann Du willst, wo Du willst und was Du willst.
              Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
              <Link to={`/training`} style={{ marginTop: "1.4rem" }}>Mehr erfahren</Link>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <Flexibel width="100%" height="260"/>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage