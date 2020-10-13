import React from "react"
import { Button } from "react-bootstrap"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

const LoginReminder = () => {
  const { loginWithPopup } = useAuth0()
  return (
    <Button
      variant="outline-primary"
      style={{ marginRight: "0" }}
      onClick={() => loginWithPopup()}
    >
      Log in & save your progress
    </Button>
  )
}

export default LoginReminder
