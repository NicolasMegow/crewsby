import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"

import { handleAuthentication } from "../utils/auth"

const Callback = () => {
  handleAuthentication()

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
          <h1>Loading Tutorials</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Callback