import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "katex/dist/katex.min.css"
import Hint from "../components/app/hint"
import TButton from "../components/app/trainingbutton"
import TNav from "../components/app/trainingnav"

import { Container, Row, Col } from 'react-bootstrap'



const shortcodes = { Hint, Row, Col }

export const query = graphql`
    query($slug: String!) {
        mdx (fields: { slug: { eq: $slug } }) {
            fields {
                trainingType
            }
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


const SoloTemplate = (props) => {

    const skill = props.data.mdx.frontmatter.skill
    const level = props.data.mdx.frontmatter.level
    const part = props.data.mdx.frontmatter.part
    const next = props.data.mdx.frontmatter.next
    const type = props.data.mdx.fields.trainingType

    return (
        <MDXProvider components={shortcodes}>
        <Layout>
            <Head title={skill} />
                <Container style={{ maxWidth: "720px", marginLeft:"0" }}>
                    <Row style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Col md={8} style={{marginTop:".6rem"}}>
                            <p style={{fontSize:"1rem"}}>{skill} {'\u00BB'} {level} {'\u00BB'}{' '}
                                <span style={{color:"#4285F4"}}>{part}</span>
                            </p>
                        </Col>
                        <Col md={4}>
                            <TNav part={part}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
                        </Col>
                    </Row>
                    <TButton type={type} next={next} part={part}/>
                </Container>
        </Layout>
        </MDXProvider>
    )
}

export default SoloTemplate