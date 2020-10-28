import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hint = ({ line1, icon1, line2, icon2 }) => {
  return (
    <div
      style={{
        border: "1px solid #4285f4",
        borderRadius: "6px",
        margin: "1rem 0",
        padding: "1rem",
        color: "#4285f4",
        fontWeight: "500",
      }}
    >
      <p>
        <FontAwesomeIcon icon={icon1} fixedWidth /> {line1}
      </p>
      <p style={{ marginBottom: "0" }}>
        <FontAwesomeIcon icon={icon2} fixedWidth /> {line2}
      </p>
    </div>
  )
}

export const Hint1 = () => {
  return (
    <>
      <Hint
        line1="Please read the exercise aloud."
        icon1={["fas", "bullhorn"]}
        line2="Clarify all questions before you start."
        icon2={["fas", "question"]}
      />
    </>
  )
}

export const Hint2 = () => {
  return (
    <>
      <Hint
        line1="Take a few notes if you like."
        icon1={["fas", "file-edit"]}
        line2="Make sure that everyone gets a chance to speak."
        icon2={["fas", "microphone"]}
      />
    </>
  )
}
