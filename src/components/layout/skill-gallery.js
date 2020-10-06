import React from "react"
import { Link } from "gatsby"
import { FaTitle } from "../shared/fa-icons"

var styles = {
  active: {
    color: "#151515",
    fontWeight: "bold",
    fontSize: "1.6rem",
  },
}

const SkillGallery = () => {
  return (
    <div>
      <Link to="people-skills/communicate-appreciation" style={styles.active}>
        <FaTitle icon="gift" title="Communicate Appreciation" />
      </Link>
      <Link to="people-skills/analyze-processes" style={styles.active}>
        <FaTitle icon="conveyor-belt" title="Analyze Processes" />
      </Link>
    </div>
  )
}

export default SkillGallery
