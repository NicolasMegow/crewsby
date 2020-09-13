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

export const FaMask = ({ icon }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", icon]}
        mask={["fas", "square"]}
        size="2x"
        transform="shrink-8"
        color="#4285F4"
      />
    </>
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
