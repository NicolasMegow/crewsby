import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "../styles/blog.module.scss"

const TeamleitungPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {edges{node{frontmatter{title date} timeToRead fields{slug}}}}
      }
    `)

    return (
        <Layout>
            <Head title="Teamleitung"/>
            <h1>List of Uebungen</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}><h2>{edge.node.frontmatter.title}</h2>
                            <p>Read time {edge.node.timeToRead} Min.</p></Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default TeamleitungPage