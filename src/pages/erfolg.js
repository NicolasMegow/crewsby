import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Head from "../components/head"

const ErfolgPage = () => {
    return (
        <Layout>
            <Head title="Erfolg" />
            <Container>
                <Row style={{ marginTop: "3rem" }}>
                    <Col>
                        <FontAwesomeIcon icon={['fal', 'glass-cheers']} size="6x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h1>Weiter so!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/tutorials"><Button variant="primary">Nächstes Tutorial</Button></Link>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ErfolgPage