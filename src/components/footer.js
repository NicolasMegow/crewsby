import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'

import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
        `)
    return (
        <footer className={footerStyles.footer}>
            <Container>
                <Row className={footerStyles.cta}>
                    <Col>
                        <h2>Jetzt Teamprofi werden</h2>
                        <Link to="/preise"><Button>Übungen buchen</Button></Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <p>Teamgefühl.com © 2020</p>
                    </Col>
                    <Col sm>
                        <Link className={footerStyles.linkItem} to="/impressum">Impressum</Link>
                        <Link className={footerStyles.linkItem} to="/datenschutz">Datenschutz</Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer