import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../layout/layout"
import SEO from "./seo"
import { FaLoading } from "./fa-icons"

const Loading = () => {
  return (
    <Layout>
      <SEO title="Loading..." />
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <FaLoading />
            <h1>Loading...</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Loading
