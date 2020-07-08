import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

import Beta from "../img/svg/Beta.svg"

const BetaPage = () => {
    return (
        <Layout>
            <Head title="Beta Test" />
            <Container>
                <Row>
                    <Col>
                        <Beta width="100%" height={400} />
                        <h1 style={{ marginBottom: "0" }}>Beta-Test</h1>
                        <h1 style={{ marginTop: "0", color: "#4285F4" }}>Wir suchen Bugs.</h1>
                        <h2>Trainiere mit Crewsby kostenlos & hilf uns besser zu werden.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size="2x" color="#4285F4" />
                        <p className="mintitle">Unterstützung</p>
                        <h2>Mach Crewsby großartig.</h2>
                        <p>Hör auf Ratschläge zu konsumieren.
                        Erst die Anwendung der Mechanismen führt zu besserer Teamarbeit und Leistungssteigerung.
                        Teamgefühl liefert dir unzählige Tutorials, um alleine oder im Team die Anwendung zu trainieren.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.4rem", textAlign:"right" }}>
                            <p style={{ color: "#717884" }}>genervtes.feedback@crewsby.com</p>
                            <p style={{ color: "#717884" }}>irritiertes.feedback@crewsby.com</p>
                            <p style={{ color: "#717884" }}>neugieriges.feedback@crewsby.com</p>
                            <p style={{ color: "#4285F4" }}>herzliches.feedback@crewsby.com</p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'construction']} size="2x" color="#4285F4" />
                        <p className="mintitle">Unvollkommen</p>
                        <h2>Trainiere im Rohbau.</h2>
                        <p>Trainiere wann du willst, wo du willst und was du willst.
                            Die Tutorials integrieren sich perfekt in deinen Alltag.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
                        <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}nur 1 Account / Team<br></br>
                        <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}nur 1 Sprache<br></br>
                        <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}nur 10 Trainings<br></br>
                        <hr></hr>
                        <FontAwesomeIcon icon={['fas', 'star']} fixedWidth color="#F4B400" />{' '}voller Trainingseffekt<br></br>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default BetaPage