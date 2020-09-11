import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../layout/layout"
import SEO from "./seo"

const Loading = () => {
  return (
    <Layout>
      <SEO title="Working hard!" />
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
