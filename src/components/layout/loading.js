import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "./layout"
import Head from "./head"

const Loading = () => {
  return(
      <Layout>
      <Head title="Meine Trainings" />
      <Container>
        <Row>
          <Col>
            <h1>Loading...</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Loading