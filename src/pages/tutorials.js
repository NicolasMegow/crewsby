import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LayoutApp from "../components/layout-app"
import Head from "../components/head"

const AppPage = () => {
    return (
        <LayoutApp>
            <Head title="App" />
            <Container>
                <Row>
                    <Col>
                        <h1>Trainingscenter</h1>
                        <h2 style={{marginTop:"4rem"}}>
                            Du entscheidest, was du trainieren willst.<br></br>
                            Wir liefern die passenden Tutorials.</h2>
                        <p>Die Tutorials sind so gestaltet, dass du echte Fähigkeiten aufbaust:</p>
                        <ul>
                            <li>
                                <p style={{fontWeight: "bold", marginBottom: "0rem"}}>Kein Tutorial braucht Vorbereitung.</p>
                                <p>Such dir ein Thema aus, was dich interessiert, und leg los.</p>
                            </li>
                            <li style={{marginTop: "1rem"}}>
                                <p style={{fontWeight: "bold", marginBottom: "0rem"}}>Jedes Tutorial dauert nur 30 Minuten.</p>
                                <p>Gutes Training sollte so flexibel sein, wie du es bist.<br></br>
                                    In einer halben Stunde lässt sich viel lernen.<br></br>
                                    Gleichzeitig passen 30 Minuten in jeden Terminkalender.
                                </p>
                            </li>
                            <li style={{marginTop: "1rem"}}>
                                <p style={{fontWeight: "bold", marginBottom: "0rem"}}>Jedes Tutorial besteht aus 3 Teilen.</p>
                                <p>Die Tutorials starten mit einem kurzen Infoblock.<br></br> 
                                    Den Kern bildet eine Übung zur Anwendung.<br></br> 
                                    Abschließend gibt es ein paar Fragen zur Reflexion.</p>
                            </li>
                            <li style={{marginTop: "1rem"}}>
                                <p style={{fontWeight: "bold", marginBottom: "0rem"}}>Du kannst alleine oder mit deinem Team trainieren:</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginTop:"1rem"}}>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'user']} mask={['fas', 'circle']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                        <p>Diese Tutorials helfen dir persönlich Fähigkeiten aufzubauen.</p>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'users']} mask={['fas', 'circle']} size="4x" color="#0f62cc" transform="shrink-8" style={{ marginBottom: "1rem" }} />
                        <p>Diese Tutorials helfen dir gemeinsam mit deinen Team die Teamarbeit zu verbessern.</p>
                    </Col>
                </Row>
            </Container>
        </LayoutApp>
    )
}

export default AppPage