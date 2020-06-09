import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'

import Layout from "../components/layout"
import Head from "../components/head"

const UebungenPage = () => {
    return (
        <Layout>
            <Head title="Übungen" />
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={['fas', 'map-signs']} fixedWidth size="6x" color="#0f62cc" />
                        <h1>Professionelle Teamarbeit ist eine Entscheidung.</h1>
                        <p>Wir bieten dir und deinem Team die Werkzeuge, um ein wirklich hervorragendes Teamgefühl zu schaffen und zu pflegen.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Professionelle Teamarbeit entfesselt Potenziale</h2>
                        <p>Teamarbeit läuft häufig nebenher — ganz natürlich durch den Alltag im Büro.
                        Wie gut oder schlecht diese Teamarbeit ist, liegt ganz in deiner Hand.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'heartbeat']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>Beziehungen stärken</h3>
                        <p>Starke persönliche Beziehungen bilden das Fundament guter Teamarbeit.</p>
                    </Col>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'handshake']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>Prozesse optimmieren</h3>
                        <p>Flow durch bewusst und individuell gestaltete Zusammenarbeit.</p>
                    </Col>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'mind-share']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>Fähigkeiten entwickeln</h3>
                        <p>Im Team voneinander lernen und stetig besser zu werden.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Digitales Training</h2>
                        <p>Es ist eure Teamarbeit. Also entscheidet ihr selber, wo ihr wann etwas verbessern wollt. 
                        Unsere Übungen helfen euch dabei über die richtigen Themen zu sprechen und aus neuen Perspektiven auf diese Themen zu blicken.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'stopwatch']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>30 Minuten</h3>
                        <p>Maximales Training durch mehrere Übungen mit jeweils nur 30 Minuten.</p>
                    </Col>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'cloud-download-alt']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>On Demand</h3>
                        <p>Training komplett auf dich zugeschnitten: Was, wann und wo du möchtest.</p></Col>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'phone-laptop']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>Ohne Coach</h3>
                        <p>Unsere Übungen bauen Fähigkeiten auf — genau wie ein menschlicher Trainer.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Professionelle Teamarbeit entfesselt Potenziale</h2>
                        <p>Leistung entsteht aus Teamarbeit. Nur im Team können wir nachhaltig wachsen.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'user']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>Für dich</h3>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />  Sichere Anwendung von Werkzeugen</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />  Echte Beiträge leisten</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />  Verantwortung übernehmen</p>
                    </Col>
                    <Col md>
                        <FontAwesomeIcon icon={['fas', 'users']} fixedWidth size="2x" color="#0f62cc" />
                        <h3>Für dein Team</h3>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />  Konflikte lösen</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />  Spaß bei der Arbeit</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />  Kreativität entfesseln</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default UebungenPage