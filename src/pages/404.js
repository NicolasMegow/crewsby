import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"
import Emoji from "../components/shared/emoji"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Container>
        <Row>
          <Col>
            <h1>
              <Emoji symbol="🕳️" label="gone" />
            </h1>
            <h1>Sorry!</h1>
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "2rem",
              }}
            >
              Something went missing here...
            </p>
            <Button variant="primary" size="lg">
              <Link to="/">→ back to start</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFound
