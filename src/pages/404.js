import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404" />
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