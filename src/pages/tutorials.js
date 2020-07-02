import React from "react"
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import TutMap from "../components/tutmap"
import Hint from "../components/hint"

import TeamNavData from "../content/team-nav.yaml"
import IndNavData from "../content/ind-nav.yaml"


const TutorialPage = () => {
    const { isAuthenticated, loading } = useAuth0()
    if (loading) {
        return <Layout>
            <Head title="Tutorial-Navigator" />
            <Container>
                <Row>
                    <Col>
                        <h1>Loading...</h1>
                    </Col>
                </Row>
            </Container>
        </Layout>
    }
    return (
        <Layout>
            <Head title="Tutorial-Navigator" />
            {isAuthenticated ? (
                <Container>
                    <Row>
                        <Col>
                            <h1>Tutorial-Navigator</h1>
                            <h3>Deine Punkte bisher:</h3>
                            <p style={{ marginBottom: "0" }}>
                                <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} fixedWidth />{' '}
                                SOLO: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} fixedWidth />{' '}
                                TEAM: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '}
                            </p>
                        </Col>
                    </Row>
                    <Tab.Container id="mode" defaultActiveKey="team">
                        <Row className={appStyles.row}>
                            <Col>
                                <Row>
                                    <Col>
                                        <p className={appStyles.info1}>MODUS:</p>
                                        <p className={appStyles.info2}>Trainierst du alleine oder mit deinem Team?</p>
                                    </Col>
                                    <Hint variant='info'
                                        text="Für die Team-Tutorials sollten alle Teammitglieder da sein ;)
                                            <br></br>Aktuell sind die Team-Tutorials auf physische Präsenz ausgelegt."
                                    /></Row>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="ind" className={appStyles.pill}>SOLO</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="team" className={appStyles.pill}>TEAM</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="ind" className={appStyles.tab}>
                                <Tab.Container id="goal-solo" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <p className={appStyles.info1}>ZIEL:</p>
                                                    <p className={appStyles.info2}>Welchen Beitrag möchtest du leisten?</p>
                                                </Col>
                                                <Hint variant='info'
                                                    text="Du brauchst nur Stift und Block für die Tutorials.
                                                        <br></br>Wähle das interessanteste Thema aus, oder arbeite dich von links nach rechts durch."
                                                /></Row>
                                            <Nav variant="pills" justify="true">
                                                {IndNavData.content.map((item) => (
                                                    <Nav.Item key={item.key}>
                                                        <Nav.Link eventKey={item.key} className={appStyles.pill}>
                                                            <FontAwesomeIcon icon={item.icon} fixedWidth />{'  '} {item.category}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Col>
                                    </Row>
                                    <Tab.Content>
                                        <TutMap data={IndNavData.content} />
                                    </Tab.Content>
                                </Tab.Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="team" className={appStyles.tab}>
                                <Tab.Container id="goal-team" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <p className={appStyles.info1}>ZIEL:</p>
                                                    <p className={appStyles.info2}>Woran wollt ihr arbeiten?</p>
                                                </Col>
                                                <Hint variant='info'
                                                    text="Ihr braucht nur Stift und Block für die Tutorials.
                                            <br></br>Wählt das interessanteste Thema aus, oder arbeitet  euch von links nach rechts durch."
                                                />
                                            </Row>
                                            <Nav variant="pills" justify="true">
                                                {TeamNavData.content.map((item) => (
                                                    <Nav.Item key={item.key}>
                                                        <Nav.Link eventKey={item.key} className={appStyles.pill}>
                                                            <FontAwesomeIcon icon={item.icon} fixedWidth />{'  '} {item.category}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Col>
                                    </Row>
                                    <Tab.Content>
                                        <TutMap data={TeamNavData.content} />
                                    </Tab.Content>
                                </Tab.Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            ) : (
                    <Container>
                        <Row>
                            <Col>
                                <h1>Bitte erst einloggen ;)</h1>
                            </Col>
                        </Row>
                    </Container>
                )}
        </Layout>
    )
}

export default TutorialPage