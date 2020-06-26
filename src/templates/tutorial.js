import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import { Container, Row, Col, Button } from 'react-bootstrap'
import { login, isAuthenticated, getProfile } from "../utils/auth"


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
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
      }
    
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <Container>
                <Row>
                    <Col>
                        <Link to="/tutorials">Übersicht</Link>
                        <p style={{float:"right"}}>{props.data.markdownRemark.frontmatter.part}</p>
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
                        <p style={{ marginTop: "2rem" }}>
                            {props.data.markdownRemark.frontmatter.part === "Reflexion" &&
                                <Link to={`../erfolg`} ><Button variant="primary">Tutorial abschliessen</Button></Link>
                            }
                            {props.data.markdownRemark.frontmatter.part === "Info" &&
                                <Link to={`/tutorials/${props.data.markdownRemark.frontmatter.next}`}><Button variant="primary">Aufgabe starten</Button></Link>
                            }
                            {props.data.markdownRemark.frontmatter.part === "Aufgabe" &&
                                <Link to={`/tutorials/${props.data.markdownRemark.frontmatter.next}`}><Button variant="primary">Reflexion starten</Button></Link>
                            }
                        </p>
                        <hr></hr>
                        <p style={{ fontSize: ".5rem" }}>{props.data.markdownRemark.frontmatter.version} | {props.data.markdownRemark.frontmatter.date}</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Tutorial