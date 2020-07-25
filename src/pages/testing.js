import React, { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import faunadb, { query as q } from "faunadb"


const TestingPage = () => {
    const { isAuthenticated, loading } = useAuth0();
    const [data, setData] = useState([])
    useEffect(() => {
        async function getUserProfile() {
            const fauna_secret = "fnEDwLOKfoACBQO_BGPL8AYHqOvFRdR_2SFlWucLsbSLqr5w-QU";
            const client = new faunadb.Client({ secret: fauna_secret });
            const response =  await client.query(
                q.Select( ["data","name"] , q.Get(q.Match(q.Index('profile_by_email'),'nicolas.megow@strategiepark.de')))
                );
            const newData = await response;
            setData(newData);
        }
        getUserProfile()
        
    }, [])

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
                            <p>Läuft</p>
                            <p>{data}</p>
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
    );
}

export default TestingPage

