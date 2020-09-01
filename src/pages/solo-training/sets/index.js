import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../../../components/layout/layout"
import SEO from "../../../components/shared/seo"
import Emoji from "../../../components/shared/emoji"

import SetRow from "../../../components/layout/set-row"
import SetSignup from "../../../components/shared/set-signup"

const SoloSetsPage = () => {
  return (
    <Layout>
      <SEO title="Solo-Sets" />
      <Container>
        <Row style={{ marginTop: "4rem" }} id="what">
          <Col>
            <h1>Lerne gemeinsam mit Peers.</h1>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Entwickele <u>online</u> wertvolle Fähigkeiten & knüpfe tolle
              Kontakte.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }} id="how">
          <Col>
            <SetRow />
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }}>
          <Col>
            <h2 className="feature-h">
              Entdecke Dein <Emoji symbol="❤️" label="heart" /> und Deine{" "}
              <Emoji symbol="💪" label="muscle" />.{" "}
            </h2>
          </Col>
        </Row>
        <Row id="options">
          <Col
            md
            style={{
              border: "1px solid #000000",
              padding: "1.4rem",
              margin: "1.4rem",
            }}
          >
            <h3>Radical Candor: Konflikte nutzen</h3>
            <p>
              Radical Candor ist die Fähigkeit in Beziehungen die Balance
              zwischen Herzlichkeit und Anspruch zu wahren.
            </p>
            <p style={{ fontWeight: "bold", marginBottom: "0" }}>Lerne:</p>
            <ul>
              <li>Wertschätzung zu zeigen</li>
              <li>Feedback zu geben</li>
              <li>Gemeinsamkeiten zu stärken</li>
              <li>Unterschiede zu nutzen</li>
              <li>Gefühle zu kommunizieren</li>
            </ul>
            <h3 style={{ marginBottom: "0" }}>
              <strike>89 €</strike> 49 € <small>bis 13.09.</small>
            </h3>
            <p>pro Crewmitglied für 12 Wochen</p>
          </Col>
          <Col
            md
            style={{
              border: "1px solid #000000",
              padding: "1.4rem",
              margin: "1.4rem",
            }}
          >
            <h3>Kanban: Abläufe verbessern</h3>
            <p>
              Kanban ermöglicht neue Perspektiven auf Abläufe und damit deren
              Verbesserung.
            </p>
            <p style={{ fontWeight: "bold", marginBottom: "0" }}>Lerne:</p>
            <ul>
              <li>Abläufe zu strukturieren</li>
              <li>Arbeit zu stückeln</li>
              <li>Arbeit zu priorisieren</li>
              <li>Schnittstellen zu gestalten</li>
              <li>Hindernisse aufzulösen</li>
            </ul>
            <h3 style={{ marginBottom: "0" }}>
              <strike>89 €</strike> 49 € <small>bis 13.09.</small>
            </h3>
            <p>pro Crewmitglied für 12 Wochen</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "8rem" }} id="signup">
          <Col>
            <h2 className="feature-h">
              Lerne neue Fähigkeiten mit einer Crew.
            </h2>
            <p>
              Einfach anmelden, wir kümmern uns um das Matching von Dir zu einer
              interessanten Crew.
            </p>
            <SetSignup />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SoloSetsPage
