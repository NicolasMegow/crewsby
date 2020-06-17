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
                <Row>
                    <Col>
                    <FontAwesomeIcon icon={['fal', 'balance-scale-left']} size="6x" color="#0f62cc" />
                        <h1>Investitionen in Teamarbeit rechnen sich.</h1>
                        <p>Bessere Teamarbeit steigert die Produktivität und Kreativität. 
                            Auch die Identifikation mit dem Unternehmen wächst.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col sm>
                        <h2>Team</h2>
                        <p><FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '} Über 40 Stunden Trainings<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '} On Demand<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '} Einzeln & im Team</p>
                        <p>Zugang zu allen Tutorials<br></br>
                        für alle Mitglieder eines Teams<br></br>
                        Beschränkt auf 8 Mitglieder pro Team<br></br>
                        Tutorials in 2 Sprachen verfügbar</p>
                        <p><h2>89 €</h2> pro Team/Monat</p>
                        <Link to="/tutorials"><Button>Jetzt buchen</Button></Link>
                    </Col>
                    <Col sm>
                        <h2>Team of Teams</h2>
                        <p><FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '} Trainings-Flatrate<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '} Weltweite Verfügbarkeit<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '} Enterprise Services</p>
                        <p>Zugang zu allen Tutorials<br></br>
                        für alle Mitgleider einer Einheit<br></br>
                        Einheiten sind Abteilungen & Unternehmen<br></br>
                        Tutorials in 9 Sprachen verfügbar<br></br>
                        +<br></br>
                        Überblick mit Trainings-Dashboard<br></br>
                        Zugriff auf Questmaster-Ressourcen<br></br>
                        Zugang zu Peer-Supervision<br></br>
                        Intraneteinbindung mit Single-Sign-On (SSO)<br></br>
                        Optional: Unternehmenspezifische Trainnigs</p>
                        <p><h2>89 €</h2> pro Mitarbeiter/Jahr</p>
                        <p><Link to="/team-of-teams">Mehr erfahren</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage