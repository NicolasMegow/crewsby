import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import footerStyles from "../styles/footer.module.scss"

const CTA = () => {
    return (
        <Container className={footerStyles.footer}>
            <Row className={footerStyles.cta}>
                <Col>
                    <h2>Jetzt Teamprofi werden</h2>
                    <Link to="/preise"><Button variant="light">Tutorials starten</Button></Link>
                </Col>
                <Col style={{ display: "flex", alignItems: "center", marginLeft: "30%", marginRight: "auto" }}>
                    <span className="fa-layers fa-fw fa-6x">
                        <FontAwesomeIcon icon={['fal', 'laptop']} color="#ffffff" />
                        <FontAwesomeIcon icon={['fal', 'dumbbell']} color="#ffffff" transform="shrink-10 up-1" />
                    </span>
                </Col>
            </Row>
        </Container>

    )
}

export default CTA