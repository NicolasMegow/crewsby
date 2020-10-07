import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Container>
        <Row>
          <Col>
            <h1>Sorry, somethin went off the tracks here...</h1>
            <Button lg>
              <Link to="/">Head back to start</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFound
