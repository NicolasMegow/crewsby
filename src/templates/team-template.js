import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/layout/loading"
import Login from "../components/layout/login"
import faunadb, { query as q } from "faunadb"

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
                part
                part
                date
                version
                next
            }
            body
        }
    }
`


const TeamTemplate = (props) => {
    const { isAuthenticated, loading, user } = useAuth0()
{/*    const fauna_secret = user["https://fauna.com/id/secret"];
    async function updateUserLevel() {
        const client = new faunadb.Client({ secret: fauna_secret });
        const response =  await client.query(
            q.Update(
            q.Ref(q.Match(q.Index('profile_by_email'), user.email)),
            { data: { "level" : {"test": 1} } },
            )
            ).then((ret) => console.log(ret))
    } */}
    if (loading) {
        return (<><Loading /></>)
    }

    const skill = props.data.mdx.frontmatter.skill
    const level = props.data.mdx.frontmatter.level
    const part = props.data.mdx.frontmatter.part
    const next = props.data.mdx.frontmatter.next
    const type = props.data.mdx.fields.trainingType

    return (
        <MDXProvider components={shortcodes}>
        <Layout>
            <Head title={skill} />
            {isAuthenticated ? (
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
                    <TButton part={part} next={next} type={type}/>
                </Container>
            ) : (
                <Login />
                )}
        </Layout>
        </MDXProvider>
    )
}

export default TeamTemplate