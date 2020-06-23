import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const TrainingPage = () => {
    return (
        <Layout>
            <Head title="Training" />
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={['fal', 'map-signs']} size="6x" color="#0f62cc" />
                        <h1>Gute Teamarbeit ist eine Entscheidung.</h1>
                        <p>Teamarbeit läuft häufig nebenher — ganz natürlich durch den Alltag im Büro.
                            Wie gut oder schlecht diese Teamarbeit ist, liegt in deiner Hand. 
                            Wir bieten dir und deinem Team die Werkzeuge, um eure Teamarbeit in die Profiliga zu heben.
                        </p>
                    </Col>
                </Row>
                <Row style={{marginTop:"3rem"}}>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'user']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Für dich</h3>
                        <p><FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Führungskompetenz entwickeln<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Echte Beiträge leisten<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Verantwortung übernehmen</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'users']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Für dein Team</h3>
                        <p><FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Konflikte produktiv lösen<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Spaß bei der Arbeit<br></br>
                            <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Kreativität entfesseln</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"8rem"}}>
                    <Col>
                        <h2>Digitales Training</h2>
                        <p>Es ist eure Teamarbeit. Also entscheidet ihr selber, wo ihr wann etwas verbessern wollt. 
                        Unsere Tutorials helfen euch dabei über die richtigen Themen zu sprechen und aus neuen Perspektiven auf diese Themen zu blicken.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'stopwatch']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>30 Minuten</h3>
                        <p>Maximales Training durch mehrere Tutorials mit jeweils nur 30 Minuten.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'cloud-download']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>On Demand</h3>
                        <p>Training komplett auf dich zugeschnitten: Was, wann und wo du möchtest.</p></Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'phone-laptop']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Ohne Coach</h3>
                        <p>Unsere Tutorials bauen Fähigkeiten auf — genau wie ein menschlicher Trainer.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"8rem"}}>
                    <Col>
                        <h2>Professionelle Teamarbeit entfesselt Potenziale</h2>
                        <p>Leistung entsteht aus Teamarbeit. Nur im Team können wir nachhaltig wachsen.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"3rem"}}>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'heartbeat']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Beziehungen stärken</h3>
                        <p>Starke persönliche Beziehungen bilden das Fundament guter Teamarbeit.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'handshake']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Prozesse optimmieren</h3>
                        <p>Flow durch bewusst und individuell gestaltete Zusammenarbeit.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'mind-share']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Fähigkeiten entwickeln</h3>
                        <p>Im Team voneinander lernen und stetig besser zu werden.</p>
                    </Col>
                </Row>
            </Container>
            <CTA/>
        </Layout>
    )
}

export default TrainingPage