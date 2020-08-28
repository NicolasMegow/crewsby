import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout/layout"
import SEO from "../../components/shared/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TeamentwicklungPage = () => {
  return (
    <Layout>
      <SEO title="Teamentwicklung" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <h1>Gemeinsam wächst man besser.</h1>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Macht mal was Neues in kleinen Übungen und findet euren Weg zu
              genialer Teamarbeit.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col
            md={5}
            style={{
              marginTop: "2rem",
              border: "1px solid #000000",
              padding: "1.2rem",
              margin: ".5rem",
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "pepper-hot"]}
              size="3x"
              style={{ marginBottom: ".5rem" }}
            />
            <h2>Team-Übungen</h2>
            <p>
              Kleine Lerneinheiten, mit denen ihr gemeinsam neue Methoden
              ausprobiert.
            </p>
            <Link to="uebungen" className="btn btn-primary btn-lg">
              Übung wählen
            </Link>
          </Col>
          <Col
            md={5}
            style={{
              marginTop: "2rem",
              border: "1px solid #000000",
              padding: "1.2rem",
              margin: ".5rem",
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "pizza"]}
              size="3x"
              style={{ marginBottom: ".5rem" }}
            />
            <h2>Team-Sets</h2>
            <p>
              Kombinationen von Übungen, mit denen ihr gemeinsam Fähigkeiten
              aufbaut.
            </p>
            <strong>COMING SOON</strong>
          </Col>
          <Col
            md={5}
            style={{
              marginTop: "2rem",
              border: "1px solid #000000",
              padding: "1.2rem",
              margin: ".5rem",
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "book-spells"]}
              size="3x"
              style={{ marginBottom: ".5rem" }}
            />
            <h2>Team-Logbuch</h2>
            <p>Ein Überblick über eure Entwicklung als Team.</p>
            <strong>COMING SOON</strong>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default TeamentwicklungPage
