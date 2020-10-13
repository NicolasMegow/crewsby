import React, { useState, useRef } from "react"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import faunadb, { query as q } from "faunadb"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

import { useFormik } from "formik"
import formStyles from "../../styles/form.module.scss"

import { WeekString } from "../shared/timetravel"

const SelfReview = ({ isAuth, user }) => {
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(isAuth ? "enabled" : "disabled")
  const curTime = new Date()
  const formik = useFormik({
    initialValues: {
      Behavior: 0,
      Obstacle: "",
      Learnings: "",
      Goals: "",
    },
    onSubmit: values => {
      updateUserLevel(values)
    },
  })

  const updateUserLevel = async reviewData => {
    if (!isAuth) return
    const fauna_secret = user["https://fauna.com/id/secret"]
    const client = new faunadb.Client({ secret: fauna_secret })

    await client.query(
      q.Update(
        q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        ),
        { data: { [curTime]: reviewData } }
      )
    )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          padding: "1rem",
          marginTop: "2rem",
          borderRadius: "6px",
          background: "#ebebeb",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setVisible(!visible)}
            onKeyDown={() => setVisible(!visible)}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <h3>
              Self-review{" "}
              <small>
                <WeekString />
              </small>
            </h3>
          </button>
          <span style={{ padding: "0 .5rem", cursor: "pointer" }}>
            {visible ? (
              <FontAwesomeIcon
                icon={["fas", "angle-up"]}
                size="2x"
                color="#151515"
                onClick={() => setVisible(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={["fas", "angle-down"]}
                size="2x"
                color="#151515"
                onClick={() => setVisible(true)}
              />
            )}
          </span>
        </span>
        {visible ? (
          <>
            <span>
              <label
                className={formStyles.fieldtitle}
              >{`How many time have you done X?`}</label>
              <input
                id="Behavior"
                name="Behavior"
                type="number"
                placeholder={0}
                aria-label="count"
                range={[0, 20]}
                onChange={formik.handleChange}
                value={formik.values.Behavior}
                className={formStyles.formfield}
              />
            </span>
            <p className={formStyles.fieldtitle}>
              What was your biggest obstacle?
            </p>
            <textarea
              id="Obstacle"
              name="Obstacle"
              placeholder="My ego"
              aria-label="text-form"
              onChange={formik.handleChange}
              value={formik.values.Obstacle}
              className={formStyles.formfield}
            />
            <span>
              <p className={formStyles.fieldtitle}>What have you noticed?</p>
              <textarea
                id="Learnings"
                name="Learnings"
                placeholder="Baby steps"
                aria-label="text-form"
                onChange={formik.handleChange}
                value={formik.values.Learnings}
                className={formStyles.formfield}
              />
            </span>
            <span>
              <p className={formStyles.fieldtitle}>
                What are your goals next week?
              </p>
              <textarea
                id="Goals"
                name="Goals"
                placeholder="1 2 3"
                aria-label="text-form"
                onChange={formik.handleChange}
                value={formik.values.Goals}
                className={formStyles.formfield}
              />
            </span>
            <Button type="submit" className="btn btn-lg" ref={btnRef}>
              Submit
            </Button>
          </>
        ) : null}
      </div>
    </form>
  )
}

export default SelfReview
