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
            <h1>Crewsby - Change by the crew.</h1>
            <p style={{ fontSize: "1.4rem", marginBottom: "2rem" }}>
              Great companies are made by their crews. Just like John Gatz
              created the great Gatsby.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <h2>
              We <Emoji symbol="❤️" label="love" /> culture.
            </h2>
            <p>
              Culture creates a place to belong. Everybody deserves this
              connection at work.
            </p>
            <p>
              We believe that change can only come from the crew itself.
              Learning to fish is so much more fun than just getting a fish.
            </p>
            <p>
              It is our mission to provide actionable resources for you to
              change gracefully. We scout the web for amazing ideas and best
              practices from which we design tutorials & exercises.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            lg
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
              <br></br>Lili is a happiness engineer <br></br>with a sixth sense
              for inclusion.
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
            lg
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
              <br></br>Nicolas is a team coach <br></br>with a love for games.
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
            <h2>Crewsby redefines change.</h2>
          </Col>
        </Row>
        <Row>
          <Col lg className="area-white">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <FontAwesomeIcon icon={["fab", "creative-commons"]} />{" "}
              <FontAwesomeIcon icon={["fab", "creative-commons-by"]} />{" "}
            </div>
            <h3>Open source</h3>
            <p>
              Our tutorials, exercises & trainings are free. Share them, if you
              like.
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
          <Col lg className="area-white">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🎁" label="present" />{" "}
            </div>
            <h3>Contribution</h3>
            <p>
              We design tutorials & exercises to make the best ideas out there
              actionable.
            </p>
          </Col>
          <Col lg className="area-white">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🔵" label="circle" />{" "}
            </div>
            <h3>Elegance</h3>
            <p>
              Our goal is to offer simple & refined resources. Tell us how to
              get better:{" "}
              <a href="mailto:feedback@crewsby.com">feedback@crewsby.com</a>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <h2>Crewsby stands on the shoulders of giants.</h2>
            <p>
              We merely add to what smarter people have discovered. Here are the
              giants that inspire us:
            </p>
            <p>
              <strong>
                Ken Blanchard • Chip Conley • John Doerr • Amy Edmundson • Tasha
                Eurich • Atul Gawande • Adam Grant • Jeremy Gutsche • Gary Hamel
                • Ben Horrowitz • Tom Kelley • Fredic Laloux • Patrick Lencioni
                • Vittorio Loreto • Fredrick G. Pferdt • Max De Pree • Edgar
                Schein • F. Schulz von Thun • Kim Scott • Simon Sinek • J.J.
                Sutherland • Karl Weick • Tom Wujec
              </strong>
            </p>
            <p>
              We are currently working on a better way to express our
              appreciation!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutUsPage
