import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

import ReturnOnTeam from "../img/svg/ReturnOnTeam.svg"

const PreisePage = () => {
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row>
                    <Col>
                        <ReturnOnTeam width="100%" height={400} />
                        <h1 style={{ marginBottom: "0" }}>Günstiger & besser.</h1>
                        <h1 style={{ marginTop: "0", color: "#4285F4" }}>Gute Teamarbeit zählt.</h1>
                        <h2>Geld sollte da keine Rolle spielen. Tut es aber.
                            Crewsby ermöglicht erfolgreiches Teambuilding zu minimalen Kosten.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <h2 >Wie hoch ist Dein Return-on-Teamarbeit?</h2>
                        <p>Bessere Teamarbeit steigert die Produktivität und Kreativität.
                            Die Identifikation mit dem Unternehmen wächst. 
                            Und manchmal macht die Arbeit sogar mehr Spaß.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col md style={{ marginBottom: "4rem" }}>
                        <h2>Team-Paket</h2>
                        <p>Für 1 Team & bis zu 8 Nutzer<br></br>
                        Die Trainings-Flatrate für starke Teams:</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} alle Tutorials<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} für alle Nutzer<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} in 9 Sprachen*<br></br>
                            <br></br>
                            <br></br>
                            <br></br></p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'link']} fixedWidth color="#4285F4" />{' '} Starkes Teamgefühl<br></br>
                            <FontAwesomeIcon icon={['fas', 'trophy-alt']} fixedWidth color="#4285F4" />{' '} Gesteigerte Leistung<br></br>
                            <FontAwesomeIcon icon={['fas', 'magic']} fixedWidth color="#4285F4" />{' '} Entfesselte Kreativität<br></br>
                            <br></br></p>
                        <h2 style={{ marginBottom: "0" }}>89 €</h2>
                        <p>pro Team/Monat</p>
                        <Link to="/beta" className="btn btn-secondary btn-lg">Kostenlos testen</Link>
                        <p style={{ fontSize: "1rem" }}>1 Monat kostenlos & unverbindlich testen.</p>
                    </Col>
                    <Col md>
                        <h2>Enterprise-Paket</h2>
                        <p>Für 2+ Teams & unbegrenzte Nutzer<br></br>
                        Ideal für Abteilungen & Unternehmen:</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} alle Tutorials<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} für alle Nutzer<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} in 9 Sprachen*<br></br>
                            <br></br>
                            <FontAwesomeIcon icon={['fas', 'plus']} fixedWidth color="#4285F4" />{' '} Enterprise-Features*<br></br>
                            <FontAwesomeIcon icon={['fas', 'plus']} fixedWidth color="#4285F4" />{' '} Employer Branding-Effekt<br></br></p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'graduation-cap']} fixedWidth color="#4285F4" />{' '} Selbstgesteuerte Weiterbildung<br></br>
                            <FontAwesomeIcon icon={['fas', 'globe-europe']} fixedWidth color="#4285F4" />{' '} Unternehmensweite Standards<br></br>
                            <FontAwesomeIcon icon={['fas', 'analytics']} fixedWidth color="#4285F4" />{' '} Messbare Ergebnisse<br></br>
                            <br></br></p>
                        <h2 style={{ marginBottom: "0" }}>9 €</h2>
                        <p>pro Nutzer/Monat</p>
                        <Button variant="secondary" size="lg" href="mailto:moin@strategiepark.de">Gespräch vereinbaren</Button>
                        <p style={{ fontSize: "1rem" }}>oder einfach anrufen: (+49) 176 / 8526 3478.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <p style={{ fontSize: "1rem" }}>* Die Sprachpakete und Enterprise-Features sind noch im Entwicklungsprozess. 
                        Wir arbeiten wirklich hart daran schnell gute Features in die Welt zu bringen.</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage