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
                            <h1 style={{fontSize: "2rem"}}>Tutorial-Navigator</h1>
                        </Col>
                    </Row>
                    <Tab.Container id="mode" defaultActiveKey="team-vorort">
                        <Row className={appStyles.row}>
                            <Col>
                                <Row>
                                    <Col>
                                        <p className={appStyles.info1}>MODUS:</p>
                                        <p className={appStyles.info2}>Trainierst du alleine, mit deinem Team vor Ort oder remote?</p>
                                    </Col>
                                    <Hint variant='info' icon={['fas','info-circle']}
                                        line1="Für die Team-Tutorials sollten alle Teammitglieder da sein."
                                        line2="Vor Ort- & Remote-Tutorials sind auf die jeweiligen Interaktionsmöglichkeiten optimiert."
                                    /></Row>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="solo" className={appStyles.pill}>SOLO</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="team-vorort" className={appStyles.pill}>TEAM - VOR ORT</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="team-remote" className={appStyles.pill}>TEAM - REMOTE</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="solo" className={appStyles.tab}>
                                <Tab.Container id="goal-solo" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <Row>
                                                <Col sm>
                                                    <p className={appStyles.info1}>ZIEL:</p>
                                                    <p className={appStyles.info2}>Welchen Beitrag möchtest du leisten?</p>
                                                </Col>
                                                <Col sm>
                                                    <p>
                                                        <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} fixedWidth />{' '}
                                                        Solo-Punkte: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                                        | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                                        | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '}
                                                    </p>
                                                </Col>
                                                <Hint variant='info' icon={['fas','info-circle']}
                                                    line1="Du brauchst nur Stift und Block für die Tutorials."
                                                    line2="Wähle das interessanteste Thema aus oder arbeite dich von links nach rechts durch."
                                                /></Row>
                                            <Nav variant="pills">
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
                            <Tab.Pane eventKey="team-vorort" className={appStyles.tab}>
                                <Tab.Container id="goal-team-vorort" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <Row>
                                                <Col sm>
                                                    <p className={appStyles.info1}>ZIEL:</p>
                                                    <p className={appStyles.info2}>Woran wollt ihr arbeiten?</p>
                                                </Col>
                                                <Col sm>
                                                    <p>
                                                        <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} fixedWidth />{' '}
                                                        Team-Punkte: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                                        | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                                        | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '}
                                                    </p>
                                                </Col>
                                                <Hint variant='info' icon={['fas','info-circle']}
                                                    line1="Ihr braucht nur Stift und Block für die Tutorials."
                                                    line2="Wählt das interessanteste Thema aus oder arbeitet  euch von links nach rechts durch."
                                                />
                                            </Row>
                                            <Nav variant="pills">
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
                            <Tab.Pane eventKey="team-remote" className={appStyles.tab}>
                                <Tab.Container id="goal-team-remote" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <Row>
                                                <Col sm>
                                                    <p className={appStyles.info1}>ZIEL:</p>
                                                    <p className={appStyles.info2}>Woran wollt ihr arbeiten?</p>
                                                </Col>
                                                <Col sm>
                                                    <p>
                                                        <FontAwesomeIcon icon={['fas', 'arrow-circle-right']} fixedWidth />{' '}
                                                        Team-Punkte: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                                        | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                                        | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '}
                                                    </p>
                                                </Col>
                                                <Hint variant='info' icon={['fas','info-circle']}
                                                    line1="Ihr braucht nur Stift und Block für die Tutorials."
                                                    line2="Wählt das interessanteste Thema aus oder arbeitet  euch von links nach rechts durch."
                                                />
                                            </Row>
                                            <Nav variant="pills">
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
                                <h1>Bitte erst einloggen.</h1>
                            </Col>
                        </Row>
                    </Container>
                )}
        </Layout>
    )
}

export default TutorialPage