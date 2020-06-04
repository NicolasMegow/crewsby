import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ComingSoonPage = () => {
    return (
        <Layout>
            <Head title="Coming soon"/>
            <h1>Bitte noch etwas Geduld</h1>
            <p>Wir arbeiten grade fleißig daran!</p>
            <p><Link to="/ressourcen">Zurück auf Los</Link></p>
        </Layout>
    )
}

export default ComingSoonPage