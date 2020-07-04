import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const sunStyle = {
    "--fa-primary-color": "#4285F4",
    "--fa-secondary-color": "#67A4F4",
    "--fa-secondary-opacity": .8
};

const TrainingPage = () => {
    return (
        <Layout>
            <Head title="Training" />
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={['fal', 'map-signs']} size="6x" color="#4285F4" />
                        <h1>Gute Teamarbeit ist eine Entscheidung.</h1>
                        <p>Teamarbeit läuft häufig nebenher — ganz natürlich durch den Alltag im Büro.
                        Wie gut oder schlecht diese Teamarbeit ist, liegt in deiner Hand.
                        Wir bieten dir und deinem Team die Werkzeuge, um eure Teamarbeit in die Profiliga zu heben.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3rem" }}>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'user']} mask={['fas', 'square']} size="4x" color="#4285F4" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                        <h3>Für dich</h3>
                        <p><FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Führungskompetenz entwickeln<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Echte Beiträge leisten<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Verantwortung übernehmen</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'users']} mask={['fas', 'square']} size="4x" color="#4285F4" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                        <h3>Für dein Team</h3>
                        <p><FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Konflikte produktiv lösen<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Spaß bei der Arbeit<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#4285F4" />{' '}Kreativität entfesseln</p>
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
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <h2>Echtes Training per App</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
                        die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon icon={['fad', 'chalkboard-teacher']} fixedWidth size="5x" />
                        <b style={{margin:"0 1.6rem"}}>vs.</b>
                        <FontAwesomeIcon icon={['fad', 'phone-laptop']} fixedWidth size="5x" style={sunStyle} />
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Machen, statt zuhören</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Viele kleine Trainings</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Nach persönlichem Bedarf</Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col>
                        <h2>Digitales Training</h2>
                        <p>Es ist eure Teamarbeit. Also entscheidet ihr selber, wo ihr wann etwas verbessern wollt.
                        Unsere Tutorials helfen euch dabei über die richtigen Themen zu sprechen und aus neuen Perspektiven auf diese Themen zu blicken.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    <span className="fa-layers fa-8x">
                <FontAwesomeIcon icon={['fal', 'mobile']} color="#67A4F4"/>
                <span className="fa-layers-text" style={{fontSize:"1rem"}}>MOBILE<br></br>PHONE</span>
                </span>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'cloud-download']} size="2x" color="#4285F4" style={{ marginBottom: "1rem" }} />
                        <h3>On Demand</h3>
                        <p>Training komplett auf dich zugeschnitten: Was, wann und wo du möchtest.</p></Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'phone-laptop']} size="2x" color="#4285F4" style={{ marginBottom: "1rem" }} />
                        <h3>Ohne Coach</h3>
                        <p>Unsere Tutorials bauen Fähigkeiten auf — genau wie ein menschlicher Trainer.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col>
                        <h2>Professionelle Teamarbeit entfesselt Potenziale</h2>
                        <p>Leistung entsteht aus Teamarbeit. Nur im Team können wir nachhaltig wachsen.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3rem" }}>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'heartbeat']} size="2x" color="#4285F4" style={{ marginBottom: "1rem" }} />
                        <h3>Beziehungen stärken</h3>
                        <p>Starke persönliche Beziehungen bilden das Fundament guter Teamarbeit.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'handshake']} size="2x" color="#4285F4" style={{ marginBottom: "1rem" }} />
                        <h3>Prozesse optimmieren</h3>
                        <p>Flow durch bewusst und individuell gestaltete Zusammenarbeit.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'mind-share']} size="2x" color="#4285F4" style={{ marginBottom: "1rem" }} />
                        <h3>Fähigkeiten entwickeln</h3>
                        <p>Im Team voneinander lernen und stetig besser zu werden.</p>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default TrainingPage