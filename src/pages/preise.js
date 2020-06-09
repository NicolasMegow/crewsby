import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"

const PreisePage = () => {
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row>
                    <Col>
                        <h1>Profis investieren in die Teamarbeit.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md><h2>Team</h2>
                        <p>Zugang zu allen Übungen<br></br>
                        für professionelle Teamplayer und Teams.<br></br>
                        Wir empfehlen nicht mehr als 8-10 Mitglieder pro Team.</p>
                        <p>49€ pro Team/Monat</p>
                        <Link to="/app-start"><Button>Jetzt buchen</Button></Link>
                    </Col>
                    <Col md><h2>Team of Teams</h2>
                        <p>Zugang zu allen Übungen<br></br>
                        für alle Mitarbeiter des Unternehmens.<br></br>
                        Intraneteinbindung mit Single-Sign-On(SSO).<br></br>
                        Zugang zur Questmaster-Community<br></br>
                        mit Tutorials, Templates und Checklisten zur Durchführung unternehmensinterner Quests.</p>
                        <p>29€ pro Mitarbeiter/Jahr</p>
                        <p><Link to="/app-start">Mehr erfahren</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage