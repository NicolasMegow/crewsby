import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'react-bootstrap'

import footerStyles from "../styles/footer.module.scss"
import NameCTA from "../img/svg/CTA.svg"

const CTA = () => {
    return (
            <Row className={footerStyles.cta}>
                <Col md={8}>
                    <h2>Deine Flatrate für Trainings.</h2>
                    <p>Regelmäßige Trainings verbessern die Teamarbeit deutlich.
                        Mit Crewsby trainierst Du alleine und mit Deinem Team so viel Du willst zum günstigen Fixpreis.
                    </p>
                    <Link to="/preise" className="btn btn-secondary btn-lg">Kostenlos testen</Link>
                </Col>
                <Col md={4} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <NameCTA width="80%" height={180}/>
                </Col>
            </Row>
    )
}

export default CTA