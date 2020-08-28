import React from "react"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"

import appStyles from "../../styles/app.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SvgTile = ({ edge }) => {
  const { slug } = edge.node.fields
  const { method, icon, job, levels } = edge.node.frontmatter

  return (
    <Col md={6} lg={4} className={appStyles.menuItem}>
      <Link to={slug}>
        <h3>{method}</h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.2,
            marginBottom: "0",
          }}
        >
          {job}
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.2,
            marginBottom: "0",
          }}
        >
          {levels} Übungen
        </p>
        <FontAwesomeIcon icon={icon} size="2x" style={{ float: "right" }} />
      </Link>
    </Col>
  )
}

export default SvgTile
