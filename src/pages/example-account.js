import React from "react"
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0"

const Account = () => {
  const { isAuthenticated, loading, logout, user, loginWithPopup } = useAuth0()
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={() => logout()}>Log out</button>
          <p>Check out the user data supplied by Auth0, below:</p>
          <pre>{isAuthenticated && JSON.stringify(user, null, 2)}</pre>
        </>
      ) : (
        <>
          <h2>Hi, try logging in:</h2>
          <button onClick={() => loginWithPopup()}>Log in</button>
        </>
      )}
    </div>
  )
}

export default Account