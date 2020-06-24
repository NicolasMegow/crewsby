import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

const PreisePage = () => {
    return (
        <Layout>
            <Head title="Preise" />
            <Container>
                <Row>
                    <Col>
                    <FontAwesomeIcon icon={['fal', 'balance-scale-left']} size="6x" color="#0f62cc" />
                        <h1>Investitionen in Teamarbeit rechnen sich.</h1>
                        <p>Bessere Teamarbeit steigert die Produktivität und Kreativität. 
                            Auch die Identifikation mit dem Unternehmen wächst.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"4rem"}}>
                    <Col sm>
                        <h2>Team-Flatrate</h2>
                        <p>Für 1-8 Teamriesen<br></br>
                        Der Standard für schnelle Teams</p>
                        <p><h2>89 €</h2> pro Team/Monat</p>
                        <Link to="/tutorials"><Button>Jetzt buchen</Button></Link>
                    </Col>
                    <Col sm>
                        <h2>Enterprise-Flatrate</h2>
                        <p>Für 9-100.000 Teamriesen<br></br>
                        Ideal für Abteilungen & Unternehmen<br></br>
                        + Enterprise-Features</p>
                        <p><h2>89 €</h2> pro Mitarbeiter/Jahr</p>
                        <p><Link to="/enterprise">Mehr erfahren</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PreisePage