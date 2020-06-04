import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"

const AppPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {edges{node{frontmatter{title date} timeToRead fields{slug}}}}
      }
    `)

    return (
        <Layout>
            <Head title="App"/>
            <h1>Liste der Übungen</h1>
            <p>Jede Übung dauert nur 30 Minuten.</p>
            <ol className={appStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={appStyles.post}>
                            <Link to={`/app/${edge.node.fields.slug}`}><h2>{edge.node.frontmatter.title}</h2>
                            <p></p></Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default AppPage