import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Logo from "../../static/crewsby_logo-512x512.png"

const UeberUnsPage = () => {
  return (
    <Layout>
      <SEO title="Über uns" />
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <img src={Logo} alt="Logo" style={{ maxWidth: "12rem" }} />
            <h1 style={{ color: "#4285F4" }}>CREWSBY</h1>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Wie Gatsby ein Hinweis: by Gatz. Die Crew erschafft das Team.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Unsere Vision</p>
            <h2 className="feature-h">
              Wir <Emoji symbol="🔥" label="brennen" /> für Teamarbeit.
            </h2>
            <p>
              Moderne Teamarbeit sollte der Standard sein. Und wirkliche jedes
              Team verdient ein gutes Teamgefühl. Deshalb arbeiten wir
              unermüdlich daran die besten Trainings dafür zu entwickeln. So
              kannst Du mit Deiner Crew selbstbestimmt als Team wachsen.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Unser Anspruch</p>
            <h2 className="feature-h">
              Crewsby definiert Teamentwicklung neu.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col
            md
            style={{
              marginTop: "2rem",
              border: "1px solid #000000",
              padding: "1.2rem",
              margin: "1.2rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🎁" label="present" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Nützliche Beiträge
            </p>
            <p>Wir entwickeln Trainings zu den besten Ideen über Teamarbeit.</p>
          </Col>
          <Col
            md
            style={{
              marginTop: "2rem",
              border: "1px solid #000000",
              padding: "1.2rem",
              margin: "1.2rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🔵" label="circle" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Schlichte Eleganz
            </p>
            <p>Wir überzeugen durch Zurückhaltung und Einfachheit.</p>
          </Col>
          <Col
            md
            style={{
              marginTop: "2rem",
              border: "1px solid #000000",
              padding: "1.2rem",
              margin: "1.2rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <Emoji symbol="🍏" label="sustainable" />{" "}
            </div>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Durch & durch nachhaltig
            </p>
            <p>
              Wir helfen Fähigkeiten aufzubauen bei minimalem CO2-Fussabdruck.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Unser Dank</p>
            <h2 className="feature-h">
              Wir stehen auf den Schultern von Riesen.
            </h2>
            <p>
              Wir erstellen unsere Trainings auf Basis von Spitzenforschung und
              Best-Practices aus der Praxis. Wir suchen und analysieren, lassen
              uns inspirieren und entwicklen darauf aufbauend neue Trainings für
              Dich und Deine Crew.
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
              Vittorio Loreto • Fredrick Pferdt • Max De Pree • Edgar Schein •
              F. Schulz von Thun • Kim Scott • J.J. Sutherland • Karl Weick •
              Tom Wujec
            </strong>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default UeberUnsPage
