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
                    <span className="fa-stack fa-4x">
                        <FontAwesomeIcon icon={['fal', 'laptop']} fixedWidth color="#ffffff" class="fa-stack-2x" />
                        <FontAwesomeIcon icon={['fal', 'dumbbell']} fixedWidth color="#ffffff" transform="shrink-10 up-1" class="fa-stack-1x" />
                    </span>
                </Col>
            </Row>
        </Container>

    )
}

export default CTA