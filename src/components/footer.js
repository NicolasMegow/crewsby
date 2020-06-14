import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <Container>
                <Row>
                    <Col sm>
                        <p>Teamgefühl.com © 2020</p>
                    </Col>
                    <Col sm>
                        <Link className={footerStyles.linkItem} to="/datenschutz">Datenschutz</Link>
                        <Link className={footerStyles.linkItem} to="/impressum">Impressum</Link>    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer