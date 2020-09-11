import React from "react"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"

import appStyles from "../../styles/app.module.scss"
import { FaMask } from "../shared/fa-icons"

const SkillTile = ({ edge }) => {
  const { skill } = edge.node.fields
  const { method, icon, job, summary, level } = edge.node.frontmatter

  return (
    <Col md={6} className={appStyles.menuItem}>
      <Link to={skill}>
        <h3>
          <FaMask icon={icon} />
          <br></br>
          {job}
        </h3>
        <p
          style={{
            lineHeight: 1.2,
            marginBottom: "0",
          }}
        >
          {method} • Level {level}
        </p>
        <p
          style={{
            lineHeight: 1.2,
            marginBottom: "0",
          }}
        >
          {summary}
        </p>
      </Link>
    </Col>
  )
}

export default SkillTile
