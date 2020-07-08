import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "katex/dist/katex.min.css"
import Hint from "../components/hint"
import WSpace from "../components/wspace"

import { Container, Row, Col, Button, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const shortcodes = { Hint, WSpace }

var styles = {
    tutnav: {
        color: '#717884',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    tutnavActive: {
        color: '#4285F4',
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
        mdx (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                type
                part
                date
                version
                next
            }
            body
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

    const title = props.data.mdx.frontmatter.title
    const type = props.data.mdx.frontmatter.part
    const next = props.data.mdx.frontmatter.next

    return (
        <MDXProvider components={shortcodes}>
        <Layout>
            <Head title={title} />
            {isAuthenticated ? (
                <Container style={{ maxWidth: "700px", marginLeft:"0" }}>
                    <Row>
                        <Col>
                            <Nav style={{ float: "right" }}>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Info", type)}>
                                        <FontAwesomeIcon icon={['fas', 'lightbulb']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Aufgabe", type)}>
                                        <FontAwesomeIcon icon={['fas', 'stopwatch']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Reflexion", type)}>
                                        <FontAwesomeIcon icon={['fas', 'question']} />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 style={{fontSize: "2rem"}}>{title}</h1>
                            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
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
        </MDXProvider>
    )
}

export default Tutorial