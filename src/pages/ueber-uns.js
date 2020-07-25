import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"

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
                <Row style={{ marginTop: "8rem" }}>
                    <Col>
                        <p className="mintitle">Unsere Vision</p>
                        <h2>Wir <Emoji symbol="❤️" label="heart"/> moderne Teamarbeit.</h2>
                        <p>Moderne Teamarbeit sollte der Standard sein.
                            Und wirkliche jedes Team verdient ein gutes Teamgefühl.
                            </p>
                        <p>Deshalb arbeiten wir unermüdlich daran die besten Trainings dafür zu entwickeln.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <p className="mintitle">Unsere Arbeitsweise</p>
                        <h3>Wir sind ein schlankes Team.</h3>
                        <p>Konzentration auf das Wesentliche ist eine Tugend. 
                            Unser Ziel ist es, dies möglichst diszipliniert umzusetzen.
                            Dabei stehen wir auf den Schultern von Riesen und greifen auf Spitzenforschung zurück.
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
                        <p className="mintitle">Unser Anspruch</p>
                        <h3>Wir sind durch & durch nachhaltig.</h3>
                        <p>Wir verbessern konstant unsere Trainings, damit Du nachhaltig Fähigkeiten aufbauen kannst.
                            Digitales Training hat eine hervorragende Klimabilanz. 
                            Wir gleichen darüber hinaus den durch uns verursachten CO2-Ausstoß mit Aufforstungsprojekten aus.
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