import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import Emoji from "../shared/emoji"

import Teamboat from "../../img/svg/EinBoot.svg"
import DigiTraining from "../../img/svg/DigiTraining.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TeamInfo = () => {
    const { loginWithPopup } = useAuth0()
    return (
        <Container>
            <Row>
                    <Col>
                        <Teamboat width="100%" />
                        <h1>Teamarbeit neu erleben.</h1>
                        <h2>Wie bereitet Ihr Euch auf die nächste Herausforderung vor?
                        </h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8rem" }}>
                    <Col md={6}>
                        <p className="mintitle">Bewusste Verbesserung</p>
                        <h2>Trainiert zusammen.</h2>
                        <p>Wie gut oder schlecht Eure Teamarbeit ist, liegt in Eurer Hand.
                        Trainiert mit Crewsby, um voneinander & miteinander zu lernen.
                        </p>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                            <Emoji symbol="❤️" label="heart" />{' '}Starkes Teamgefühl<br></br>
                            <Emoji symbol="💪" label="muscle" />{' '}Gesteigerte Leistung<br></br>
                            <Emoji symbol="🧠" label="brain" />{' '}Entfesselte Kreativität
            </p>

                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num">A</div>
                        <div>
                            <h3>Team-Workshop</h3>
                            <p className="feature-text">Besser zusammenarbeiten.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num">B</div>
                        <div>
                            <h3>Teambuilding</h3>
                            <p className="feature-text">Schneller zusammenwachsen.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
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
                        <h2>Entwickelt Euch weiter.</h2>
                        <p>Neue Fähigkeiten verbessern Eure Teamarbeit. 
                            Setzt mit Crewsby Eure eigenen Schwerpunkte
                            und wachst zusammen über Euch hinaus.
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
                <Row style={{ marginTop: "4rem" }}>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num">1</div>
                        <div>
                            <h3>Verbesserung</h3>
                            <p className="feature-text">Z.B. starkes Teamgefühl</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num">2</div>
                        <div>
                            <h3>Fähigkeit</h3>
                            <p className="feature-text">Z.B. Vertrauen aufbauen</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
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
                        <h2>Startet gute Gespräche.</h2>
                        <p>Crewsby läd Euch zum Wechsel Eurer Perspektive ein.
                        So entdeckt Ihr neue Seiten an Euch und Euren Teammitgliedern.
                        Stück für Stück verbessern diese Gespräche Eure Teamarbeit.
                        </p>
                    </Col>
                    <Col lg={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <DigiTraining width="100%" height="260" />
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num"><FontAwesomeIcon icon={['fal', 'lightbulb']} /></div>
                        <div>
                            <h3>Idee</h3>
                            <p className="feature-text">Idee verstehen.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num"><FontAwesomeIcon icon={['fal', 'stopwatch']} /></div>
                        <div>
                            <h3>Übung</h3>
                            <p className="feature-text">Idee ausprobieren.</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{ display: "flex", alignItems: "flex-end" }}>
                        <div className="feature-num"><FontAwesomeIcon icon={['fal', 'question']} /></div>
                        <div>
                            <h3>Rückblick</h3>
                            <p className="feature-text">Idee sacken lassen.</p>
                        </div>
                    </Col>
                </Row>
            <Row style={{marginTop:"4rem"}}>
                <Col>
                    <hr></hr>
                    <h1 style={{marginBottom:"3rem"}}><Emoji symbol="👋" label="welcome" />{' '}Jetzt 1 Monat kostenlos!</h1>
                    <Link to='/' className="btn btn-primary btn-lg" style={{ marginRight: ".5rem" }} onClick={event => {
                        event.preventDefault()
                        loginWithPopup({ action: 'signup' })
                        }}>
                        Anmelden
                    </Link>
                    <Link to='/' className="btn btn-outline-primary btn-lg" style={{ marginRight: "0" }} onClick={event => {
                        event.preventDefault()
                        loginWithPopup()
                        }}>
                        Einloggen
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default TeamInfo