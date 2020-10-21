import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../components/shared/emoji"

import Layout from "../components/layout/layout"
import SEO from "../components/shared/seo"

import Teamboat from "../img/svg/EinBoot.svg"
import PSInfo from "../components/layout/ps-info"
import CrewSignup from "../components/ctas/crew-signup"

const SupportPage = () => {
  return (
    <Layout>
      <SEO title="Peer support" />
      <Container>
        <Row>
          <Col lg style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginTop: "4rem" }}>
              <p className="title-emoji">
                <Emoji symbol="🍏" label="nutrituous" />
              </p>
              <h1>Peer support</h1>
              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "2rem",
                }}
              >
                You are not a misfit. Crewsby creates save spaces for sharing
                experiences and asking for help.
              </p>
            </span>
          </Col>
          <Col lg>
            <Teamboat width="100%" />
          </Col>
        </Row>
        <PSInfo />
        <Row style={{ marginTop: "8rem" }}>
          <Col lg>
            <h2>
              <Emoji symbol="🙌" label="hands-up" /> Join our community!
            </h2>
            <p style={{ marginTop: "1rem" }}>
              Crewsby is a community of practitioners asking for feedback and
              support. To that end we're barring consultants, coaches and sales
              representatives from membership. We'll send you an invite once
              we've checked your profile.
            </p>
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "2rem",
              }}
            >
              <strong>Membership in the community is free.</strong>
              <br></br>We might offer exclusive events later.
            </p>
          </Col>
          <Col lg>
            <CrewSignup />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SupportPage
