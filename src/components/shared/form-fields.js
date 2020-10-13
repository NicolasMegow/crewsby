import React from "react"
import "../../styles/switch.css"

export const Switch = ({ isOn, handleToggle }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <p style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>locally</p>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        aria-label="switcheroo"
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: isOn && "#4285F4" }}
      >
        <span className={`react-switch-button`} />
      </label>
      <p style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}>globally</p>
    </div>
  )
}
