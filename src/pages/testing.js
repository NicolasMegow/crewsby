import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"

import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"
import faunadb, { query as q } from "faunadb"

async function getUserProfile() {
    const fauna_secret = "fnEDwLOKfoACBQO_BGPL8AYHqOvFRdR_2SFlWucLsbSLqr5w-QU";
    const client = new faunadb.Client({ secret: fauna_secret });
    let response =  await client.query(
            q.Select(["data","name"], q.Get(q.Ref(q.Collection('profile'), "270379930851738119")))
        )
    return response
}

function storeCurrent(currentItem) {
    window.localStorage.setItem('currentProfile', JSON.stringify(currentItem));
}

{/*FAILING       
.then((ret) => console.log(ret))
Select( ["data","name"] , Get(Match(Index('profile_by_email'),'nicolas.megow@strategiepark.de')))
*/}

const TestingPage = () => {
    const { isAuthenticated, loading, user } = useAuth0();
    const name = getUserProfile()
    const profile = storeCurrent(name)



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
                            <p>{profile}</p>
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

