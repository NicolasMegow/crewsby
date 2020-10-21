import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
            <h1 style={{ color: "#4285F4" }}>Crewsby</h1>
            <p style={{ fontSize: "1.4rem", marginBottom: "2rem" }}>
              Like Gatsby a reminder: by Gatz. The crew creates culture.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <p className="mintitle">Our mission</p>
            <h2 className="feature-h">
              We <Emoji symbol="❤️" label="love" /> culture.
            </h2>
            <p>
              Culture creates a place to belong. Everybody deserves this
              connection at work. We believe that change can only come from
              within a crew. Learning to fish is so much more fun than just
              getting a fish. It is our mission to provide actionable resources
              for you to change gracefully. We scout the web for amazing ideas
              and best practices from which we design tutorials, exercises and
              tools.
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
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
            />
            <p style={{ marginBottom: "0" }}>
              <strong>Lilian Izsak</strong>
              <br></br>Community builder
              <br></br>Professional happiness fairy
              <br></br>
              <a
                href="https://www.linkedin.com/in/lilian-izsak/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>{" "}
              <a
                href="https://twitter.com/lili07marie"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
              </a>
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
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
            />
            <p style={{ marginBottom: "0" }}>
              <strong>Nicolas Megow</strong>
              <br></br>Culture hacker
              <br></br>Coach, model thinker & elephant
              <br></br>
              <a
                href="https://www.linkedin.com/in/nicolas-megow/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>{" "}
              <a
                href="http://github.com/NicolasMegow/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
              >
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
              </a>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <p className="mintitle">Our aspiration</p>
            <h2 className="feature-h">Crewsby redefines culture change.</h2>
          </Col>
        </Row>
        <Row>
          <Col md className="bordered">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <FontAwesomeIcon icon={["fab", "creative-commons"]} />{" "}
              <FontAwesomeIcon icon={["fab", "creative-commons-by"]} />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Open source
            </p>
            <p>
              We offer our culture hacks for free, encourage sharing and love
              fedback or suggestions.
              <br></br>
              <a
                href="https://github.com/NicolasMegow/crewsby"
                target="_blank"
                rel="noreferrer noopener"
              >
                → Join us on github
              </a>
            </p>
          </Col>
          <Col md className="bordered">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🎁" label="present" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Contribution
            </p>
            <p>
              We develop culture hacks from the best ideas there. We're working
              on a better way to emphasize our sources of inspiration.
            </p>
          </Col>
          <Col md className="bordered">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🔵" label="circle" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>Elegance</p>
            <p>
              We strive to develop simple and refined experiences. Give us
              feedback to improve our support on your journey.
              <br></br>
              <a href="mailto:amazing.input@crewsby.com">
                amazing.input@crewsby.com
              </a>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <p className="mintitle">Our thanks</p>
            <h2 className="feature-h">
              We are standing on the shoulders of giants.
            </h2>
            <p>
              We develop our culture hacks from state of the art research and
              best practices. Here are the giants that inspire us:
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
