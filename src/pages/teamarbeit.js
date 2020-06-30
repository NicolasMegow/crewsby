import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const stormStyle = {
    "--fa-secondary-color": "#FDE74C",
    "--fa-secondary-opacity": .8
};

const sunStyle = {
    "--fa-primary-color": "#67A4F4",
    "--fa-secondary-color": "#FDE74C",
    "--fa-secondary-opacity": .8
};

const TeamarbeitPage = () => {
    return (
        <Layout>
            <Head title="Teamarbeit" />
            <Container>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <p style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <span className="fa-layers fa-6x">
                                <FontAwesomeIcon icon={['fas', 'walking']} color="#67A4F4" transform="shrink-4 up-4 right-4" />
                                <FontAwesomeIcon icon={['fas', 'walking']} color="#418DF1" transform="shrink-2 up-2 right-2" />
                                <FontAwesomeIcon icon={['fas', 'walking']} color="#0f62cc" />
                            </span>{'   '}
                            <FontAwesomeIcon icon={['fad', 'map-signs']} fixedWidth size="6x" style={sunStyle} /> {'  '}
                            <FontAwesomeIcon icon={['fad', 'bomb']} fixedWidth size="4x" style={stormStyle} /></p>
                            <h1 style={{ marginBottom: "0", color: "#0f62cc" }}>Gute Teamarbeit</h1>
                            <h1 style={{ marginTop: "0" }}>ist eine Entscheidung</h1>
                        <p>Einführung in die gruppendynamischen Prozesse der Teamentwicklung.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fal', 'people-carry']} size="2x" color="#0f62cc" style={{ marginBottom: "1rem" }} />
                        <h2>Teamarbeit hat 3 Ebenen.</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
                        die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <FontAwesomeIcon icon={['fal', 'heart']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#67A4F4" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'thumbs-up']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#418DF1" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'brain']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#0f62cc" transform="shrink-8" />
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />{' '}starke Beziehungen</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />{' '}individuelle Prozesse</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#0f62cc" />{' '}kombinierte Stärken</Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fal', 'people-arrows']} size="2x" color="#0f62cc" style={{ marginBottom: "1rem" }} />
                        <h2>Teamentwicklung ist ein Selbstläufer.</h2>
                        <p>Lerne, wie gute Teamarbeit funktioniert.
                        Hinter den modernen Arbeitsmethoden stecken grundlegende Mechanismen.
                        Teamgefühl bricht die Arbeitsmethoden runter in kleine Bausteine,
                        die beliebig rekombinierbar sind.</p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <FontAwesomeIcon icon={['fad', 'thunderstorm']} fixedWidth size="5x" style={stormStyle} />
                        <b>vs.</b>
                        <FontAwesomeIcon icon={['fad', 'sun-cloud']} fixedWidth size="5x" style={sunStyle} />
                    </Col>
                </Row>
                <Row style={{ marginTop: "1.4rem" }}>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#D64045" />{' '}schwelende Konflikte</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#D64045" />{' '}nervtötende Diskussionen</Col>
                    <Col sm={4}><FontAwesomeIcon icon={['fas', 'times']} fixedWidth color="#D64045" />{' '}isolierte Aufgabenpakete</Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fal', 'theater-masks']} size="2x" color="#0f62cc" style={{ marginBottom: "1rem" }} />
                        <h2>Von Riesen & Zwergen...</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Teamriesen</h3>
                        <p>Fangen gerne unscheinbare Ideen und helfen anderen diese umzusetzen.</p>
                        <p>Giver & Matcher</p>
                        <Link to="/selbstcheck">Selbstcheck</Link>
                    </Col>
                    <Col md={6}>
                        <h3>Teamzwerge</h3>
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