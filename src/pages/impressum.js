import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ImpressumPage = () => {
    return (
    <Layout>
        <Head title="Impressum"/>
        <h1><strong>Impressum</strong></h1>
        <h3>Verantwortlich für sämtliche Inhalte</h3>
        <p>Nicolas Megow</p>
        <h3>Adresse</h3>
        <p>Arndtstrasse 26<br></br>33100 Paderborn</p>
        <h3>Kontakt</h3>
        <p>0049 176 8526 3478</p>
        <p><a href="mailto:info@teamgefuehl.com">info@teamgefuehl.com</a></p>
        <h3>Urheberrecht</h3>
        <p>Als Icons verwenden wir die wunderbaren <a href="https://fontawesome.com/">Font Awesome Icons</a> von Dave Gandy.</p>
        <h3>Online-Streitbeilegung</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br></br><a href="http://ec.europa.eu/consumers/odr">
            http://ec.europa.eu/consumers/odr</a><br></br>Die E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
            an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </Layout>
    )
}

export default ImpressumPage