import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Logo from "../../static/crewsby_logo-512x512.png"

export const query = graphql`
  query {
    imageLili: file(relativePath: { eq: "LI_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNici: file(relativePath: { eq: "NM_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutUsPage = ({ data }) => {
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
            <p className="mintitle">Our mission</p>
            <h2 className="feature-h">
              We <Emoji symbol="🔥" label="love" /> teamwork.
            </h2>
            <p>
              Everyone deserves a crew of peers to accelerate the development of
              people skills.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md
            style={{
              margin: "2rem 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Img
              fluid={data.imageLili.childImageSharp.fluid}
              alt="Lilian Izsak"
              style={{
                width: "12rem",
                height: "12rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
            />
            <p>
              <strong>Lilian Izsak</strong>
              <br></br>Co-Founder Marketing
            </p>
          </Col>
          <Col
            md
            style={{
              margin: "2rem 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Img
              fluid={data.imageNici.childImageSharp.fluid}
              alt="Nicolas Megow"
              style={{
                width: "12rem",
                height: "12rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
            />
            <p>
              <strong>Nicolas Megow</strong>
              <br></br>Co-Founder Product
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Our aspiration</p>
            <h2 className="feature-h">Crewsby redefines people training.</h2>
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
            <p>We develop peer trainings for the best ideas around people.</p>
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
              We provide professional trainings with a marginal CO2-footprint.
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
              We develop our people trainings from state of the art research and
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
