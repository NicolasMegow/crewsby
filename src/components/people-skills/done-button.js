import React, { useRef, useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DoneButton = ({ skill, done, exNum }) => {
  const [click, setClick] = useState(false)
  const btnRef = useRef()
  return (
    <p>
      <Button
        variant="outline-primary"
        ref={btnRef}
        onClick={() => {
          setClick(true)
          btnRef.current.setAttribute("disabled", "disabled")
        }}
      >
        <FontAwesomeIcon
          icon={["fas", "check"]}
          size="lg"
          mask={["fas", "circle"]}
          transform="shrink-8"
        />{" "}
        I completed this exercise.
      </Button>{" "}
      {!click ? null : "Saved!"}
    </p>
  )
}

export default DoneButton
