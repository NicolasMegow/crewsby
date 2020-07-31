import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
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

const SoloTemplate = ({ data }) => {
    const { isAuthenticated, loading, user } = useAuth0();

    const { skill, level, part, next } = data.mdx.frontmatter;
    const type = data.mdx.fields.trainingType

    const updateUserLevel = async () => {
        if (loading || !isAuthenticated) return;
        const fauna_secret = user["https://fauna.com/id/secret"];
        const client = new faunadb.Client({ secret: fauna_secret });
        const docKey = type === 'team-trainings' ? 'punkte_team' : 'punkte_solo';

        await client.query(
            q.Update(
                q.Select(['ref'], q.Get(q.Match(
                    q.Index('profile_by_email'), user.email,
                ))),
                // keine optimale Lösung aber tuts erstmal, was passiert hier:
                // - docKey ist entweder punkte_team oder punkte_solo
                // - anstatt eines array wird ein object mit index keys verwendet (hier default erstmal 1)
                // - level beschreibt dieses tutorial wo einfach eine 1 gesetzt wird
                //   statt level sollte ein slug/id verwendet werden die sich nicht ändert
                // So wird die aktion idempotent
                // Für die Punkte unter mein-account wird gezählt wie viele keys gesetzt sind
                { data: { [docKey]: { 1: { [level]: 1, }}}}
            )
        )
    }

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
                            <MDXRenderer>{data.mdx.body}</MDXRenderer>
                        </Col>
                    </Row>
                    <TButton
                        type={type}
                        next={next}
                        part={part}
                        onClickInfo={part === 'Rückblick' && ( updateUserLevel || undefined )}
                    />
                </Container>
        </Layout>
        </MDXProvider>
    );
}

export default SoloTemplate
