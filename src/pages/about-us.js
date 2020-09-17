import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Logo from "../../static/crewsby_logo-512x512.png"

const AboutUsPage = () => {
  return (
    <Layout>
      <SEO title="About us" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <img src={Logo} alt="Logo" style={{ maxWidth: "12rem" }} />
            <h1 style={{ color: "#4285F4" }}>CREWSBY</h1>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Like Gatsby a reminder: by Gatz. The crew creates learning.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Our Vision</p>
            <h2 className="feature-h">
              We <Emoji symbol="🔥" label="love" /> teamwork.
            </h2>
            <p>
              Everyone deserves a crew of peers to accelerate the development of
              professional skills.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Our standards</p>
            <h2 className="feature-h">Crewsby redefines online training.</h2>
          </Col>
        </Row>
        <Row>
          <Col
            md
            style={{
              marginTop: "2rem",
              border: "1px solid #151515",
              borderRadius: "6px",
              padding: "1.2rem",
              margin: "1.2rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🎁" label="present" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Contribution
            </p>
            <p>We develop peer trainings for the best ideas around teamwork.</p>
          </Col>
          <Col
            md
            style={{
              marginTop: "2rem",
              border: "1px solid #151515",
              borderRadius: "6px",
              padding: "1.2rem",
              margin: "1.2rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🔵" label="circle" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Elegance</p>
            <p>We strive to develop simple and refined learning experiences.</p>
          </Col>
          <Col
            md
            style={{
              marginTop: "2rem",
              border: "1px solid #151515",
              borderRadius: "6px",
              padding: "1.2rem",
              margin: "1.2rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🌱" label="sustainable" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Sustainability
            </p>
            <p>
              We provide well-founded training whith a marginal CO2-footprint.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Our thanks</p>
            <h2 className="feature-h">
              We are standing on the shoulders of giants.
            </h2>
            <p>
              We develop our peer trainings from state of the art research and
              best practices. Here are the giants that inspired the trainings:
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <strong>
              Ken Blanchard • Chip Conley • John Doerr • Amy Edmundson • Tasha
              Eurich • Atul Gawande • Adam Grant • Jeremy Gutsche • Gary Hamel •
              Ben Horrowitz • Tom Kelley • Fredic Laloux • Patrick Lencioni •
              Vittorio Loreto • Fredrick G. Pferdt • Max De Pree • Edgar Schein
              • F. Schulz von Thun • Kim Scott • J.J. Sutherland • Karl Weick •
              Tom Wujec
            </strong>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutUsPage
