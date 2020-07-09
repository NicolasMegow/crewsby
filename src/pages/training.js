import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import TeamTraining from "../img/svg/TeamTraining.svg"
import DigiTraining from "../img/svg/DigiTraining.svg"

const TrainingPage = () => {
    return (
        <Layout>
            <Head title="Training" />
            <Container>
                <Row>
                    <Col>
                        <TeamTraining width="100%" height={400}/>
                        <h1 style={{ marginBottom: "0"}}>Training verbessert</h1>
                        <h1 style={{ marginTop: "0", color: "#4285F4"}}>deine Teamarbeit merklich.</h1>
                        <h2>Teamarbeit läuft häufig nebenher — einfach so durch den Alltag im Büro.
                        Wie gut oder schlecht deine Teamarbeit ist, liegt in deiner Hand.
                        </h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col>
                        <FontAwesomeIcon icon={['fas', 'pepper-hot']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Doppelte Wirkung</p>
                        <h2>Trainiere alleine & im Team.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col lg style={{ marginBottom: "2rem" }}>
                        <h3>Solo: jeder persönlich</h3>
                        <p><FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Führungskompetenz entwickeln<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Echte Beiträge leisten<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Verantwortung übernehmen</p>
                    </Col>
                    <Col lg>
                        <h3>Team: alle gemeinsam</h3>
                        <p>Es ist eure Teamarbeit. Also entscheidet ihr selber, wo ihr wann etwas verbessern wollt.
                        Unsere Tutorials helfen euch dabei über die richtigen Themen zu sprechen und aus neuen Perspektiven auf diese Themen zu blicken.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col lg>
                        <FontAwesomeIcon icon={['fas', 'apple-alt']} size="2x" color="#4285F4" />
                        <p className="mintitle">Futter für Teams</p>
                        <h2>Nutze bewährte Methoden</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
              die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col lg style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                        <p>
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
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Beziehungen stärken</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Prozesse optimieren</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Potenziale entwickeln</Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col lg={6}>
                        <FontAwesomeIcon icon={['fas', 'utensils']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Lernen durch machen</p>
                        <h2>Trainiere anwedungsbezogen</h2>
                        <p>Alltagstauglich. Unsere Tutorials bauen Fähigkeiten auf — genau wie ein menschlicher Trainer, nur wesentlich flexibler.</p>
                    </Col>
                    <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <DigiTraining width="100%" height="260"/>
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Machen, statt zuhören</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Viele kleine Trainings</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Nach persönlichem Bedarf</Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default TrainingPage