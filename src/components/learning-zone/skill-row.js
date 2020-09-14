import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { FaTitle, FaNumber } from "../shared/fa-icons"

const SkillRow = ({ edge }) => {
  const { job, icon } = edge.node.frontmatter
  const { skill } = edge.node.fields

  return (
    <Row style={{ display: "flex", alignItems: "center" }}>
      <Col lg={3} style={{ margin: "1rem 0" }}>
        <FaTitle icon={icon} title={job} />
      </Col>
      <Col lg={6} style={{ margin: "1rem 0" }}>
        {" "}
        {[...Array(12)].map((exercise, i) => {
          const exerciseValue = i + 1
          return (
            <span style={{ margin: ".2rem" }}>
              <FaNumber number={exerciseValue} />
            </span>
          )
        })}
      </Col>
      <Col lg={3} style={{ margin: "1rem 0" }}>
        <Link to={`${skill}`} className="btn btn-primary btn-lg">
          Start learning
        </Link>
      </Col>
    </Row>
  )
}

export default SkillRow
