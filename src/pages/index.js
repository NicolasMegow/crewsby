import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import FaCheck from "../components/shared/facheck"
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
            <h1>Übungen für geniale Teamarbeit.</h1>
            <h2>Crewsby hilft Dir neue Fähigkeiten zu entwickeln, als Team zusammen zu wachsen und agil zu arbeiten.</h2>
          </Col>
        </Row>
        <FeatureRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Geniale Teamarbeit</p>
            <h2>Nutze bewährte Methoden.</h2>
            <p>Neue Fähigkeiten brauchen Übung.
            Mit Crewsby probierst Du bewährte Methoden aus und kannst diese problemlos mit Deinem Team im Tagesgeschäft nutzen.
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
        <Row style={{ marginTop: "8rem" }}>
          <Col md style={{ border: "1px solid #000000", padding: "1.4rem", margin: "1.4rem" }}>
            <h3>Solo-Übungen</h3>
            <strong>Kostenlos</strong>
            <p>Übungen für Dich, mit denen Du Deinen Beitrag zum Team verbesserst.</p>
            <Link to='/solo-uebungen' className="btn btn-outline-primary btn-lg">Alleine trainieren</Link>
          </Col>
          <Col md style={{ border: "1px solid #000000", padding: "1.4rem", margin: "1.4rem" }}>
            <h3>Team-Übungen</h3>
            <strong>Kostenlos</strong>
            <p>Übungen für Deine Crew, mit denen ihr gemeinsam Neues ausprobiert.</p>
            <Link to='/team-uebungen' className="btn btn-primary btn-lg">Zusammen wachsen</Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Übungs-Flatrate</p>
            <h2>Training ohne Trainer.</h2>
            <p>Alle Übungen stehen Dir 24/7 zur Verfügung.
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
      </Container>
    </Layout>
  )
}

export default IndexPage