import React from "react"
import { Link } from "gatsby"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

const JourneyNav = () => {
  const { loginWithPopup, isAuthenticated, loading } = useAuth0()
  return (
    <>
      {!loading && !isAuthenticated ? (
        <Link
          to="/"
          style={{ marginRight: "0" }}
          onClick={event => {
            event.preventDefault()
            loginWithPopup()
          }}
        >
          → Log in to save your progress
        </Link>
      ) : null}
    </>
  )
}

export default JourneyNav
