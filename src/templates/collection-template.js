import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import ÜbungInfo from "../components/app/uebung-info"
import SharingButtons from "../components/shared/sharing-buttons"

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
            excerpt
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

const CollectionTemplate = ({ data, props, location }) => {
    const { uebungType, method } = data.mdx.fields;
    const url = location.href ? location.href : '';
    const { skill, levels, job } = data.mdx.frontmatter;

    return (
        <MDXProvider>
            <Layout>
                <SEO title={skill} pathname={`/${uebungType}/${method}`} description={data.mdx.excerpt} />
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
                    <SharingButtons link={url} message={`${levels} Übungen, mit denen ihr ${job} könnt`} />
                </Container>
            </Layout>
        </MDXProvider>
    );
}

export default CollectionTemplate
