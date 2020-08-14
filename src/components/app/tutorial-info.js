import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

const TutorialInfo = ({ edge }) => {
    const slug = edge.node.fields.slug
    const level = edge.node.frontmatter.level
    return (
        <Row style={{ marginBottom: "3rem" }}>
            <Col lg style={{ marginBottom: "1.4rem" }}>
                <h3>{level}</h3>
            </Col>
            <Col lg>
                <Link to={slug} className="btn btn-outline-primary btn-lg">Tutorial starten</Link>
            </Col>
        </Row>
    )
}

export default TutorialInfo