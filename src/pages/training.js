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
                        <h1>Teamarbeit neu erleben.</h1>
                        <h2>Wie bereitest Du Dich auf die nächste Herausforderung vor?
                        </h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <p className="mintitle">Bewusste Verbesserung</p>
                        <h2>Trainiere alleine & im Team.</h2>
                        <p>Wie gut oder schlecht Deine Teamarbeit ist, liegt in Deiner Hand.
                            Trainiere mit Crewsby alleine oder hol Dein Team ins Boot.
                            Dann könnt ihr voneinander & miteinander lernen.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                            <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>...<br></br>
                            <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>...<br></br>
                            Machen<span style={{color:"#4285F4"}}>.</span>
                        </p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">A</div>
                        <div>
                            <h3>Solo-Training</h3>
                            <p className="feature-text">Eigenen Beitrag steigern.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">B</div>
                        <div>
                            <h3>Teambuilding</h3>
                            <p className="feature-text">Schneller zusammenwachsen.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">C</div>
                        <div>
                            <h3>Retrospektiven</h3>
                            <p className="feature-text">Immer besser werden.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col lg>
                        <p className="mintitle">Kleine Verbesserungen</p>
                        <h2>Entwickle Dich für Dein Team.</h2>
                        <p>Verbesserung entsteht aus neuen Fähigkeiten. 
                            Und das braucht etwas Zeit und Wiederholung.
                            Crewsby bietet Dir abwechselungsreiche Trainings,
                            die Du beliebig kombinieren kannst, um neue Fähigkeiten aufzubauen.
                        </p>
                    </Col>
                    <Col lg style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                            <Emoji symbol="💦" label="sweat" />{' '}Training<br></br>
                            <Emoji symbol="💦" label="sweat" />{' '}Training<br></br>
                            <Emoji symbol="💦" label="sweat" />{' '}Training<br></br>
                            <Emoji symbol="🏆" label="success" />{' '}Fähigkeit
                        </p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">1</div>
                        <div>
                            <h3>Verbesserung</h3>
                            <p className="feature-text">Z.B. starkes Teamgefühl</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">2</div>
                        <div>
                            <h3>Fähigkeit</h3>
                            <p className="feature-text">Z.B. Vertrauen aufbauen</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">3</div>
                        <div>
                            <h3>Training</h3>
                            <p className="feature-text">Z.B. Menschen sehen</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col lg={6}>
                        <p className="mintitle">Nachhaltige Verbesserung</p>
                        <h2>Starte gute Gespräche.</h2>
                        <p>Crewsby läd Dich zum Wechsel Deiner Perspektive ein.
                            So entdeckst Du neue Seiten an Dir und Deinen Teammitgliedern.
                            Stück für Stück baust Du so neue Fähigkeiten auf und verbesserst die Teamarbeit.
                        </p>
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
                            <p className="feature-text">Perspektive verstehen.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">2</div>
                        <div>
                            <h3>Übung</h3>
                            <p className="feature-text">Perspektive ausprobieren.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{display: "flex", alignItems: "flex-end"}}>
                        <div className="feature-num">3</div>
                        <div>
                            <h3>Rückblick</h3>
                            <p className="feature-text">Perspektive sacken lassen.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default TrainingPage