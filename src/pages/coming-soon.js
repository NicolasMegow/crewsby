import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ComingSoonPage = () => {
    return (
        <Layout>
            <Head title="In Arbeit"/>
            <FontAwesomeIcon icon={['fal', 'construction']} size="6x" color="#0f62cc" />
            <h1>Bitte noch etwas Geduld</h1>
            <p>Wir arbeiten grade fleißig daran!</p>
            <p><Link to="/ressourcen">Zurück auf Los</Link></p>
        </Layout>
    )
}

export default ComingSoonPage