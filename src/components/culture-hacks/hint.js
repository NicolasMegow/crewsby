import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hint = ({ line, icon }) => {
  return (
    <div
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "1rem",
        border: "1px solid #4285f4",
        borderRadius: "6px",
        background: "#ffffff",
        color: "#151515",
      }}
    >
      <p style={{ marginBottom: "0" }}>
        <FontAwesomeIcon icon={icon} fixedWidth /> {line}
      </p>
    </div>
  )
}

export default Hint
