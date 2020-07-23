import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import Layout from "../components/layout"
import Head from "../components/head"

import FAQData from "../content/faq.yaml"
import Emoji from "../components/emoji"

import ReturnOnTeam from "../img/svg/ReturnOnTeam.svg"

const PreisePage = () => {
    const { loginWithPopup } = useAuth0()
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row>
                    <Col>
                        <ReturnOnTeam width="100%" height={400} />
                        <h1>Return-on-Teamarbeit<span style={{color:"#4285F4"}}>.</span></h1>
                        <h2>Regelmäßiges Training ist eine gute Investition.</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col md style={{ marginBottom: "4rem" }}>
                        <h2>Team-Paket</h2>
                        <p>Für 1 Team & bis zu 8 Mitglieder<br></br>
                        Beinhaltet:</p>
                        <p><FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} alle Trainings<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} für alle Mitglieder<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} in 9 Sprachen*<br></br>
                        </p>
                        <p>
                            <Emoji symbol="❤️" label="heart"/>{' '} Starkes Teamgefühl<br></br>
                            <Emoji symbol="💪" label="muscle"/>{' '} Gesteigerte Leistung<br></br>
                            <Emoji symbol="🧠" label="brain"/>{' '} Entfesselte Kreativität<br></br>
                            <br></br></p>
                        <h2 style={{ marginBottom: "0" }}>89 €</h2>
                        <p>pro Team/Monat</p>
                        <Link to='/' className="btn btn-secondary btn-lg" onClick={event => {
                                            event.preventDefault()
                                            loginWithPopup()
                                            }}>Kostenlos testen
                                        </Link>
                        <p style={{ fontSize: "1rem" }}>1 Monat kostenlos & unverbindlich testen.</p>
                    </Col>
                    <Col md>
                        <h2>Enterprise-Paket</h2>
                        <p>Für 2+ Teams & unbegrenzte Mitglieder<br></br>
                        Beinhaltet das Team-Paket, plus:</p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} kostenlose Supervision*<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} Dashboard aller Trainings*<br></br>
                            <FontAwesomeIcon icon={['fas', 'check']} fixedWidth color="#4285F4" />{' '} Wettbewerbe für Teams*<br></br>
                        </p>
                        <p>
                            <Emoji symbol="🎓" label="training"/>{' '} Selbstgesteuerte Weiterbildung<br></br>
                            <Emoji symbol="🌐" label="global"/>{' '} Unternehmensweite Standards<br></br>
                            <Emoji symbol="📈" label="results"/>{' '} Messbare Ergebnisse<br></br>
                            <br></br></p>
                        <h2 style={{ marginBottom: "0" }}>9 €</h2>
                        <p>pro Nutzer/Monat</p>
                        <Button variant="secondary" size="lg" href="mailto:moin@strategiepark.de">Gespräch vereinbaren</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <hr></hr>
                        <p style={{ fontSize: "1rem" }}>* Die Übersetzungen und Enterprise-Features sind noch im Entwicklungsprozess. 
                        Wir arbeiten wirklich hart daran Crewsby konstant & schnell zu verbessern.</p>
                        <hr></hr>
                    </Col>
                </Row>
                <Row style={{ marginTop: "4rem" }}>
                    <Col>
                        <h2><Emoji symbol="❓" label="question"/>{' '}Deine Fragen, unsere Antworten.</h2>
                        {FAQData.content.map((hinweis) => (
                            <div style={{marginTop:"3rem"}} key={hinweis.id}>
                            <h3>{hinweis.q}</h3>
                            <p>{hinweis.a}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row style={{ marginTop: "3rem" }}>
                    <Col>
                        <p>Wir freuen uns von Dir zu hören!
                            Schreib uns eine E-Mail an <a href="mailto:Fragen@crewsby.com">Fragen@crewsby.com.</a></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage