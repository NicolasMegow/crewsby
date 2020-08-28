import React from "react"
import { Link } from "gatsby"
import FaCheck from "../shared/facheck"

var styles = {
  method: {
    color: "#151515",
  },
}

const MethodBlock = () => {
  return (
    <p style={{ fontWeight: "bold" }}>
      <FaCheck />{" "}
      <Link to="methoden/radical-candor" style={styles.method}>
        Radical Candor
      </Link>
      <br></br>
      <FaCheck />{" "}
      <Link to="methoden/psychological-safety" style={styles.method}>
        Psychological Safety
      </Link>
      <br></br>
      <FaCheck />{" "}
      <Link to="methoden/okrs" style={styles.method}>
        OKRs
      </Link>
      <br></br>
      <FaCheck />{" "}
      <Link to="methoden/kanban" style={styles.method}>
        Kanban
      </Link>
      <br></br>
      <FaCheck />{" "}
      <Link to="methoden/" style={styles.method}>
        Lean Management
      </Link>
      <br></br>
      <FaCheck />{" "}
      <Link to="methoden/" style={styles.method}>
        Scrum
      </Link>
      <br></br>
      <FaCheck />{" "}
      <Link to="methoden/design-thinking" style={styles.method}>
        Design Thinking
      </Link>
      <br></br>
    </p>
  )
}

export default MethodBlock
