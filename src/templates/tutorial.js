import React from "react"
import { Link, graphql } from "gatsby"

import LayoutApp from "../components/layout-app"
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

const Tutorial = (props) => {
    return (
        <LayoutApp>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <p><Link to="/tutorials">Zurück</Link></p>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
            <p>v.{props.data.markdownRemark.frontmatter.version} | {props.data.markdownRemark.frontmatter.date}</p>
        </LayoutApp>
    )
}

export default Tutorial