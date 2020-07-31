import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import Hint from "../components/app/hint"
import Emoji from "../components/shared/emoji"


const ErfolgPage = () => {
    const { isAuthenticated, user } = useAuth0()
    return (
        <Layout>
            <Head title="Erfolg" />
                <Container style={{ maxWidth: "700px", marginLeft: "0" }}>
                    <Row style={{ marginTop: "3rem" }}>
                        <Col>
                            <span style={{fontSize:"4rem"}}>
                                <Emoji symbol="🙌" label="success"/>{' '}
                                <Emoji symbol="🎉" label="party"/>{' '}
                                <Emoji symbol="🎈" label="balloon"/>
                            </span>
                            {isAuthenticated ? (
                            <h1 style={{fontSize: "2rem", marginTop:"4rem"}}>Super, {user.nickname}</h1>
                            ):(null)}
                            <h3>Weiter so!</h3>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"4rem"}}>
                        <Hint variant='success' icon={['fas','shoe-prints']}
                            line="Das war der erste Schritt. Verbesserung entsteht in vielen kleinen Schritten. Vertraut dem Prozess."
                        />
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/meine-trainings" className="btn btn-primary btn-lg">Nächstes Training auswählen</Link>
                        </Col>
                    </Row>
                </Container>
        </Layout>
    )
}

export default ErfolgPage