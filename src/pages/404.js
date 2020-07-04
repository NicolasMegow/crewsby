import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <Container>
                <Row>
                    <Col>
                        <h1>Das ging ins Leere</h1>
                        <p><Link to="/">Zurück zur Startseite</Link></p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default NotFound