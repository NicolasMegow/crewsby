import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"
import appStyles from "../styles/app.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Startseite" />
      <Container>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span className="fa-layers fa-fw fa-6x">
                <FontAwesomeIcon icon={['fas', 'walking']} color="#67A4F4" transform="shrink-4 up-4 right-4" />
                <FontAwesomeIcon icon={['fas', 'walking']} color="#418DF1" transform="shrink-2 up-2 right-2" />
                <FontAwesomeIcon icon={['fas', 'walking']} color="#0f62cc" />
              </span>{'   '}
              <FontAwesomeIcon icon={['fas', 'birthday-cake']} fixedWidth size="4x" /> {'  '}
              <FontAwesomeIcon icon={['fas', 'bomb']} fixedWidth size="4x" /></p>
            <h1 style={{ marginBottom: "0", color: "#0f62cc" }}>Seite an Seite</h1>
            <h1 style={{ marginTop: "0" }}>Durch Dick & Dünn.</h1>
            <h2>Teamgefühl ist deine Trainings-App für großartige Teamarbeit.</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <Tab.Container id="useCases" defaultActiveKey="solo">
              <Nav variant="pills" justify="true">
                <Nav.Item>
                  <Nav.Link eventKey="solo" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'user']} fixedWidth />{' '} FÜR DICH</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="team" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'users']} fixedWidth />{' '} FÜR DEIN TEAM</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="solo" className={appStyles.tab}>
                  <Row>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'battery-bolt']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                      <h3>Führungskompetenz entwickeln</h3>
                      <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
                        <br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Tägliche Verbesserung<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Gezielte Trainingsblöcke<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Spontane Auffrischung<br></br>
                      </p>
                    </Col>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'sync']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                      <h3>Fähigkeiten auffrischen</h3>
                      <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
                        <br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Tägliche Verbesserung<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Gezielte Trainingsblöcke<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Spontane Auffrischung<br></br>
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="team" className={appStyles.tab}>
                  <Row>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'link']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                      <h3>Teamentwicklung gestalten</h3>
                      <p>Spitzenleistung ensteht immer aus Teamarbeit.
                        Im Team lernt ihr voneinander und feiert gemeinsame Erfolge.<br></br>
                        <br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Gute Projekt-Kickoffs<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Interessante Retrospektiven<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Einfache Team-Sprints<br></br>
                      </p>
                    </Col>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'tv-retro']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                      <h3>Retrospektiven verbessern</h3>
                      <p>Jeder hat das Potenzial die Führung zu übernehmen.
                        Grundlage dafür ist die Fähigkeit hervorragend im Team zu arbeiten.<br></br>
                        <br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Tägliche Verbesserung<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Gezielte Trainingsblöcke<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Spontane Auffrischung<br></br>
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col sm={6} lg={8}>
            <h2>Neue Methoden anwenden</h2>
            <p>Lerne, wie gute Teamarbeit funktioniert.
            Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
            Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
              die beliebig rekombinierbar sind.</p>
          </Col>
          <Col sm={6} lg={4} style={{ display: "flex", alignItems: "center" }}>
            <p>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}Radical Candor<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}Psychological Safety<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}OKRs<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}Kanban<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}Lean Management<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}Scrum<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDE74C" />{' '}Design Thinking<br></br>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col sm={6} lg={8}>
            <h2>Echte Fähigkeiten entwickeln</h2>
            <p>Hör auf Ratschläge zu konsumieren.
            Erst die Anwendung der Mechanismen führt zu besserer Teamarbeit und Leistungssteigerung.
            Teamgefühl liefert dir unzählige Tutorials, um alleine oder im Team die Anwendung zu trainieren.
            </p>
          </Col>
          <Col sm={6} lg={4} style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginBottom: "1rem", marginLeft: "auto", marginRight: "auto" }}>
              <span className="fa-layers fa-fw fa-6x">
                <FontAwesomeIcon icon={['fal', 'burger-soda']} transform="shrink-4" />
                <FontAwesomeIcon icon={['fal', 'ban']} color="#D64045" />
              </span>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <h2>12 Monate Teamgefühl kosten so viel, wie 1 Tag traditionelles Training.</h2>
            <p>Teamgefühl bietet digitales Training.
            Dadurch bieten wir ein radikal besseres Kosten-Nutzen-Verhältnis als traditionelles Training.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col sm>
            <FontAwesomeIcon icon={['fal', 'phone-laptop']} size="2x" color="#0f62cc" style={{ marginBottom: "1rem" }} />
            <h3>On Demand 24/7</h3>
            <p>Trainiere wann du willst, wo du willst und was du willst.
              Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
            <Link to={`/training`}>Mehr erfahren</Link>
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={['fal', 'leaf-heart']} size="2x" color="#0f62cc" style={{ marginBottom: "1rem" }} />
            <h3>Klimaneutral</h3>
            <p>Digitales Training hat eine hervorragende Klimabilanz.
              Wir gleichen unseren CO2-Auststoß durch Aufforstungsprojekte aus.</p>
            <Link to={`/ueber-uns`}>Mehr erfahren</Link>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage