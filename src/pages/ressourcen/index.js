import React from "react"
import { Container, Row, Tab, Nav, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../components/layout/layout"
import SEO from "../../components/shared/seo"

const RessourcenPage = () => {
    return (
        <Layout>
            <SEO title="Selbstcheck" />
            <Container>
                <Row>
                    <h1>Hello Test</h1>
                    <p>Möchtest du dich oder dein Team einschätzen?</p>
                </Row>
            </Container>
        </Layout>
    )
}

export default RessourcenPage