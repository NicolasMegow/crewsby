import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Startseite" />
      <Container>
        <Row>
          <Col>
            <span className="fa-layers fa-fw" style={{ marginBottom: "6rem" }}>
              <FontAwesomeIcon icon={['fal', 'laptop']} fixedWidth size="6x" />
              <FontAwesomeIcon icon={['fal', 'dumbbell']} fixedWidth size="3x" color="#0f62cc" transform="right-10 up-2" />
            </span>
            <h1>Spitzensportler trainieren täglich.<br></br>Und du?</h1>
            <h2>Mit Teamgefühl kannst du dich persönlich und gemeinsam mit deinem Team weiterentwickeln.</h2>
          </Col>
        </Row>
        <Row style={{marginTop:"3rem"}}>
          <Col sm>
            <FontAwesomeIcon icon={['fal', 'user']} mask={['fas', 'circle']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
            <h3>Führungskompetenz entwickeln</h3>
            <p>Jeder hat das Potenzial die Führung zu übernehmen. Mit gezieltem Training kannst du die notwendigen Fähigkeiten aufzubauen und Verantwortung übernehmen.
              </p>
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={['fal', 'users']} mask={['fas', 'circle']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
            <h3>Teamarbeit verbessern</h3>
            <p>Spiztzenleistung ensteht immer aus Teamarbeit. Als Team könnt ihr voneinander lernen, miteinander eure Leistung steigern und gemeinsam Erfolge feiern.</p>
          </Col>
        </Row>
        <Row style={{marginTop:"8rem"}}>
          <Col sm>
            <h2>Mechanismen verstehen</h2>
            <p>Lerne, wie gute Teamarbeit funktioniert. 
              Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
              Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine, die beliebig rekombinierbar sind.</p>
          </Col>
          <Col sm>
            <p>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Radical Candor<br></br>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Psychological Safety<br></br>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}OKRs<br></br>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Kanban<br></br>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Lean Management<br></br>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Scrum<br></br>
            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Design Thinking<br></br>
            </p> 
          </Col>
        </Row>
        <Row style={{marginTop:"8rem"}}>
          <Col sm>
            <h2>Weltklasse Training</h2>
            <p>Hör auf Ratschläge zu konsumieren.
              Erst die Anwendung der Mechanismen führt zu besserer Teamarbeit und Leistungssteigerung. 
              Teamgefühl liefert dir unzählige Tutorials, um alleine oder im Team die Anwendung zu trainieren.
            </p>
          </Col>
          <Col sm style={{display: "flex", alignItems: "center"}}>
            <p>
              <FontAwesomeIcon icon={['fal', 'info']} mask={['fas', 'square']} fixedWidth size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
              <FontAwesomeIcon icon={['fal', 'arrow-right']} size="4x" color="#0f62cc" transform="shrink-10" style={{marginBottom:"1rem"}}/>
              <FontAwesomeIcon icon={['fal', 'stopwatch']} mask={['fas', 'square']} fixedWidth size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
              <FontAwesomeIcon icon={['fal', 'arrow-right']} size="4x" color="#0f62cc" transform="shrink-10" style={{marginBottom:"1rem"}}/>
              <FontAwesomeIcon icon={['fal', 'question']} mask={['fas', 'square']} fixedWidth size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
              </p>
          </Col>
        </Row>
        <Row style={{marginTop:"8rem"}}>
          <Col>
            <h2>12 Monate Teamgefühl kosten so viel, wie 1 Tag traditionelles Training.</h2>
            <p>Teamgefühl bietet digitales Training. 
              Durch die digitale Distribution unserer Trainingsinhalte haben wir ein radikal besseres Kosten-Nutzen-Verhältnis als traditionelles Training.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop:"3rem"}}>
          <Col sm>
            <FontAwesomeIcon icon={['fal', 'phone-laptop']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
            <h3>On Demand 24/7</h3>
            <p>Trainiere wann du willst, wo du willst und was du willst. Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
            <Link to={`/training`}>Mehr erfahren</Link>
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={['fal', 'leaf-heart']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
            <h3>Klimaneutral</h3>
            <p>Digitales Training hat eine hervorragende Klimabilanz. Wir gleichen unseren CO2-Auststoß durch Aufforstungsprojekte aus.</p>
            <Link to={`/ueber-uns`}>Mehr erfahren</Link>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage