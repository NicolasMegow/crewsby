import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"

const AppPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark
        {edges{node{frontmatter{title date type} timeToRead fields{slug}}}}
      }
    `)

    return (
        <Layout>
            <Head title="App" />
            <Container>
                <h1>Liste der Übungen</h1>
                <p>Jede Übung dauert nur 30 Minuten.</p>
                <p>Möchtest du für dich oder im Team trainieren?</p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first"><FontAwesomeIcon icon={['fas', 'user']} fixedWidth/>  Individuell</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><FontAwesomeIcon icon={['fas', 'users']} fixedWidth/>  Im Team</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className={appStyles.tab}>
                            <h2>Beziehungen stärken</h2>
                            <ol className={appStyles.posts}>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Stärken</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Schwächen</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Erwartungen</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Wertschätzung</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Verletzlichkeit</h3></Link></li>
                            </ol>
                            <h2>Prozesse optimieren</h2>
                            <ol className={appStyles.posts}>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Ziele</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Backlogs</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Rollen</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Meetings</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Retrospektiven</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Standards</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Work in Progress</h3></Link></li>
                            </ol>
                            <h2>Fähigkeiten entwickeln</h2>
                            <ol className={appStyles.posts}>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Leistung</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Fragen</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Feedback</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Innovation</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Prototyping</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Dokumentation</h3></Link></li>
                            </ol>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className={appStyles.tab}>
                        <h2>Beziehungen stärken</h2>
                            <ol className={appStyles.posts}>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Vertrauen</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Konflikte</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Rituale</h3></Link></li>
                            </ol>
                            <h2>Prozesse optimieren</h2>
                            <ol className={appStyles.posts}>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Koordination</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Einsatz</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Verantwortung</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Ergebnisorientierung</h3></Link></li>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Müllabfuhr</h3></Link></li>
                            </ol>
                            <h2>Fähigkeiten entwickeln</h2>
                            <ol className={appStyles.posts}>
                                <li className={appStyles.post}><Link to={`/app/`}><h3>Peer-Coaching</h3></Link></li>
                            </ol>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
        </Layout>
    )
}

export default AppPage