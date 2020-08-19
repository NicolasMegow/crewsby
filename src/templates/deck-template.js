import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import Loading from "../components/app/loading"
import CTA from "../components/layout/cta"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "katex/dist/katex.min.css"

import Hint from "../components/app/hint"
import Deck from "../components/app/deck"
import Emoji from "../components/shared/emoji"

const components = {
    wrapper: ({ children, ...props }) => {
        const arr = React.Children.toArray(children)
        const splits = []
        const slides = []
        arr.forEach((child, i) => {
            const {
                mdxType
            } = child.props
            if (mdxType === 'hr') splits.push(i)
        })
        let previousSplit = 0
        splits.forEach(i => {
            const children = [...arr.slice(previousSplit, i)]
            slides.push(children)
            previousSplit = i + 1
        })

        slides.push([...arr.slice(previousSplit)])

        return <Deck {...props} slides={slides} length={slides.length} />
    },
    Hint, Row, Col, Emoji,
    h1: props => <h1 {...props} />,
    h2: props => <h2 {...props} style={{ color: "#4285F4", fontSize: "2rem", fontWeight: "bold" }} />,
    p: props => <p {...props} style={{ fontSize: "1.4rem" }} />,
}

export const query = graphql`
    query($slug: String!) {
        mdx (fields: { slug: { eq: $slug } }) {
            fields {
                uebungType
                method
                slug
            }
            frontmatter {
                skill
                level
                type
                pass
                date
                version
                next
                excerpt
            }
            body
        }
    }
`

const DeckTemplate = ({ data, props }) => {
    const { isAuthenticated, loading } = useAuth0();
    const { uebungType, method, slug } = data.mdx.fields
    const { skill, level, pass } = data.mdx.frontmatter;
    const type = data.mdx.fields.trainingType

    if (loading) {
        return (
            <><Loading /></>
        )
    }

    return (
        <MDXProvider components={components}>
            <Layout>
                <SEO title={skill} description={data.mdx.frontmatter.excerpt} pathname={`/${uebungType}/${method}/${slug}`} />
                {pass === "premium" ? (!isAuthenticated ? (<CTA />) : (
                    <Container>
                        <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                            <MDXRenderer {...props} skill={skill} type={type} level={level}>{data.mdx.body}</MDXRenderer>
                        </Row>
                    </Container>
                )) : (
                        <Container>
                            <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                                <MDXRenderer {...props} skill={skill} type={type} level={level}>{data.mdx.body}</MDXRenderer>
                            </Row>
                        </Container>
                    )}
            </Layout>
        </MDXProvider >
    );
}

export default DeckTemplate
