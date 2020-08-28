import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import BenefitRow from "../components/layout/benefit-row"
import FeatureRow from "../components/layout/feature-row"
import MethodBlock from "../components/layout/method-block"
import PreiseRow from "../components/layout/preise-row"

import Teambuilding from "../img/svg/Teambuilding.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Startseite" />
      <Container>
        <Row>
          <Col>
            <Teambuilding width="100%" />
            <h1 style={{ marginTop: "2rem" }}>
              Teamentwicklung durch die Crew.
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "4rem",
              }}
            >
              Crewsby hilft Dir neue Fähigkeiten zu entwickeln, mit Deiner Crew
              zusammen zu wachsen und agil zu arbeiten.
            </p>
            <Link
              to="/solo-training/uebungen"
              className="btn btn-outline-primary btn-lg"
              style={{ marginRight: "2rem", marginBottom: "2rem" }}
            >
              {" "}
              Solo-Training starten
            </Link>
            <Link
              to="/teamentwicklung/uebungen"
              className="btn btn-primary btn-lg"
              style={{ marginRight: "2rem", marginBottom: "2rem" }}
            >
              Teamentwicklung beginnen
            </Link>
          </Col>
        </Row>
        <BenefitRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Geniale Teamarbeit</p>
            <h2 className="feature-h">Hilfe zur Selbsthilfe.</h2>
            <p>
              Nicht alle Methoden passen zu Dir und Deiner Crew. Aber es hilft,
              alle auszuprobieren. Nutze Methoden, die wirklich gut zu Dir und
              Deiner Crew passen. Mit Crewsby trainiert ihr komplett
              selbstbestimmt und unabhängig.
            </p>
            <p>
              <Link to="/methoden">→ alle Methoden ansehen</Link>
            </p>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MethodBlock />
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col lg={6}>
            <p className="mintitle">Echtes Training</p>
            <h2 className="feature-h">Nur Machen hilft.</h2>
            <p>
              Verhalten zählt. Das braucht Ausprobieren und Anwenden. Crewsby
              bietet Dir und Deiner Crew komplette Trainings mit aufeinander
              aufbauenden Übungen und Reflexionen.
            </p>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                lineHeight: "1.2",
              }}
            >
              <strike style={{ textDecorationColor: "#DB4437" }}>Wollen</strike>
              ...<br></br>
              <strike style={{ textDecorationColor: "#DB4437" }}>Reden</strike>
              ...<br></br>
              Machen<span style={{ color: "#4285F4" }}>.</span>
            </p>
          </Col>
        </Row>
        <FeatureRow />
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Solo + Team</p>
            <h2 className="feature-h">
              Trainiere alleine und mit Deiner Crew zusammen.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col
            md
            style={{
              border: "1px solid #000000",
              padding: "1.4rem",
              margin: "1.4rem",
            }}
          >
            <h3>Solo-Training</h3>
            <p>
              Teamarbeit startet mit Dir. Im Solo-Training verbesserst Du Deinen
              Beitrag zum Team und nutzt Methoden zur Moderation und
              Teamführung.
            </p>
            <Link
              to="/solo-training/uebungen"
              className="btn btn-outline-primary btn-lg"
            >
              Solo-Training starten
            </Link>
          </Col>
          <Col
            md
            style={{
              border: "1px solid #000000",
              padding: "1.4rem",
              margin: "1.4rem",
            }}
          >
            <h3>Teamentwicklung</h3>
            <p>
              Geniale Teamarbeit entsteht aus dem Zusammenspiel
              unterschiedlicher Beiträge. Probiert gemeinsam Neues aus und
              entwickelt euer Team nachhaltig.
            </p>
            <Link
              to="/teamentwicklung/uebungen"
              className="btn btn-primary btn-lg"
            >
              Teamentwicklung beginnen
            </Link>
          </Col>
        </Row>
        <PreiseRow />
      </Container>
    </Layout>
  )
}

export default IndexPage
