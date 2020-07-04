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
                    <FontAwesomeIcon icon={['fal', 'balance-scale-left']} size="6x" color="#4285F4" />
                        <h1 style={{ marginBottom: "0" }}>Wie hoch ist Dein</h1>
                        <h1 style={{ marginTop: "0", color: "#4285F4" }}>Return-on-Teamarbeit?</h1>
                        <p>Bessere Teamarbeit steigert die Produktivität und Kreativität. 
                            Auch die Identifikation mit dem Unternehmen wächst.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col md style={{marginBottom:"4rem"}}>
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
                        </p>
                        <h2 style={{marginBottom:"0"}}>89 €</h2> 
                        <p>pro Team/Monat</p>
                        <Link to="/beta"><Button variant="secondary">Jetzt buchen</Button></Link>
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
                        </p>
                        <h2 style={{marginBottom:"0"}}>9 €</h2> 
                        <p>pro Nutzer/Monat</p>
                        <Button variant="secondary" href="mailto:moin@strategiepark.de">Gespräch vereinbaren</Button>
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