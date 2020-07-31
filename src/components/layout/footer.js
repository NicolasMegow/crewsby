import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from 'react-bootstrap'

import footerStyles from "../../styles/footer.module.scss"

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <Container>
                <Row>
                    <Col>
                    <hr style={{marginTop:"1rem",marginBottom:"1rem"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <p>Crewsby © 2020</p>
                    </Col>
                    <Col md={8} style={{ display: "flex", justifyContent: "flex-end"}}>
                        <Nav>
                            <Nav.Item><Link className={footerStyles.linkItem} to="/ueber-uns">Über uns</Link></Nav.Item>
                            <Nav.Item><Link className={footerStyles.linkItem} to="/faq">FAQ</Link></Nav.Item>
                            <Nav.Item><Link className={footerStyles.linkItem} to="/enterprise">Enterprise</Link></Nav.Item>
                            <Nav.Item><Link className={footerStyles.linkItem} to="/impressum">Impressum</Link></Nav.Item>
                            <Nav.Item><Link className={footerStyles.linkItem} to="/datenschutz">Datenschutz</Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer