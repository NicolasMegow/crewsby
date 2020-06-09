import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Das ging ins Leere</h1>
            <p><Link to="/">Zurück zur Startseite</Link></p>
        </Layout>
    )
}

export default NotFound