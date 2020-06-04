import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const PreisePage = () => {
    return (
    <Layout>
        <Head title="Preise"/>
        <h1>Gutes Teamgefühl ist unbezahlbar.</h1>
        <p>Wir beiten Ihnen zwei Optionen in Ihr Teamgefühl zu investieren:<br></br> </p> 
        <h2>Team</h2>
        <p>Zugang zu allen Übungen 
            für professionelle Teamplayer und Teams.<br></br>
            Wir empfehlen nicht mehr als 8-10 Mitgleider pro Team.
        </p>
        <p>49€ pro Team/Monat</p>
        <p><Link to="/app-start">Jetzt buchen</Link></p>
        <h2>Team of Teams</h2>
        <p>Zugang zu allen Übungen 
            für alle Mitarbeiter des Unternehmens.<br></br>
            Einbindung in das Intranet mit Single-Sign-On(SSO).<br></br>
            Zugang zur Questmaster-Community mit Tutorials, Templates und Checklisten zur Durchführung unternehmensinterner Quests.
        </p>
        <p>29€ pro Mitarbeiter/Jahr</p>
        <p><Link to="/app-start">Mehr erfahren</Link></p>
    </Layout>
    )
}

export default PreisePage