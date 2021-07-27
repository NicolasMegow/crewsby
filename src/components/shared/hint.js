import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hint = ({ line1, icon1, line2, icon2 }) => {
  return (
    <div className="area-blue">
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
        line1="Assign a facilitator & a timekeeper."
        icon1={["fas", "stopwatch"]}
        line2="Please read the exercise aloud."
        icon2={["fas", "bullhorn"]}
      />
      <a
        href="../team-building/how-to-run-an-exercise"
        target="_blank"
        rel="noopener noreferrer"
      >
        → more tricks & tips for great exercises.
      </a>
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
