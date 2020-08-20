import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
            <h2>
              Wie Gatsby ein Hinweis: by Gatz. Die Crew erschafft das Team.
            </h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <p className="mintitle">Unsere Vision</p>
            <h2>
              Wir <Emoji symbol="🔥" label="brennen" /> für Teamarbeit.
            </h2>
            <p>
              Moderne Teamarbeit sollte der Standard sein. Und wirkliche jedes
              Team verdient ein gutes Teamgefühl.
            </p>
            <p>
              Deshalb arbeiten wir unermüdlich daran die besten Trainings dafür
              zu entwickeln.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <p className="mintitle">Unser Anspruch</p>
            <h3>Wir sind durch & durch nachhaltig.</h3>
            <p>
              Wir verbessern konstant unsere Trainings, damit Du nachhaltig
              Fähigkeiten aufbauen kannst. Digitales Training hat eine
              hervorragende Klimabilanz. Wir gleichen darüber hinaus den durch
              uns verursachten CO2-Ausstoß mit Aufforstungsprojekten aus.
            </p>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={["fal", "seedling"]}
              fixedWidth
              size="5x"
              mask={["fas", "rectangle-landscape"]}
              color="#67A4F4"
              transform="shrink-8"
            />
            <FontAwesomeIcon
              icon={["fal", "flower-tulip"]}
              fixedWidth
              size="5x"
              mask={["fas", "rectangle-landscape"]}
              color="#418DF1"
              transform="shrink-8"
            />
            <FontAwesomeIcon
              icon={["fal", "tree-alt"]}
              fixedWidth
              size="5x"
              mask={["fas", "rectangle-landscape"]}
              color="#4285F4"
              transform="shrink-8"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <p className="mintitle">Unsere Arbeitsweise</p>
            <h3>Wir sind ein schlankes Team.</h3>
            <p>
              Konzentration auf das Wesentliche ist eine Tugend. Unser Ziel ist
              es, dies möglichst diszipliniert umzusetzen. Und das Wesentliche
              ist für uns Dein Trainingserfolg.
            </p>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
              <Emoji symbol="🎁" label="present" /> Nützliche Beiträge<br></br>
              <Emoji symbol="🔵" label="circle" /> Schlichte Eleganz<br></br>
              <Emoji symbol="🍏" label="sustainable" /> Nachhaltigkeit
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col md={6}>
            <p className="mintitle">Unser Dank</p>
            <h3>Wir stehen auf Riesen-Schultern.</h3>
            <p>
              Wir erstellen unsere Trainings auf Basis von Spitzenforschung und
              Best-Practices aus der Praxis. Wir suchen und analysieren, lassen
              uns inspirieren und entwicklen darauf aufbauend neue Trainings für
              Dich.
            </p>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <strong>
              Ken Blanchard • Chip Conley • John Doerr • Amy Edmundson • Tasha
              Eurich • Atul Gawande • Adam Grant • Jeremy Gutsche • Gary Hamel •
              Ben Horrowitz • Tom Kelley • Patrick Lencioni • Vittorio Loreto •
              Max De Pree • Edgar Schein • F. Schulz von Thun • Kim Scott • J.J.
              Sutherland • Karl Weick
            </strong>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default UeberUnsPage
