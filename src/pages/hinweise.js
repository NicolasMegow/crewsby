import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

const data = [
    {
        title: 'Kein Tutorial braucht Vorbereitung.',
        text: 'Such dir ein Thema aus, was dich interessiert, und leg los. Unser Algorithmus wählt die passenden Tutorials für dich aus. An Material braucht ihr nur Stift und Papier. Smartphones schaden nicht.'
    },
    {
        title: 'Jedes Tutorial dauert nur 30 Minuten.',
        text: 'Gutes Training sollte so flexibel sein, wie du es bist. In einer halben Stunde lässt sich viel lernen. Gleichzeitig passen 30 Minuten in jeden Terminkalender.'
    },
    {
        title: 'Jedes Tutorial baut Fähigkeiten auf.',
        text: 'Durch wiederholte Anwendung wachsen Fähigkeiten. Den Kern eines Tutorials bildet die Übung. Abgerundet werden die Tutorials durch Beispiele und Reflexionsfragen.'
    },
    {
        title: 'Wir empfehlen mit den Beziehungen zu starten.',
        text: 'Häufig werden die Beziehungen unterschätzt. Doch starke Beziehungen sind das Fundament guter Teamarbeit. Prozesse und danach die Fähigkeiten bauen darauf auf.'
    },
    {
        title: 'Du kannst alleine oder mit deinem Team trainieren:',
        text: 'document 5'
    },
]


const HinweisePage = () => {
    return (
        <Layout>
            <Head title="Hinweise" />
            <Container>
                <Row>
                    <Col>
                        <h1>Hinweise</h1>
                        <h2 style={{ marginTop: "4rem" }}>
                            Du entscheidest, was du trainieren willst.
                            Wir liefern die passenden Tutorials.</h2>
                        <p>Hier eine kleine Gebrauchsanweisung ;)
                            Die Tutorials sind so gestaltet, dass du echte Fähigkeiten aufbaust:</p>
                    </Col>
                </Row>
                <Row>
                    {data.map((hinweis) => (
                        <Card style={{ width: '16rem' }}>
                            <Card.Header><FontAwesomeIcon icon={['fal', 'chess']} size="4x" fixedWidth style={{ margin: "2rem 0" }} /></Card.Header>
                            <Card.Body>
                                <Card.Title>{hinweis.title}</Card.Title>
                                <Card.Text> {hinweis.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
                <Row style={{marginTop:"3rem"}}>
                    <Col>
                        <Link to={`/tutorials`} ><Button variant="primary">Tutorial auswählen</Button></Link>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default HinweisePage