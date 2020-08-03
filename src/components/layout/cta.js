import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'react-bootstrap'

import footerStyles from "../../styles/footer.module.scss"
import NameCTA from "../../img/svg/CTA.svg"

const CTA = () => {
    return (
            <div className={footerStyles.cta}>
                <Row><Col><h2>Die Trainings-Flatrate für moderne Teamarbeit.</h2></Col></Row>
                <Row>
                <Col md={8}>
                    <p>Regelmäßige Trainings verbessern die Teamarbeit deutlich.
                        Mit Crewsby trainierst Du alleine und mit Deinem Team so viel Du willst.
                    </p>
                    <Link to="/solo-trainings" className="btn btn-secondary btn-lg">Kostenlos trainieren</Link>
                </Col>
                <Col md={4} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <NameCTA height={120} style={{margin:"1.4rem 0"}}/>
                </Col>
                </Row>
            </div>
    )
}

export default CTA