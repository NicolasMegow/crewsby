import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import Teamboat from "../img/svg/EinBoot.svg"
import Diversität from "../img/svg/Diversität.svg"
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
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'fire-alt']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Teambuilding</p>
                        <h2>Selbstläufer mit Hindernissen.</h2>
                        <p>Menschen sind anders. 
                          Ungesteuert führt diese Diversität zu Missverständnissen. 
                          Ehe man sich versieht ist die Stimmung im Keller und die Leistung gleich mit.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Diversität width="100%" height="260"/>
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#DB4437" />{' '}Schwelende Konflikte</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#DB4437" />{' '}Nervtötende Meetings</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#DB4437" />{' '}Isolierte Arbeitspakete</Col>
                </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <FontAwesomeIcon icon={['fas', 'fire-extinguisher']} size="2x" color="#4285F4" />
            <p className="mintitle">Wirkungsvolles Training</p>
            <h2>Verbessere Deine Fähigkeiten.</h2>
            <p>Hör auf Ratschläge zu konsumieren. Außer diesen.
            Gute Teamarbeit entsteht zwischen Menschen. 
            Und Du kannst lernen deinen Teil dazu beizutragen.
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>...<br></br>
              <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>...<br></br>
            MACHEN.</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "1.4rem" }}>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Starke Beziehungen</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Individuelle Abläufe</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Kombinierte Talente</Col>
                </Row>
        <Row style={{ marginTop: "8rem", marginBottom:"3rem" }}>
          <Col>
            <h2>Crewsby: Teambuilding so, wie es sein sollte.</h2>
            <p>Jedes Team ist anders. Aber die Ansatzpunkte für Verbesserungen sind zum Glück überschaubar.
              Gute Teamarbeit wächst aus dem was Du tust und wie du mit deinem Team zsammen arbeitest.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'graduation-cap']} size="2x" color="#4285F4"/>
            <p className="mintitle">frische Führungskräfte</p>
            <h3>Führungskompetenz entwickeln</h3>
            <p>Führen lernen durch die Perfektion der Zusammenarbeit.
            </p>
          </Col>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'battery-bolt']} size="2x" color="#4285F4"/>
            <p className="mintitle">erfahrene Führungskräfte</p>
            <h3>Fähigkeiten auffrischen</h3>
            <p>Mit regelmäßigen Impulsen dem Einschleichen von Marotten begegnen.
            </p>
          </Col>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'map-signs']} size="2x" color="#4285F4"/>
            <p className="mintitle">Selbstbewusste Teams</p>
            <h3>Teambuilding gestalten</h3>
            <p>Trainings-Kombos machen erfolgreiche Teamworkshops kinderleicht.<br></br>
            </p>
          </Col>
          <Col lg={6} style={{marginBottom:"3rem"}}>
            <FontAwesomeIcon icon={['fas', 'tv-retro']} size="2x" color="#4285F4"/>
            <p className="mintitle">Agile Teams</p>
            <h3>Retrospektiven verbessern</h3>
            <p>Der Check-In mit einem Training macht die Retros interessanter & effektiver.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <FontAwesomeIcon icon={['fas', 'phone-laptop']} size="2x" color="#4285F4" />
            <p className="mintitle">100% Flexibel</p>
            <h2>Trainiere so, wie Du möchtest.</h2>
            <p>Trainiere wann Du willst, wo Du willst und was Du willst.
              Crewsby-Trainings integrieren sich perfekt in Deinen Alltag.</p>
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