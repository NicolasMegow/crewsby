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
                        <FontAwesomeIcon icon={['fal', 'chart-line']} size="6x" color="#0f62cc" />
                        <h1>Profis investieren in ihre Teamarbeit.</h1>
                    </Col>
                </Row>
                <Row style={{marginTop:"6rem"}}>
                    <Col sm>
                        <h2>Team</h2>
                        <p><FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '}Über 40 Stunden Trainings<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '}On Demand<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '}Einzeln & im Team</p>
                        <p>Zugang zu allen Tutorials<br></br>
                        für alle Mitglieder eines Teams<br></br>
                        Beschränkt auf 8 Mitglieder pro Team<br></br>
                        Tutorials in 2 Sprachen verfügbar</p>
                        <p><h2>99 €</h2> pro Team/Monat</p>
                        <Link to="/tutorials"><Button>Jetzt buchen</Button></Link>
                    </Col>
                    <Col sm>
                        <h2>Team of Teams</h2>
                        <p><FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '}Trainings-Flatrate<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '}Einheitliches Fundament<br></br>
                        <FontAwesomeIcon icon={['fal', 'check']} color="#0f62cc" />{' '}Questmaster-Community</p>
                        <p>Zugang zu allen Tutorials<br></br>
                        für alle Mitgleider einer Einheit<br></br>
                        Einheiten sind Abteilungen & Unternehmen<br></br>
                        Tutorials in 9 Sprachen verfügbar<br></br>
                        <br></br>
                        Intraneteinbindung mit Single-Sign-On(SSO)<br></br>
                        Zugang zur Questmaster-Community<br></br>
                        inklusive Trainings-Dashboard<br></br>
                        und ERFA-Gruppen</p>
                        <p><h2>99 €</h2> pro Mitarbeiter/Jahr</p>
                        <p><Link to="/team-of-teams">Mehr erfahren</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage