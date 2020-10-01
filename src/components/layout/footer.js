import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"

import footerStyles from "../../styles/footer.module.scss"
import SocialIcons from "../shared/social-icons"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row>
          <Col>
            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
          </Col>
        </Row>
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col md={3}>
            <p>Crewsby © 2020 </p>
          </Col>
          <Col
            md={9}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <SocialIcons />
            <Nav>
              <Nav.Item>
                <Link className={footerStyles.linkItem} to="/about-us">
                  About us
                </Link>
              </Nav.Item>
              {/*<Nav.Item>
                <Link className={footerStyles.linkItem} to="/faq">
                  FAQ
                </Link>
              </Nav.Item>*/}
              <Nav.Item>
                <Link className={footerStyles.linkItem} to="/imprint">
                  Imprint
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className={footerStyles.linkItem} to="/privacy">
                  Privacy
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
