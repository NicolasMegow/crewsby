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

import { Container, Row, Col, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const shortcodes = { Hint, WSpace, Row, Col }

var styles = {
    divided: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '10rem',
      },
    divider: {
        flexGrow: '1',
        borderBottom: '1px dashed #DAE4F2',
        margin: '5px',
      },
    tutnav: {
        fontSize: "1rem",
        color: '#ffffff',
        backgroundColor: '#DAE4F2',
        border: '1px solid #DAE4F2',
        borderRadius: '6px',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    tutnavActive: {
        fontSize: "1rem",
        color: '#ffffff',
        backgroundColor: '#4285F4',
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
                skill
                level
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

    const skill = props.data.mdx.frontmatter.skill
    const level = props.data.mdx.frontmatter.level
    const type = props.data.mdx.frontmatter.part
    const next = props.data.mdx.frontmatter.next

    return (
        <MDXProvider components={shortcodes}>
        <Layout>
            <Head title={skill} />
            {isAuthenticated ? (
                <Container style={{ maxWidth: "720px", marginLeft:"0" }}>
                    <Row style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Col md={8} style={{marginTop:".6rem"}}>
                            <p style={{fontSize:"1rem"}}>{skill} {'\u00BB'} {level} {'\u00BB'}{' '}
                                <span style={{color:"#4285F4"}}>{type}</span>
                            </p>
                        </Col>
                        <Col md={4}>
                            <Nav style={styles.divided} className="ml-auto">
                                <Nav.Item>
                                    <Nav.Link style={isActive("Info", type)} as="div">
                                        <FontAwesomeIcon icon={['fas', 'lightbulb']} fixedWidth />
                                    </Nav.Link>
                                </Nav.Item>
                                <span style={styles.divider}></span>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Übung", type)} as="div">
                                        <FontAwesomeIcon icon={['fas', 'stopwatch']} fixedWidth />
                                    </Nav.Link>
                                </Nav.Item>
                                <span style={styles.divider}></span>
                                <Nav.Item>
                                    <Nav.Link style={isActive("Rückblick", type)} as="div">
                                        <FontAwesomeIcon icon={['fas', 'question']} fixedWidth />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                {type === "Rückblick" &&
                                    <Link to={`/erfolg`} className="btn btn-primary btn-lg">Training abschliessen</Link>
                                }
                                {type === "Info" &&
                                    <Link to={`/meine-trainings/${next}`} className="btn btn-primary btn-lg">Übung starten</Link>
                                }
                                {type === "Übung" &&
                                    <Link to={`/meine-trainings/${next}`} className="btn btn-primary btn-lg">Rückblick starten</Link>
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