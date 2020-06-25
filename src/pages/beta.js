import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"


const BetaPage = () => {
    return (
        <Layout>
            <Head title="Beta Test" />
            <Container>
                <Row>
                    <Col>
                        <h1>Wir sind noch im Beta-Test.</h1>
                        <h2>Vielen Dank für Ihr Interesse!</h2>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default BetaPage