import React from "react"
import { Link } from "gatsby"

import LayoutApp from "../components/layout-app"
import Head from "../components/head"

const ComingSoonPage = () => {
    return (
        <LayoutApp>
            <Head title="In Arbeit"/>
            <h1>Bitte noch etwas Geduld</h1>
            <p>Wir arbeiten grade fleißig daran!</p>
            <p><Link to="/ressourcen">Zurück auf Los</Link></p>
        </LayoutApp>
    )
}

export default ComingSoonPage