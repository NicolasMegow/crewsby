import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"
import appStyles from "../styles/app.module.scss"
import CTA from "../components/cta"

const RessourcenPage = () => {
    return (
    <Layout>
        <Head title="Ressourcen"/>
        <FontAwesomeIcon icon={['fal', 'folder-open']} size="6x" color="#0f62cc" />
        <h1>Ressourcen für bessere Teamarbeit</h1>
        <p>Hier findest du kostenlose Hilfsmittel zur Verbesserung deiner Teamarbeit.</p>
        <ol className={appStyles.posts}>
            <li className={appStyles.post}>
                <Link to="/selbstcheck">
                    <h3>Selbstcheck</h3>
                    <p>Selbsteinschätzung der Professionalität der eigenen Teamarbeit</p>
                </Link>
            </li>
            <li className={appStyles.post}>
                <Link to="/coming-soon">
                    <h3>Grundkurs Teamentwicklung</h3>
                    <p>Einführung in die gruppendynamischen Prozesse der Teamentwicklung</p>
                </Link>
            </li>
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
        <CTA/>
    </Layout>
    )
}

export default RessourcenPage