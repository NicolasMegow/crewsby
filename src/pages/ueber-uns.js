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
                        <h1 style={{marginBottom:"0rem"}}>Wir <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth color="#D64045" /> Teams.*</h1>
                        <p style={{marginBottom:"4rem"}}>* Nicht MS Teams ;) <br></br>
                        Sondern die wundersamen Zusammenschlüsse von Menschen, die gemeinsam arbeiten.</p>
                        <h2>Wir arbeiten alle in Teams. Arbeit ist ein wichtiger Teil des Lebens. 
                            Und das Leben ist zu kurz für Probleme im Team.</h2>
                        <p>Gute Zusammenarbeit im Team ist selten ein Produkt aus Glück und Hoffnung. 
                            Gelegentliche Events reichen selten aus, um das Teamgefühl nachhaltig zu verbessern. 
                            Wir wissen, dass ein gutes Teamgefühl Zeit und Aufmerksamkeit braucht. 
                            Da beides häufig knapp ist, entwickeln wir Tutorials als Ergänzung zu traditionellem Teambuilding.
                            Wir glauben, dass jedes Team ein gutes Teamgefühl verdient.
                            Deshalb arbeiten wir unermüdlich daran euch einfachen und günstigen Zugang zu genau den richtigen Impulsen zu geben.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'award']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Erfahrene Trainer & Coaches</h3>
                        <p>Wir sind professionelle Business Coaches und haben bereits hunderte Teams gecoached.
                        Wir stellen spannende Gruppen zusammen und gestalten den Prozess.
                        </p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'function']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Wissenschaftlich unaufgeregt</h3>
                        <p>Jeder Mitarbeiter kann sich zu Supervisionsgruppen anmelden — frei nach Bedarf.
                        Wir stellen spannende Gruppen zusammen und gestalten den Prozess.
                        </p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col sm>
                    <FontAwesomeIcon icon={['fal', 'leaf-heart']} mask={['fas', 'square']} size="4x" color="#0f62cc" transform="shrink-8" style={{marginBottom:"1rem"}}/>
                        <h3>Durch & durch nachhaltig</h3>
                        <p>Echte Fähigkeiten aufbauen + CO2-neutral.
                        </p>
                    </Col>
                    <Col sm>
                        <p>
                        </p>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default UeberUnsPage