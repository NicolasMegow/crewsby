import React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import Emoji from "../components/shared/emoji"
import FaCheck from "../components/shared/facheck"
import CTA from "../components/layout/cta"

import ReturnOnTeam from "../img/svg/ReturnOnTeam.svg"

const PreisePage = () => {
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row>
                    <Col>
                        <ReturnOnTeam width="100%" height={400} />
                        <h1>Return-on-Teamarbeit<span style={{color:"#4285F4"}}>.</span></h1>
                        <h2>Regelmäßiges Training ist eine gute Investition.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <h2>Enterprise-Paket</h2>
                        <p>Für 2+ Teams & unbegrenzte Mitglieder<br></br>
                        Beinhaltet das Team-Paket, plus:</p>
                        <p>
                            <FaCheck />{' '} alle Trainings in 9 Sprachen*<br></br>
                            <FaCheck />{' '} kostenlose Supervision*<br></br>
                            <FaCheck />{' '} Dashboard aller Trainings*<br></br>
                            <FaCheck />{' '} Wettbewerbe für Teams*<br></br>
                        </p>
                        <p>
                            <Emoji symbol="🎓" label="training"/>{' '} Selbstgesteuerte Weiterbildung<br></br>
                            <Emoji symbol="🌐" label="global"/>{' '} Unternehmensweite Standards<br></br>
                            <Emoji symbol="📈" label="results"/>{' '} Messbare Ergebnisse<br></br>
                            <br></br></p>
                        <h2 style={{ marginBottom: "0" }}>9 €</h2>
                        <p>pro Nutzer/Monat</p>
                        <Button variant="secondary" size="lg" href="mailto:moin@crewsby.de">Gespräch vereinbaren</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <hr></hr>
                        <p style={{ fontSize: "1rem" }}>* Die Übersetzungen und Enterprise-Features sind noch im Entwicklungsprozess. 
                        Wir arbeiten wirklich hart daran Crewsby konstant & schnell zu verbessern.</p>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default PreisePage