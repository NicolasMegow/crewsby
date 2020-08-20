import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../../components/layout/layout"
import SEO from "../../components/shared/seo"

const RessourcenPage = () => {
  return (
    <Layout>
      <SEO title="Ressourcen" />
      <Container>
        <Row>
          <Col>
            <h1>Ressourcen</h1>
            <h2>Hier findest Du kostenlose Werkzeuge für Dein Team.</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default RessourcenPage
