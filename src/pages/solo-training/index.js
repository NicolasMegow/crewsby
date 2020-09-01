import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout/layout"
import SEO from "../../components/shared/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SoloTrainingPage = () => {
  return (
    <Layout>
      <SEO title="Solo-Training" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <h1>Dein Beitrag zum Team zählt.</h1>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Steigere Deinen Beitrag durch gezielte Übungen und baue Stück für
              Stück wertvolle Fähigkeiten auf.
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
              icon={["fas", "apple-alt"]}
              size="3x"
              style={{ marginBottom: ".5rem" }}
            />
            <h2>Solo-Übungen</h2>
            <p>
              Kleine Lerneinheiten, mit denen Du neue Methoden ausprobierst.
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
              icon={["fas", "apple-crate"]}
              size="3x"
              style={{ marginBottom: ".5rem" }}
            />
            <h2>Solo-Sets</h2>
            <p>
              Kombinationen von Übungen, mit denen Du strukturiert Fähigkeiten
              aufbaust.
            </p>
            <Link to="sets" className="btn btn-primary btn-lg">
              Set starten
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
              icon={["fas", "book-user"]}
              size="3x"
              style={{ marginBottom: ".5rem" }}
            />
            <h2>Solo-Logbuch</h2>
            <p>Ein Überblick über Deinen persönlichen Fortschritt.</p>
            <strong>COMING SOON</strong>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SoloTrainingPage
