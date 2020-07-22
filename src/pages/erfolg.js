import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import Layout from "../components/layout"
import Head from "../components/head"
import Hint from "../components/hint"
import Emoji from "../components/emoji"


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
                            <span style={{fontSize:"4rem"}}>
                                <Emoji symbol="🙌" label="success"/>{' '}
                                <Emoji symbol="🎉" label="party"/>{' '}
                                <Emoji symbol="🎈" label="balloon"/>
                            </span>
                            <h1 style={{fontSize: "2rem", marginTop:"4rem"}}>Super, {user.nickname}</h1>
                            <h3>Weiter so!</h3>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"4rem"}}>
                        <Hint variant='success' icon={['fas','shoe-prints']}
                            line1="Das war der erste Schritt. Verbesserung entsteht in vielen kleinen Schritten." 
                            line2="Vertraut dem Prozess."
                        />
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/deine-trainings" className="btn btn-primary btn-lg">Nächstes Tutorial auswählen</Link>
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