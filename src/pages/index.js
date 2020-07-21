import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Emoji from "../components/emoji"

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import Teambuilding from "../img/svg/Teambuilding.svg"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Startseite" />
      <Container>
        <Row>
          <Col>
            <Teambuilding width="100%" />
            <h1>Die Crew macht das Team.</h1>
            <h2>Crewsby ist die Trainings-Flatrate für moderne  Teamarbeit.</h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Teamarbeit</p>
            <h2>Entdecke ungeahnte Potenziale.</h2>
            <p>Du kannst mit Deinem Team Berge versetzen, wenn ihr wirklich zusammenarbeitet.
              Glücklicherweise ist das kein Hexenwerk, sondern trainierbares Handwerk.
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
              <Emoji symbol="❤" label="heart" />{' '}Starkes Teamgefühl<br></br>
              <Emoji symbol="💪" label="muscle" />{' '}Gesteigerte Leistung<br></br>
              <Emoji symbol="🧠" label="brain" />{' '}Entfesselte Kreativität
                        </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Training</p>
            <h2>Trainiere nach Bedarf.</h2>
            <p>Alle Trainings stehen Dir sofort zur Verfügung. 
              Mobil und am Desktop, zwischendurch oder geblockt. 
              Setze Deine persönlichen Schwerpunkte und
              lerne gemeinsam im Team oder alleine für Dich.
            </p>
            <Link to={`/training`} style={{ marginTop: "1.4rem" }}>Mehr erfahren</Link>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
              <Emoji symbol="⏲️" label="timer" />{' '} 30 Min / Training<br></br>
              <Emoji symbol="💻" label="laptop" />{' '} Remote by Design<br></br>
              <Emoji symbol="✨ " label="duble" />{' '} Solo + Team Trainings
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Weiterbildung</p>
            <h2>Nutze bewährte Methoden.</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
              sed diam voluptua.
            </p>
          </Col>
          <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontWeight: "bold" }}>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}Radical Candor<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}Psychological Safety<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}OKRs<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}Kanban<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}Lean Management<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}Scrum<br></br>
              <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FFD970" />{' '}Design Thinking<br></br>
            </p>
          </Col>
        </Row>
      </Container>
      <CTA />
    </Layout>
  )
}

export default IndexPage