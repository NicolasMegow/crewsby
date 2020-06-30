import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

const PreisePage = () => {
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                    <FontAwesomeIcon icon={['fal', 'balance-scale-left']} size="6x" color="#0f62cc" />
                        <h1 style={{ marginBottom: "0" }}>Wie hoch ist Dein</h1>
                        <h1 style={{ marginTop: "0", color: "#0f62cc" }}>Return-on-Teamarbeit?</h1>
                        <p>Bessere Teamarbeit steigert die Produktivität und Kreativität. 
                            Auch die Identifikation mit dem Unternehmen wächst.</p>
                        <h3>Die Flatrate beinhaltet:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />{' '}alle Tutorials</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />{' '}für alle Teammitglieder</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />{' '}in 9 Sprachen*</Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col md style={{marginBottom:"4rem"}}>
                        <h2>Team-Flatrate</h2>
                        <p>Für 1-8 Mitarbeiter<br></br>
                        Der Standard für starke Teams</p>
                        <p>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Tägliche Verbesserung<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Gezielte Trainingsblöcke<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} fixedWidth color="#0f62cc" />{' '}Spontane Auffrischung<br></br>
                        <br></br>
                        <br></br>
                        <br></br></p>
                        <h2 style={{marginBottom:"0"}}>89 €</h2> 
                        <p>pro Team/Monat</p>
                        <Link to="/beta"><Button>Jetzt buchen</Button></Link>
                    </Col>
                    <Col md>
                        <h2>Enterprise-Flatrate</h2>
                        <p>Für 9-100.000 Mitarbeiter<br></br>
                        Ideal für Abteilungen & Unternehmen</p>
                        <p>
                        <FontAwesomeIcon icon={['fas', 'graduation-cap']} fixedWidth color="#0f62cc" />{' '}Selbstgesteuerte Basis-PE<br></br>
                        <FontAwesomeIcon icon={['fas', 'globe-europe']} fixedWidth color="#0f62cc" />{' '}Unternehmensweite Standards<br></br>
                        <FontAwesomeIcon icon={['fas', 'analytics']} fixedWidth color="#0f62cc" />{' '}Messbare Ergebnisse<br></br> 
                        <br></br>
                        + Enterprise-Features*<br></br>
                        + Employer Branding-Effekt<br></br>
                        </p>
                        <h2 style={{marginBottom:"0"}}>89 €</h2> 
                        <p>pro Mitarbeiter/Jahr</p>
                        <Button variant="primary" href="mailto:moin@strategiepark.de">Gespräch vereinbaren</Button>
                        <p style={{fontSize:"0.8rem"}}>oder einfach anrufen: (+49) 176 / 8526 3478.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col>
                    <p style={{fontSize:"0.8rem"}}>* Die Sprachpakete und Enterprise-Features sind noch im Entwicklungsprozess. Wir arbeiten nach Kräften daran diese schnell zu launchen.</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage