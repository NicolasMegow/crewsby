import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import CTA from "../components/cta"

const UeberUnsPage = () => {
    return (
        <Layout>
            <Head title="Über uns" />
            <Container>
                <Row>
                    <Col>
                        <h1>Wir <FontAwesomeIcon icon={['fas', 'heart']} fixedWidth color="#D64045" /> Teams.</h1>
                        <h2>Wir arbeiten alle in Teams. Arbeit ist ein wichtiger Teil des Lebens. Und das Leben ist zu kurz für Probleme im Team.</h2>
                        <p>Gute Zusammenarbeit im Team ist selten ein Produkt aus Glück und Hoffnung. Gelegentliche Events reichen selten aus, um das Teamgefühl nachhaltig zu verbessern. Wir wissen, dass ein gutes Teamgefühl Zeit und Aufmerksamkeit braucht. Da beides häufig knapp ist, entwickeln wir Debugger als Ergänzung zu traditionellem Teambuilding.</p>
                        <h3>Wir sind professionelle Business Coaches und haben bereits hunderte Teams gecoached. </h3>
                        <h3>Wir glauben, dass jedes Team ein gutes Teamgefühl verdient. </h3>
                        <p>Deshalb arbeiten wir unermüdlich daran euch einfachen und günstigen Zugang zu genau den richtigen Impulsen zu geben.</p>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'chart-network']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Selbstorganisiert</h3>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'laptop-house']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Remote</h3>
                    </Col>
                    <Col sm>
                        <FontAwesomeIcon icon={['fal', 'leaf-heart']} size="2x" color="#0f62cc" style={{marginBottom:"1rem"}}/>
                        <h3>Klimaneutral</h3>
                    </Col>
                </Row>
            </Container>
            <CTA />
        </Layout>
    )
}

export default UeberUnsPage