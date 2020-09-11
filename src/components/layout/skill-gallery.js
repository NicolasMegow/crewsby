import React from "react"
import { Link } from "gatsby"
import { FaMask } from "../shared/fa-icons"

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
      <Link to="skills/radical-candor" style={styles.active}>
        <FaMask icon="gift" /> Communicate appreciation
      </Link>
      <br></br>
      <Link to="skills/kanban" style={styles.active}>
        <FaMask icon="conveyor-belt" /> Analyze processes
      </Link>
    </div>
  )
}

export default SkillGallery
