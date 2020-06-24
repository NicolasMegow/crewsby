import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"

import TeamNavData from "../content/team-nav.yaml"
import IndNavData from "../content/ind-nav.yaml"


const TutorialsPage = () => {
    return (
        <Layout>
            <Head title="Trainingscenter" />
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="mode" defaultActiveKey="ind">
                            <p style={{marginBottom:"0.5rem"}}>Lernmodus:</p>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="ind" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'user']} fixedWidth />{' '} SOLO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="team" className={appStyles.pill}><FontAwesomeIcon icon={['fal', 'users']} fixedWidth />{' '} TEAM</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ marginLeft: "auto" }}>
                                    <p style={{marginBottom:"0", fontSize:"0.8rem"}}>
                                        SOLO: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                    | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}  
                                    | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '} </p>
                                    <p style={{marginBottom:"0", fontSize:"0.8rem"}}>
                                        TEAM: 0 <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />{' '}
                                    | 0 <FontAwesomeIcon icon={['fas', 'thumbs-up']} fixedWidth />{' '}  
                                    | 0 <FontAwesomeIcon icon={['fas', 'brain']} fixedWidth />{' '} </p>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="ind" className={appStyles.tab}>
                                    <Tab.Container id="goal-solo" defaultActiveKey="rel">
                                    <p style={{marginBottom:"0.5rem"}}>Ziel:</p>
                                        <Nav variant="pills">
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
                                                        <p style={{marginBottom:"0.5rem"}}>Thema:</p>
                                                        </Col></Row>
                                                        <Row>
                                                            {item.themen.map((subItem) => {
                                                                if (subItem.urlstart === 'coming-soon') {
                                                                    return (
                                                                <Col sm={4} className={appStyles.tile}>
                                                                    <Link className={appStyles.disabledLink}>
                                                                        <h3>{subItem.thema}</h3>
                                                                        <p style={{fontStyle: "italic" , fontSize: ".5rem"}}>coming soon</p>
                                                                    </Link>
                                                                </Col>)
                                                                } else {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link to={`/tutorials/${subItem.urlstart}`}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <FontAwesomeIcon icon={item.icon2} fixedWidth />
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
                                    <p style={{marginBottom:"0.5rem"}}>Ziel:</p>
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
                                                            <p style={{marginBottom:"0.5rem"}}>Thema:</p>
                                                        </Col></Row>
                                                        <Row>
                                                            {item.themen.map((subItem) => {
                                                                if (subItem.urlstart === 'coming-soon') {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link className={appStyles.disabledLink}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <p style={{fontStyle: "italic", fontSize: ".5rem"}}>coming soon</p>
                                                                            </Link>
                                                                        </Col>)
                                                                } else {
                                                                    return (
                                                                        <Col sm={4} className={appStyles.tile}>
                                                                            <Link to={`/tutorials/${subItem.urlstart}`}>
                                                                                <h3>{subItem.thema}</h3>
                                                                                <FontAwesomeIcon icon={item.icon2} fixedWidth />
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
        </Layout>
    )
}

export default TutorialsPage