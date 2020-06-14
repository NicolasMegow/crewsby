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
                <Col style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginRight: "20%" }}>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={['fal', 'laptop']} fixedWidth size="6x" color="#ffffff" />
                        <FontAwesomeIcon icon={['fal', 'dumbbell']} fixedWidth size="3x" color="#ffffff" transform="right-10 up-2" />
                    </span>
                </Col>
            </Row>
        </Container>

    )
}

export default CTA