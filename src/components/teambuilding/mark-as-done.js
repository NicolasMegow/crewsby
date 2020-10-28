import React, { useRef, useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MarkAsDone = ({ hackName, hackType }) => {
  const { loginWithPopup, isAuthenticated, loading, user } = useAuth0()
  const btnRef = useRef()
  const [profile, setProfile] = useState([])
  const hackInfo = `${hackName} (${hackType})`

  useEffect(() => {
    if (!loading && isAuthenticated) {
      async function getUserProfile() {
        const client = new faunadb.Client({
          secret: user["https://fauna.com/id/secret"],
        })
        const response = await client.query(
          q.Select(
            ["data"],
            q.Get(q.Match(q.Index("profile_by_email"), user.email))
          )
        )
        const profileData = await response
        setProfile(profileData)
      }
      getUserProfile()
    }
  }, [loading, isAuthenticated, user])

  const updateUserProfile = async hackInfo => {
    const curTime = new Date()
    const fauna_secret = user["https://fauna.com/id/secret"]
    const client = new faunadb.Client({ secret: fauna_secret })

    await client.query(
      q.Update(
        q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        ),
        { data: { logs: { [curTime]: hackInfo } } }
      )
    )
  }

  return (
    <div className="area-blue">
      {!loading && isAuthenticated ? (
        profile.logs != null &&
        Object.values(profile.logs).includes(hackInfo) ? (
          <p style={{ fontSize: "1.4rem", marginBottom: 0 }}>
            <FontAwesomeIcon icon={["fas", "check-circle"]} fixedWidth />{" "}
            {hackName} completed.
          </p>
        ) : (
          <>
            <p style={{ fontSize: "1.4rem" }}>Log {hackName} as done.</p>
            <Button
              className="btn btn-lg"
              ref={btnRef}
              onClick={() => {
                updateUserProfile(hackInfo) &&
                  btnRef.current.setAttribute("disabled", "disabled")
              }}
            >
              <FontAwesomeIcon icon={["fas", "check-circle"]} fixedWidth />{" "}
              {hackType} completed.
            </Button>
          </>
        )
      ) : (
        <>
          <p style={{ fontSize: "1.4rem" }}>Log {hackName} as done.</p>
          <Button
            size="lg"
            onClick={() => {
              loginWithPopup()
            }}
          >
            Signup / Login
          </Button>
        </>
      )}
    </div>
  )
}

export default MarkAsDone
