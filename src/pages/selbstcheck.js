import React from "react"
import { Container, Row, Tab, Nav, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"

import Selbstcheck from "../img/svg/Selbstcheck.svg"

const SelbstcheckPage = () => {
    return (
        <Layout>
            <Head title="Selbstcheck" />
            <Container>
                <Row>
                    <Selbstcheck width="100%" height={400}/>
                    <h1>Selbstcheck für professionelle Teamarbeit</h1>
                    <p>Möchtest du dich oder dein Team einschätzen?</p>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'user']} fixedWidth/>{'   '}MICH</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'users']} fixedWidth/>{'   '}UNS</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className={appStyles.tab}>
                            <h3>Beziehungen</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Ich weiß, wie ich jedem meiner Teammitglieder eine Freude bereiten kann.</ListGroup.Item>
                                <ListGroup.Item>Ich habe das Gefühl, dass wir alle an einem Strang ziehen.</ListGroup.Item>
                                <ListGroup.Item>Ich kann Konflikte im Team produktiv lösen.</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                            <h3>Prozesse</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Ich weiß, welchen Beitrag meine Arbeit zur Zielerreichung leistet.</ListGroup.Item>
                                <ListGroup.Item>Ich habe das Gefühl, dass wir alle an einem Strang ziehen.</ListGroup.Item>
                                <ListGroup.Item>Ich weiß, wann ich im Team die Führung übernehmen sollte.</ListGroup.Item>
                                <ListGroup.Item>Ich kann auf meine Art souverän die Teamführung übernehmen.</ListGroup.Item>
                            </ListGroup>
                            <h3>Fähigkeiten</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className={appStyles.tab}>
                        <h3>Beziehungen</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Teams</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                            <h3>Prozesse</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                            <h3>Fähigkeiten</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
        </Layout>
    )
}

export default SelbstcheckPage