import React from "react"
//import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

const CrewBuilder = () => {
  return (
    <Layout>
      <SEO title="Crewbuilder" />
      <Container>
        <Row>
          <Col>
            <h1>Crewbuilder</h1>
            <p className="subtitle">Improve teamwork together.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CrewBuilder
