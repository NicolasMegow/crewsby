import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import Layout from "../components/layout"
import Head from "../components/head"
import Hint from "../components/hint"

const ErfolgPage = () => {
    const { isAuthenticated, loading, user } = useAuth0()
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <Layout>
            <Head title="Erfolg" />
            {isAuthenticated ? (
                <Container style={{ maxWidth: "700px", marginLeft: "0" }}>
                    <Row style={{ marginTop: "3rem" }}>
                        <Col>
                            <FontAwesomeIcon icon={['fal', 'glass-cheers']} size="6x" color="#4285F4" style={{ marginBottom: "1rem" }} />
                            <h1>Super, {user.name}</h1>
                            <h3>Weiter so!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Hint variant='success' icon={['fas','shoe-prints']}
                            line1="Das war der erste Schritt. Verbesserung entsteht in vielen kleinen Schritten." 
                            line2="Vertraut dem Prozess."
                        />
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/tutorials"><Button variant="primary">Nächstes Tutorial auswählen</Button></Link>
                        </Col>
                    </Row>
                </Container>
            ) : (
                    <Container>
                        <Row>
                            <Col>
                                <h1>Bitte erst einloggen.</h1>
                            </Col>
                        </Row>
                    </Container>
                )}
        </Layout>
    )
}

export default ErfolgPage