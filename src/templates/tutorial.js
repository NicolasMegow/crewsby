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
    divided: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '10rem',
      },
    divider: {
        flexGrow: '1',
        borderBottom: '1px dashed #717884',
        margin: '5px',
      },
    tutnav: {
        color: '#717884',
        border: '1px solid #717884',
        borderRadius: '6px',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    tutnavActive: {
        color: '#4285F4',
        border: '1px solid #4285F4',
        borderRadius: '6px',
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
                            <Nav style={styles.divided}>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Info", type)} as="div">
                                        <FontAwesomeIcon icon={['fas', 'lightbulb']} fixedWidth />
                                    </Nav.Link>
                                </Nav.Item>
                                <span style={styles.divider}></span>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Aufgabe", type)} as="div">
                                        <FontAwesomeIcon icon={['fas', 'stopwatch']} fixedWidth />
                                    </Nav.Link>
                                </Nav.Item>
                                <span style={styles.divider}></span>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Reflexion", type)} as="div">
                                        <FontAwesomeIcon icon={['fas', 'question']} fixedWidth />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <p className="mintitle" style={{marginTop:"2rem"}}>{type}</p>
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