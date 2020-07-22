import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import Emoji from "../components/emoji"

import Layout from "../components/layout"
import Head from "../components/head"

const UeberUnsPage = () => {
    return (
        <Layout>
            <Head title="Über uns" />
            <Container>
                <Row style={{marginTop:"4rem"}}>
                    <Col>
                        <h1 style={{color: "#4285F4"}}>CREWSBY</h1>
                        <h2>Wie Gatsby ein Hinweis: by Gatz. 
                            Die Crew erschafft das Team.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 style={{ marginTop: "8rem" }}>Wir <Emoji symbol="❤" label="heart"/> Teamarbeit.</h2>
                        <p>Wir arbeiten alle in Teams. Arbeit ist ein wichtiger Teil des Lebens.
                            Und das Leben ist zu kurz für Probleme im Team. 
                            Gute Zusammenarbeit im Team ist selten ein Produkt aus Glück und Hoffnung.
                            Gelegentliche Events reichen selten aus, um das Teamgefühl nachhaltig zu verbessern.
                            Wir wissen, dass ein gutes Teamgefühl Zeit und Aufmerksamkeit braucht.
                            Da beides häufig knapp ist, entwickeln wir Tutorials als Ergänzung zu traditionellem Teambuilding.
                            Wir glauben, dass jedes Team ein gutes Teamgefühl verdient.
                            Deshalb arbeiten wir unermüdlich daran euch einfachen und günstigen Zugang zu genau den richtigen Impulsen zu geben.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <p className="mintitle">Arbeitsweise</p>
                        <h3>Wir sind ein schlankes Team.</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
              sed diam voluptua.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                            <Emoji symbol="💻" label="remote" />{' '}Remote<br></br>
                            <Emoji symbol="🔵" label="circle" />{' '}Minimalistisch<br></br>
                            <Emoji symbol="🔬" label="research" />{' '}Wissenschaftlich
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <p className="mintitle">Anspruch</p>
                        <h3>Wir sind durch & durch nachhaltig.</h3>
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
        </Layout>
    )
}

export default UeberUnsPage