import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FaCheck = () => {
  return (
    <>
      <FontAwesomeIcon icon={["fas", "check"]} fixedWidth color="#4285F4" />
    </>
  )
}

export const FaPlus = () => {
  return (
    <>
      <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth color="#4285F4" />
    </>
  )
}

export const FaMask = ({ icon, size }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", icon]}
        mask={["fas", "square"]}
        size={size}
        transform="shrink-8"
        color="#4285F4"
      />
    </>
  )
}

export const FaTitle = ({ icon, title }) => {
  const title2 = title.split(" ")
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaMask icon={icon} size="3x" />
      <div
        style={{
          marginLeft: "1rem",
          lineHeight: "1",
          marginBottom: "0",
        }}
      >
        {title2[0]}
        <br></br>
        {title2[1]}
      </div>
    </div>
  )
}

export const FaLoading = () => {
  return (
    <FontAwesomeIcon
      icon={["fad", "spinner"]}
      color="#4285F4"
      size="3x"
      pulse
    />
  )
}

export const FaNumber = ({ number }) => {
  return (
    <span style={{ position: "relative" }}>
      <FontAwesomeIcon icon={["fal", "square"]} size="2x" />
      <span
        className="fa-layers-text"
        style={{ position: "absolute", top: "25%", fontWeight: "900" }}
      >
        {number}
      </span>
    </span>
  )
}

export const FaChecked = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "checkmark"]}
        mask={["fas", "circle"]}
        transform="shrink-8"
        color="#4285F4"
      />
    </>
  )
}

export const FaToDo = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "question"]}
        mask={["fas", "circle"]}
        size="lg"
        transform="shrink-8"
        color="#4285F4"
      />
    </>
  )
}
