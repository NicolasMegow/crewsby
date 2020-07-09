import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import Teambuilding from "../img/svg/Teambuilding.svg"
import Zusammenhalt from "../img/svg/Zusammenhalt.svg"
import Diversität from "../img/svg/Diversität.svg"


const TeamarbeitPage = () => {
    return (
        <Layout>
            <Head title="Teamarbeit" />
            <Container>
                <Row>
                    <Col>
                        <Teambuilding width="100%" height={400}/>
                        <h1 style={{ marginBottom: "0"}}>Gute Teamarbeit</h1>
                        <h1 style={{ marginTop: "0", color: "#4285F4"}}>ist eine Entscheidung.</h1>
                        <h2>Einführung in die gruppendynamischen Prozesse der Teamentwicklung.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'people-carry']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Teamarbeit</p>
                        <h2>Menschen arbeiten zusammen.</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
                        die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Zusammenhalt width="100%" height="260"/>
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Starke Beziehungen</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Individuelle Prozesse</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '}Kombinierte Stärken</Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'people-arrows']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Teamentwicklung</p>
                        <h2>Selbstläufer mit Hindernissen.</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
                        die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Diversität width="100%" height="260"/>
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#DB4437" />{' '}Schwelende Konflikte</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#DB4437" />{' '}Nervtötende Meetings</Col>
                    <Col md={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#DB4437" />{' '}Isolierte Arbeitspakete</Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col>
                        <FontAwesomeIcon icon={['fas', 'street-view']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Persönlicher Beitrag</p>
                        <h2>Dein Verhalten macht den Unterschied.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col md={6} style={{marginBottom:"2rem"}}>
                        <h3>Teamriesen / Geber</h3>
                        <p>Fangen gerne unscheinbare Ideen und helfen anderen diese umzusetzen.</p>
                        <p>Giver & Matcher</p>
                        <Link to="/selbstcheck">Selbstcheck</Link>
                    </Col>
                    <Col md={6}>
                        <h3>Teamzwerge / Nehmer</h3>
                        <p>Pitchen gerne glänzende Konzepte und achten auf ihre Reputation.</p>
                        <p>Taker</p>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default TeamarbeitPage