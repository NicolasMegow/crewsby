import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import Emoji from "../components/emoji"

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

import Teamboat from "../img/svg/EinBoot.svg"
import DigiTraining from "../img/svg/DigiTraining.svg"

const TrainingPage = () => {
    return (
        <Layout>
            <Head title="Training" />
            <Container>
                <Row>
                    <Col>
                        <Teamboat width="100%" />
                        <h1>Training für moderne Teams.</h1>
                        <h2>Wie bereitest Du Dich auf die nächster Herausforderung vor?
                        </h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <p className="mintitle">Bewusste Verbesserung</p>
                        <h2>Trainiere alleine & im Team.</h2>
                        <p>Wie gut oder schlecht Deine Teamarbeit ist, liegt in Deiner Hand.
                            Lerne alleine oder hol Dein Team ins Boot, damit ihr voneinander & miteinander lernen könnt.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                            <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>...<br></br>
                            <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>...<br></br>
                            MACHEN.
                        </p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">1</div>
                        <div>
                            <h3>Solo-Training</h3>
                            <p className="feature-text">Persönlichen Beitrag steigern.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">2</div>
                        <div>
                            <h3>Teambuilding</h3>
                            <p className="feature-text">Im Block zusammenwachsen.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">3</div>
                        <div>
                            <h3>Retrospektiven</h3>
                            <p className="feature-text">Zum Check-In Impulse setzen.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col lg={6}>
                        <p className="mintitle">Kleine Verbesserung</p>
                        <h2>Starte gute Gespräche.</h2>
                        <p>über die richtigen Themen zu sprechen und aus neuen Perspektiven auf diese Themen zu blicken.</p>
                    </Col>
                    <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <DigiTraining width="100%" height="260" />
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">1</div>
                        <div>
                            <h3>Info</h3>
                            <p className="feature-text">Kurze, verständliche Erklärung</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">2</div>
                        <div>
                            <h3>Übung</h3>
                            <p className="feature-text">Bewusstes Ausprobieren</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">3</div>
                        <div>
                            <h3>Reflexion</h3>
                            <p className="feature-text">Rückblick auf die Erfahrung.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col lg>
                        <p className="mintitle">Langfristige Verbesserung</p>
                        <h2>Wachse als Team zusammen.</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua.
                        </p>
                    </Col>
                    <Col lg style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                            <Emoji symbol="💦" label="sweat" />{' '}Training<br></br>
                            <Emoji symbol="💦" label="sweat" />{' '}Training<br></br>
                            <Emoji symbol="💦" label="sweat" />{' '}Training<br></br>
                            <Emoji symbol="🏆" label="success" />{' '}Erfolg
                        </p>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default TrainingPage