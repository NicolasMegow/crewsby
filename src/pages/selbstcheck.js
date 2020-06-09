import React from "react"
import { Link } from "gatsby"
import { Container, Row, Tab, Nav, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"


library.add(fas)

const SelbstcheckPage = () => {
    return (
        <Layout>
            <Head title="Selbstcheck" />
            <Container>
                <Row>
                    <FontAwesomeIcon icon={['fas', 'tachometer-fast']} fixedWidth size="6x" color="#0f62cc" />
                </Row>
                <Row>
                    <h1>Selbstcheck für professionelle Teamarbeit</h1>
                    <p>Möchtest du dich oder dein Team einschätzen?</p>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first"><FontAwesomeIcon icon={['fas', 'user']} fixedWidth />  Selbstcheck</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><FontAwesomeIcon icon={['fas', 'users']} fixedWidth />  Teamcheck</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className={appStyles.tab}>
                            <h3>Beziehungen</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
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
                            </ListGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className={appStyles.tab}>
                        <h3>Beziehungen</h3>
                            <ListGroup variant="flush" className={appStyles.section}>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
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