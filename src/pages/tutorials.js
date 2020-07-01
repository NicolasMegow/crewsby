import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import TeamNavData from "../content/team-nav.yaml"
import IndNavData from "../content/ind-nav.yaml"


const TutorialPage = () => {
    const { isAuthenticated, loading, user } = useAuth0()
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
                            <p>Moin {user.name}</p>
                        </Col>
                    </Row>
                    <Tab.Container id="mode" defaultActiveKey="team">
                        <Row className={appStyles.row}>
                            <Col>
                                <p className={appStyles.info1}>MODUS:</p>
                                <p className={appStyles.info2}>Trainierst du alleine oder mit deinem Team?</p>
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
                            </Col>
                        </Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="ind" className={appStyles.tab}>
                                <Tab.Container id="goal-solo" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <p className={appStyles.info1}>ZIEL:</p>
                                            <p className={appStyles.info2}>Welchen Beitrag möchtest du leisten?</p>
                                            <Nav variant="pills" justify="true">
                                                {IndNavData.content.map((item) => (
                                                    <Nav.Item key={item.key}>
                                                        <Nav.Link eventKey={item.key} className={appStyles.pill}><FontAwesomeIcon icon={item.icon} fixedWidth />{'  '} {item.category}</Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Col>
                                    </Row>
                                    <Tab.Content>
                                        {IndNavData.content.map((item) => {
                                            return (
                                                <Tab.Pane eventKey={item.key} key={item.key} className={appStyles.tab}>
                                                    <Row className={appStyles.row}>
                                                        <Col>
                                                            <Row><Col>
                                                                <p className={appStyles.info1}>THEMA:</p>
                                                                <p className={appStyles.info2}>Was interessiert dich genau?</p>
                                                            </Col></Row>
                                                            <Row>
                                                                {item.themen.map((subItem) => {
                                                                    if (subItem.urlstart === 'coming-soon') {
                                                                        return (
                                                                            <Col sm={6} md={4} className={appStyles.tile} key={subItem.thema}>
                                                                                <div className={appStyles.disabledLink}>
                                                                                    <h3>{subItem.thema}</h3>
                                                                                    <Row>
                                                                                        <Col xs={7}>
                                                                                            <p style={{fontSize: ".8rem" }}>coming soon</p>
                                                                                        </Col>
                                                                                        <Col xs={5}>
                                                                                            <FontAwesomeIcon icon={subItem.icon} size="3x" style={{ float: "right" }} color="#C8CBD0" />
                                                                                        </Col>
                                                                                    </Row>
                                                                                </div>
                                                                            </Col>)
                                                                    } else {
                                                                        return (
                                                                            <Col sm={6} md={4} className={appStyles.tile} key={subItem.thema}>
                                                                                <Link to={`/tutorials/${subItem.urlstart}`}>
                                                                                    <h3>{subItem.thema}</h3>
                                                                                    <Row>
                                                                                        <Col xs={7}>
                                                                                            <p style={{fontSize: ".8rem", marginBottom: "0" }}>{subItem.inhalt}</p>
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
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            )
                                        })}
                                    </Tab.Content>
                                </Tab.Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="team" className={appStyles.tab}>
                                <Tab.Container id="goal-team" defaultActiveKey="rel">
                                    <Row className={appStyles.row}>
                                        <Col>
                                            <p className={appStyles.info1}>ZIEL:</p>
                                            <p className={appStyles.info2}>Woran wollt ihr arbeiten?</p>
                                            <Nav variant="pills"  justify="true">
                                                {TeamNavData.content.map((item) => (
                                                    <Nav.Item key={item.key}>
                                                        <Nav.Link eventKey={item.key} className={appStyles.pill}><FontAwesomeIcon icon={item.icon} fixedWidth />{'  '} {item.category}</Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Col>
                                    </Row>
                                    <Tab.Content>
                                        {TeamNavData.content.map((item) => {
                                            return (
                                                <Tab.Pane eventKey={item.key} key={item.key} className={appStyles.tab}>
                                                    <Row className={appStyles.row}>
                                                        <Col>
                                                            <Row><Col>
                                                                <p className={appStyles.info1}>THEMA:</p>
                                                                <p className={appStyles.info2}>Woran genau?</p>
                                                            </Col></Row>
                                                            <Row>
                                                                {item.themen.map((subItem) => {
                                                                    if (subItem.urlstart === 'coming-soon') {
                                                                        return (
                                                                            <Col sm={6} md={4} className={appStyles.tile} key={subItem.thema}>
                                                                                <div className={appStyles.disabledLink}>
                                                                                    <h3>{subItem.thema}</h3>
                                                                                    <Row>
                                                                                        <Col xs={7}>
                                                                                            <p style={{fontSize: ".8rem" }}>coming soon</p>
                                                                                        </Col>
                                                                                        <Col xs={5}>
                                                                                            <FontAwesomeIcon icon={subItem.icon} size="3x" style={{ float: "right" }} color="#C8CBD0" />
                                                                                        </Col>
                                                                                    </Row>
                                                                                </div>
                                                                            </Col>)
                                                                    } else {
                                                                        return (
                                                                            <Col sm={6} md={4} className={appStyles.tile} key={subItem.thema}>
                                                                                <Link to={`/tutorials/${subItem.urlstart}`}>
                                                                                    <h3>{subItem.thema}</h3>
                                                                                    <Row>
                                                                                        <Col xs={7}>
                                                                                            <p style={{fontSize: ".8rem", marginBottom: "0" }}>{subItem.inhalt}</p>
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
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            )
                                        })}
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