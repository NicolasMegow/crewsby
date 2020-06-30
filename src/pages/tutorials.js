import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import LayoutApp from "../components/layout_app"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"

import TeamNavData from "../content/team-nav.yaml"
import IndNavData from "../content/ind-nav.yaml"

var styles = {
    info1: {
        marginBottom: "0",
        fontSize: "0.8rem",
        fontWeight: "bold",
    },
    info2: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontSize: "0.8rem",
    },
}

const TutorialPage = () => {
    return (
        <LayoutApp>
            <Head title="Trainingscenter" />
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="mode" defaultActiveKey="team">
                            <p style={styles.info1}>MODUS:</p>
                            <p style={styles.info2}>Lernst du alleine oder mit deinem Team?</p>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="ind" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'user']} fixedWidth />{' '} SOLO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="team" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'users']} fixedWidth />{' '} TEAM</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ marginLeft: "auto" }}>
                                    <p style={{ marginBottom: "0", fontSize: "0.8rem" }}>
                                        SOLO: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                    | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                    | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '} </p>
                                    <p style={{ marginBottom: "0", fontSize: "0.8rem" }}>
                                        TEAM: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                    | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}
                                    | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '} </p>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="ind" className={appStyles.tab}>
                                    <Tab.Container id="goal-solo" defaultActiveKey="rel">
                                        <p style={styles.info1}>ZIEL:</p>
                                        <p style={styles.info2}>Welchen Beitrag möchtest du leisten?</p>
                                        <Nav variant="pills" justify="true">
                                            {IndNavData.content.map((item) => (
                                                <Nav.Item>
                                                    <Nav.Link eventKey={item.key} className={appStyles.pill}><FontAwesomeIcon icon={item.icon} fixedWidth />{'  '} {item.category}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <Tab.Content>
                                            {IndNavData.content.map((item) => {
                                                return (
                                                    <Tab.Pane eventKey={item.key} className={appStyles.tab}>
                                                        <Row><Col>
                                                            <p style={styles.info1}>THEMA:</p>
                                                            <p style={styles.info2}>Was interessiert dich genau?</p>
                                                        </Col></Row>
                                                        <Row>
                                                            {item.themen.map((subItem) => {
                                                                if (subItem.urlstart === 'coming-soon') {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link className={appStyles.disabledLink}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <Row>
                                                                                    <Col xs={7}>
                                                                                        <p style={{ fontStyle: "italic", fontSize: ".5rem" }}>coming soon</p>
                                                                                    </Col>
                                                                                    <Col xs={5}>
                                                                                        <FontAwesomeIcon icon={subItem.icon} size="3x" style={{ float: "right" }} color="#F5F5F5"/>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Link>
                                                                        </Col>)
                                                                } else {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link to={`/tutorials/${subItem.urlstart}`}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <Row>
                                                                                    <Col xs={7}>
                                                                                        <p style={{ fontStyle: "italic", fontSize: ".5rem", marginBottom: "0" }}>{subItem.inhalt}</p>
                                                                                        <FontAwesomeIcon icon={item.icon2} fixedWidth />
                                                                                    </Col>
                                                                                    <Col xs={5}>
                                                                                        <FontAwesomeIcon icon={subItem.icon} size="3x" style={{ float: "right" }} />
                                                                                    </Col>
                                                                                </Row>
                                                                            </Link>
                                                                        </Col>)
                                                                }
                                                            })}
                                                        </Row>
                                                    </Tab.Pane>
                                                )
                                            })}
                                        </Tab.Content>
                                    </Tab.Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="team" className={appStyles.tab}>
                                    <Tab.Container id="goal-team" defaultActiveKey="rel">
                                        <p style={styles.info1}>ZIEL:</p>
                                        <p style={styles.info2}>Woran wollt ihr arbeiten?</p>
                                        <Nav variant="pills">
                                            {TeamNavData.content.map((item) => (
                                                <Nav.Item>
                                                    <Nav.Link eventKey={item.key} className={appStyles.pill}><FontAwesomeIcon icon={item.icon} fixedWidth />{'  '} {item.category}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <Tab.Content>
                                            {TeamNavData.content.map((item) => {
                                                return (
                                                    <Tab.Pane eventKey={item.key} className={appStyles.tab}>
                                                        <Row><Col>
                                                            <p style={styles.info1}>THEMA:</p>
                                                            <p style={styles.info2}>Woran genau?</p>
                                                        </Col></Row>
                                                        <Row>
                                                            {item.themen.map((subItem) => {
                                                                if (subItem.urlstart === 'coming-soon') {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link className={appStyles.disabledLink}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <Row>
                                                                                    <Col xs={7}>
                                                                                        <p style={{ fontStyle: "italic", fontSize: ".5rem" }}>coming soon</p>
                                                                                    </Col>
                                                                                    <Col xs={5}>
                                                                                        <FontAwesomeIcon icon={subItem.icon} size="3x" style={{ float: "right" }} color="#F5F5F5"/>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Link>
                                                                        </Col>)
                                                                } else {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link to={`/tutorials/${subItem.urlstart}`}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <Row>
                                                                                    <Col xs={7}>
                                                                                        <p style={{ fontStyle: "italic", fontSize: ".5rem", marginBottom: "0" }}>{subItem.inhalt}</p>
                                                                                        <FontAwesomeIcon icon={item.icon2} fixedWidth />
                                                                                    </Col>
                                                                                    <Col xs={5}>
                                                                                        <FontAwesomeIcon icon={subItem.icon} size="3x" style={{ float: "right" }} />
                                                                                    </Col>
                                                                                </Row>
                                                                            </Link>
                                                                        </Col>)
                                                                }
                                                            }
                                                            )}
                                                        </Row>
                                                    </Tab.Pane>
                                                )
                                            })}
                                        </Tab.Content>
                                    </Tab.Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </LayoutApp>
    )
}

export default TutorialPage