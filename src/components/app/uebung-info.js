import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"

const UebungInfo = ({ edge }) => {
    const slug = edge.node.fields.slug
    const level = edge.node.frontmatter.level
    const emojis = edge.node.frontmatter.emojis
    const excerpt = edge.node.frontmatter.excerpt
    return (
        <Row style={{ marginBottom: "2rem", paddingTop: "2rem", borderTop: "1px solid #DAE4F2" }}>
            <Col lg={8} style={{ marginBottom: "1.4rem" }}>
                {emojis.map((emoji, i) => {
                    return (
                        <Emoji symbol={emoji[0]} label={emoji[1]} key={i} />
                    )
                })}
                <h3>{level}</h3>
                <p>{excerpt}</p>
            </Col>
            <Col lg={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Link to={slug} className="btn btn-outline-primary btn-lg">Übung starten</Link>
            </Col>
        </Row>
    )
}

export default UebungInfo