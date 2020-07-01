import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import footerStyles from "../styles/footer.module.scss"

const CTA = () => {
    return (
            <Row className={footerStyles.cta}>
                <Col md={8}>
                    <h2>12 Monate Teamgefühl <br></br>statt 1 Tag traditionelles Training?</h2>
                    <p>Teamgefühl liefert bessere Ergebnisse für weniger Kosten.    </p>
                    <Link to="/preise"><Button variant="light">Trainings-Flatrate buchen</Button></Link>
                </Col>
                <Col md={4} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <span className="fa-layers fa-fw fa-6x">
                        <FontAwesomeIcon icon={['fal', 'laptop']} color="#ffffff" />
                        <FontAwesomeIcon icon={['fal', 'dumbbell']} color="#ffffff" transform="shrink-10 up-1" />
                    </span>
                </Col>
            </Row>
    )
}

export default CTA