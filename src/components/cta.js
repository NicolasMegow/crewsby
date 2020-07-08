import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from 'react-bootstrap'

import footerStyles from "../styles/footer.module.scss"
import NameCTA from "../img/svg/CTA.svg"

const CTA = () => {
    return (
            <Row className={footerStyles.cta}>
                <Col md={8}>
                    <h2>12 Monate Training mit Crewsby <br></br>
                        oder 1 Tag traditionelles Training?</h2>
                    <p>Regelmäßige Trainings mit Crewsby liefern bessere Ergebnisse für weniger Kosten.</p>
                    <Link to="/preise"><Button variant="secondary" style={{letterSpacing:"0.1rem", fontWeight:"bold"}}>TRAININGS-FLATRATE BUCHEN</Button></Link>
                </Col>
                <Col md={4} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <NameCTA width="80%" height={180}/>
                </Col>
            </Row>
    )
}

export default CTA