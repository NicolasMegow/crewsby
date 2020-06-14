import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

const TeamofteamsPage = () => {
    return (
        <Layout>
            <Head title="Team of Teams" />
            <Container>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={['fal', 'industry-alt']} size="6x" color="#0f62cc" />
                        <h1>Digitalisierung der Personalentwicklung</h1>
                        <p>Wir bieten dir und deinem Team die Werkzeuge, um ein wirklich hervorragendes Teamgefühl zu schaffen und zu pflegen.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"6rem"}}>
                    <Col>
                        <h2>Professionelle Teamarbeit entfesselt Potenziale</h2>
                        <p>Teamarbeit läuft häufig nebenher — ganz natürlich durch den Alltag im Büro.
                        Wie gut oder schlecht diese Teamarbeit ist, liegt ganz in deiner Hand.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'analytics']} fixedWidth size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Trainings-Dashboard</h3>
                        <p>Die unternehmensweite Personalentwicklung auf einen Blick.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'flag-checkered']} fixedWidth size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Questmaster-Community</h3>
                        <p>Materialien zur Durchführung unternehmensinterner Challenges.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'coffee-pot']} fixedWidth size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>ERFA-Gruppen</h3>
                        <p>Zugang zu einer Community unternehmensübergreifender ERFA-Gruppen.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"6rem"}}>
                    <Col>
                        <h2>Teamgefühl integriert sich perfekt ins Intranet</h2>
                        <p>Wir unterstützen gerne kostenlos bei der Integration in bestehende Intranets.
                            So hat jeder Mitarbeiter direkt Zugriff auf alle Tutorials und braucht keinen zusätzlichen Account anzulegen.</p>
                        <Button variant="primary" href="mailto:moin@strategiepark.de">Gespräch vereinbaren</Button>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default TeamofteamsPage