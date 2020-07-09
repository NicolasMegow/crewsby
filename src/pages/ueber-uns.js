import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const UeberUnsPage = () => {
    return (
        <Layout>
            <Head title="Über uns" />
            <Container>
                <Row>
                    <Col>
                        <h1 style={{color: "#4285F4"}}>CREWSBY.</h1>
                        <h2>Wie Gatsby, ein Hinweis:</h2>
                        <h2>Starke Teams erschaffen sich selbst durch ihre Crew .</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 style={{  marginTop: "8rem", marginBottom: "0rem" }}>Wir <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth color="#DB4437" /> Teams.*</h1>
                        <p>* Nicht MS Teams, sondern Menschen, die zusammenarbeiten.</p>
                        <p>Wir arbeiten alle in Teams. Arbeit ist ein wichtiger Teil des Lebens.
                            Und das Leben ist zu kurz für Probleme im Team.Gute Zusammenarbeit im Team ist selten ein Produkt aus Glück und Hoffnung.
                            Gelegentliche Events reichen selten aus, um das Teamgefühl nachhaltig zu verbessern.
                            Wir wissen, dass ein gutes Teamgefühl Zeit und Aufmerksamkeit braucht.
                            Da beides häufig knapp ist, entwickeln wir Tutorials als Ergänzung zu traditionellem Teambuilding.
                            Wir glauben, dass jedes Team ein gutes Teamgefühl verdient.
                            Deshalb arbeiten wir unermüdlich daran euch einfachen und günstigen Zugang zu genau den richtigen Impulsen zu geben.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'atom']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Perspektive</p>
                        <h3>Wissenschaftlich unaufgeregt</h3>
                        <p>Jeder Mitarbeiter kann sich zu Supervisionsgruppen anmelden — frei nach Bedarf.
                        Wir stellen spannende Gruppen zusammen und gestalten den Prozess.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon icon={['fal', 'chart-network']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#67A4F4" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'books']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#418DF1" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'microscope']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#4285F4" transform="shrink-8" />
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <FontAwesomeIcon icon={['fas', 'leaf-heart']} size="2x" color="#4285F4"/>
                        <p className="mintitle">Anspruch</p>
                        <h3>Durch & durch nachhaltig</h3>
                        <p>Echte Fähigkeiten aufbauen + CO2-neutral.
                        Digitales Training hat eine hervorragende Klimabilanz. Wir gleichen unseren CO2-Auststoß durch Aufforstungsprojekte aus.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesomeIcon icon={['fal', 'seedling']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#67A4F4" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'flower-tulip']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#418DF1" transform="shrink-8" />
                        <FontAwesomeIcon icon={['fal', 'tree-alt']} fixedWidth size="5x" mask={['fas', 'rectangle-landscape']} color="#4285F4" transform="shrink-8" />
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default UeberUnsPage