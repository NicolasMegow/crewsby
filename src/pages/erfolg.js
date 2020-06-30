import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import Layout from "../components/layout"
import Head from "../components/head"

const ErfolgPage = () => {
    const { isAuthenticated, loading, user } = useAuth0()
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <Layout>
            <Head title="Erfolg" />
            {isAuthenticated ? (
                <Container>
                    <Row style={{ marginTop: "3rem" }}>
                        <Col>
                            <FontAwesomeIcon icon={['fal', 'glass-cheers']} size="6x" color="#0f62cc" style={{ marginBottom: "1rem" }} />
                            <h1>Super, {user.name} :)</h1>
                            <h3>Weiter so!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Alert variant='success'>
                                <h2>Verbesserung entsteht in vielen kleinen Schritten.</h2>
                                <h3>Vertraut dem Prozess.</h3>
                                <p style={{textAlign:"right"}}>
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="down-4" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="down-2" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="down-3" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="down-1" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="up-2" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="up-4" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="up-2" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="down-1" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="up-4" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="up-6" /> {'  '}
                                    <FontAwesomeIcon icon={['fas', 'shoe-prints']} fixedWidth transform="up-8" /> {'  '}
                                </p>
                            </Alert>
                            <Link to="/tutorials"><Button variant="primary">Nächstes Tutorial auswählen</Button></Link>
                        </Col>
                    </Row>
                </Container>
            ) : (
                    <Container>
                        <Row>
                            <Col>
                                <h1>Bitte erst einloggen ;)</h1>
                            </Col>
                        </Row>
                    </Container>
                )}
        </Layout>
    )
}

export default ErfolgPage