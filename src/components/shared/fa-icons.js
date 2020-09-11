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
