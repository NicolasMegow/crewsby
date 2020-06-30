import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var styles = {
    tutnav: {
        color: '#677b8c',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    tutnavActive: {
        color: '#0f62cc',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
}

const isActive = (key1, key2) => {
    if (key1 === key2) {
        return styles.tutnavActive
    }
    return styles.tutnav
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                type
                part
                date
                version
                next
            }
            html
        }
    }
`


const Tutorial = (props) => {
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

    const type = props.data.markdownRemark.frontmatter.part
    const next = props.data.markdownRemark.frontmatter.next

    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            {isAuthenticated ? (
                <Container style={{ maxWidth: "700px" }}>
                    <Row>
                        <Col>
                            <Nav style={{ float: "right" }}>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Info", type)}>
                                        <FontAwesomeIcon icon={['fal', 'info-circle']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Aufgabe", type)}>
                                        <FontAwesomeIcon icon={['fal', 'stopwatch']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Reflexion", type)}>
                                        <FontAwesomeIcon icon={['fal', 'question-circle']} />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr></hr>
                            <p style={{ marginTop: "2rem" }}>
                                {type === "Reflexion" &&
                                    <Link to={`/erfolg`} ><Button variant="primary">Tutorial abschliessen</Button></Link>
                                }
                                {type === "Info" &&
                                    <Link to={`/tutorials/${next}`}><Button variant="primary">Aufgabe starten</Button></Link>
                                }
                                {type === "Aufgabe" &&
                                    <Link to={`/tutorials/${next}`}><Button variant="primary">Reflexion starten</Button></Link>
                                }
                            </p>
                        </Col>
                    </Row>
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

export default Tutorial