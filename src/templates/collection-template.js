import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import ÜbungInfo from "../components/app/uebung-info"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
    query($slug: String!, $uebungType: String!, $method: String! ) {
        mdx (fields: { slug: { eq: $slug } method: {eq: $method } uebungType: {eq: $uebungType } }) {
            fields {
                uebungType
                method
            }
            frontmatter {
                job
                skill
                levels
                category
                pass
                icon
            }
            body
        }
        allMdx (filter: { fields: { slug: { ne: $slug } method: { eq: $method } uebungType: {eq: $uebungType } } }, 
            sort: {fields:[frontmatter___rank], order: ASC})
        {
            edges {
              node {
                fields {
                  slug
                  uebungType
                  method
                }
                frontmatter {
                  skill
                  level
                  emojis
                  excerpt
                }
              }
            }
          }
    }
`

const CollectionTemplate = ({ data, props }) => {

    const { skill, levels, job } = data.mdx.frontmatter;

    return (
        <MDXProvider>
            <Layout>
                <Head title={skill} />
                <Container>
                    <Row>
                        <Col>
                            <h1>{job}</h1>
                            <h2>{skill}<small> • Level: 0 / {levels}</small></h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                        <Col>
                            <MDXRenderer {...props}>{data.mdx.body}</MDXRenderer>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {data.allMdx.edges.map((edge, i) => {
                                return (
                                    <ÜbungInfo key={i} edge={edge} />
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </MDXProvider>
    );
}

export default CollectionTemplate
