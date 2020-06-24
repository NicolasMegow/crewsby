import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

const EnterprisePage = () => {
    return (
        <Layout>
            <Head title="Team of Teams" />
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={['fal', 'people-carry']} size="6x" color="#0f62cc" />
                        <h1>Selbstgesteuerte Personalentwicklung</h1>
                        <p>Teamarbeit läuft häufig unterschiedlich.
                        Jeder Standort hat so seine Besonderheiten.
                        Mit Teamgefühl schaffen Sie ein gemeinsames Fundament.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col>
                        <h2>4 fantastische Enterprise-Features</h2>
                        <p>Bringen Sie Ihr Unternehmen in Bewegung. Die Tutorials sind nur die Basis.
                        Darauf aufbauend gestalten wir Personalentwicklung neu.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'globe-europe']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Flächendeckende Standards</h3>
                        <p>Alle Tutorials sind in 9 Sprachen verfügbar. So profitiert jeder Mitarbeiter weltweit.</p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'analytics']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Messbare Ergebnisse</h3>
                        <p>Unternehmensinterne Sprints zu brennenden Themen aus dem Tagesgeschäft.
                        Wir stellen umfassende Materialien, mit denen Sie selbst diese Sprints organisieren und druchführen.
                        </p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'coffee-pot']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Peer-Supervision</h3>
                        <p>Jeder Mitarbeiter kann sich zu Supervisionsgruppen anmelden — frei nach Bedarf.
                        Wir stellen spannende Gruppen zusammen und gestalten den Prozess.
                        </p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'door-open']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Intranet mit SSO</h3>
                        <p>Kostenlose Unterstütztung bei der Integration in bestehende Intranets. Wir erfinden das Rad nicht neu.
                        Gerne integrieren wir uns in Systeme, die bei Ihnen bereits etabliert sind.</p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <h2>Wie hoch ist der Return-on-Teamarbeit bei Ihnen?</h2>
                        <p><Button variant="primary" href="mailto:moin@strategiepark.de">Gespräch vereinbaren</Button>
                            {'  '} oder einfach anrufen: (+49) 176 / 8526 3478.</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default EnterprisePage