import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                type
                date
                version
            }
            html
        }
    }
`

const Uebung = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <p><Link to="/app-start">Zurück</Link></p>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>Für {props.data.markdownRemark.frontmatter.type}</p>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
            <p>v.{props.data.markdownRemark.frontmatter.version} | {props.data.markdownRemark.frontmatter.date}</p>
        </Layout>
    )
}

export default Uebung