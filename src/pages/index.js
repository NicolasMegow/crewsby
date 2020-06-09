import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'

import Layout from "../components/layout"
import Head from "../components/head"


library.add(fas)

const IndexPage = () => {
  return (
      <Layout>
        <Head title="Home"/>
        <Container>
          <Row>
            <FontAwesomeIcon icon={['fas', 'laptop']} fixedWidth size="6x" color="#0f62cc"/>
          </Row>
          <Row>
            <h1>Digitales Training für <br></br>professionelle Teamarbeit</h1>
          </Row>
          <Row>
            <h2>Ein gutes Teamgefühl schweißt zusammen und steigert die gemeinsame Leistung. 
              Doch Fehler schleichen sich schnell ein. Wir automatisieren die Pflege deines Teamgefühls.
            </h2>
            <Col md><h3><FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDCA40"/> Einfach</h3></Col>
            <Col md><h3><FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDCA40"/> Passgenau</h3></Col>
            <Col md><h3><FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#FDCA40"/> Ohne Coach</h3></Col>
          </Row>
          <Row>
            <h2>Spitzenleistung durch starke Teamarbeit.</h2>
            <p>Die Stärke von Teams liegt in der Unterschiedlichkeit der Teammitglieder. 
              Aber Unterschiede sorgen auch für Spannungen und Missverständnisse. 
              Lasst ihr euch davon herunterziehen oder beflügeln?ber Teamgefühl lernen</p>
          </Row>
          <Row>
            <Col sm>
              <h3>Verbindung stärken</h3>
              <p>Starke Beziehungen erhöhen den Spaß an der Arbeit und ermöglichen produktive Diskussionen.</p>
            </Col>
            <Col sm>
              <h3>Voneinander lernen</h3>
              <p>Niemand ist alleine perfekt. Zusammen könnt ihr Stärken bündeln und Schwächen ausgleichen.</p>
            </Col>
          </Row>
          <Row>
            <h2>Ein gutes Teamgefühl ist besonders gefragt in Teams, die…</h2>
          </Row>
          <Row>
            <h3>Schnell wachsen</h3><h3>Scrum einführen</h3><h3>Remote arbeiten</h3><h3>Kanban einführen</h3><h3>Selbstführung leben</h3><h3>Retros meistern</h3>
          </Row>
          <Row>
            <h2>Einfach das Teamgefühl verbessern.</h2>
            <p>Beziehungen zwischen Menschen sind komplex. Die Arbeit zusammen muss es nicht sein. 
              Wir verpacken den Stand der Team-Forschung in kleine Aufgaben, mit denen du und dein Team euer Teamgefühl Stück für Stück verbessert.
            </p>
          </Row>
          <Row>
            <Col sm>
              <h3>100% digital</h3>
              <p>Alles genau da, wo du es braucht, wenn du es braucht. Einloggen und loslegen.</p>
            </Col>
            <Col sm>
              <h3>100% einfach</h3>
              <p>Entwickelt für echte Menschen im Arbeitsalltag. Verstehen und machen.</p>
            </Col>
          </Row>
          <Row>
            <h2>Debugging ergänzt traditionelle Maßnahmen.</h2>
            <p>Teams sind einfach da. Gute Zusammenarbeit ist leider kein Selbstläufer. Wir helfen dir dabei, ein gutes Teamgefühl aufzubauen und zu pflegen.</p>
            <h3>Tutorials für Teamleiter</h3>
            <p>Die Teamleitung beeinflusst das Teamgefühl — so oder so. Über 90 Tutorials zum Aufbau eines guten Teamgefühls.</p>
            <h3>Aufgaben zum Teambuilding</h3>
            <p>Regelmäßig ein wenig Zeit zur Pflege des Teamgefühls. Kleine Aufgaben, die dazu einladen die Teamarbeit neu zu gestalten.</p>
          </Row>
        </Container>
      </Layout>
    )
}

export default IndexPage