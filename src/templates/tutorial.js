import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"
import Sidebar from '../components/sidebar'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'

import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TeamNavData from "../content/team-nav.yaml"
import IndNavData from "../content/ind-nav.yaml"



export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                type
                date
                version
                next
            }
            html
        }
    }
`

const Tutorial = (props) => {
    return (
        <Container fluid>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <Header />
            <Row>
                <Col md lg={3} id="sidebar-wrapper" className={layoutStyles.sidebar}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={props.data.markdownRemark.frontmatter.type}>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="ind"><FontAwesomeIcon icon={['fal', 'user']} fixedWidth /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="team"><FontAwesomeIcon icon={['fal', 'users']} fixedWidth /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="ind" className={layoutStyles.sidebarTab}>
                                <Sidebar items={IndNavData.content} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="team" className={layoutStyles.sidebarTab}>
                                <Sidebar items={TeamNavData.content} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
                <Col md lg={9} id="page-content-wrapper">
                    <div className={layoutStyles.containerApp}>
                        <div className={layoutStyles.content}>
                            <p><Link to="/tutorials">Zurück</Link></p>
                            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                            <p style={{marginTop:"2rem"}}><Link to={`/tutorials/${props.data.markdownRemark.frontmatter.next}`} >Weiter trainieren</Link></p>
                            <p style={{fontSize:".6rem"}}>{props.data.markdownRemark.frontmatter.version} | {props.data.markdownRemark.frontmatter.date}</p>
                        </div>
                    </div>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}

export default Tutorial