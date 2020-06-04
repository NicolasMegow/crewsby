import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"

const RessourcenPage = () => {
    return (
    <Layout>
        <Head title="Ressourcen"/>
        <h1>Kostenlose Tutorials</h1>
        <p>Ausgewählte Ressourcen für bessere Teamarbeit</p>
        <ol className={appStyles.posts}>
            <li className={appStyles.post}>
                <Link to="/coming-soon">
                    <h3>Tipps zum Kickoff</h3>
                    <p>Checkliste für den gelungenen Start ins Teambuilding</p>
                </Link>
            </li>
            <li className={appStyles.post}>
                <Link to="/coming-soon">
                    <h3>Workshop zum Projektstart</h3>
                    <p>Template für einen Kick-off Workshop</p>
                </Link>
            </li>
            <li className={appStyles.post}>
                <Link to="/coming-soon">
                    <h3>Checkliste für "Ship It"-Days</h3>
                    <p>Tipps und Tricks für gelungene Sprint-Tage</p>
                </Link>
            </li>
        </ol> 
    </Layout>
    )
}

export default RessourcenPage