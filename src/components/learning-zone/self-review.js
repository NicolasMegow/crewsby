import React, { useState, useEffect, useRef } from "react"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import faunadb, { query as q } from "faunadb"

import { Formik, Form, Field } from "formik"
import formStyles from "../../styles/form.module.scss"

import { lastWeek } from "../shared/timetravel"

const SelfReview = ({ isAuth, user, learnObj, update, weeks }) => {
  const [visible, setVisible] = useState(false)
  const [done, setDone] = useState("notyet")
  const [activity, setActivity] = useState("")
  useEffect(() => {
    setDone(weeks != null && weeks.includes(lastWeek) ? "done" : "notyet")
    setActivity(
      learnObj != null
        ? learnObj["objectiveData"]["Activity"]
        : "set your Learning Objective first!"
    )
  }, [setDone, weeks, learnObj])

  const btnRef = useRef(isAuth ? "enabled" : "disabled")
  const curTime = new Date()
  if (done === "done") {
    return (
      <div className="area-grey">
        <h3>
          Self-review{" "}
          <small>
            <FontAwesomeIcon icon={["fas", "check-circle"]} fixedWidth />{" "}
            {lastWeek}
          </small>
        </h3>
      </div>
    )
  } else {
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
          {
            data: {
              logs: { [curTime]: reviewData },
              weeks: q.Append(lastWeek, weeks),
            },
          }
        )
      )
    }

    return (
      <Formik
        initialValues={{
          Week: lastWeek,
          Activity: activity,
          Behavior: 0,
          Obstacle: "",
          Learnings: "",
          Goals: "",
        }}
        onSubmit={async values => {
          updateUserLevel(values)
          btnRef.current.setAttribute("disabled", "disabled")
          setDone("done")
          update("self-review")
        }}
      >
        {({ values }) => (
          <Form>
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
                  onClick={event => {
                    event.preventDefault()
                    setVisible(!visible)
                  }}
                  onKeyDown={event => {
                    event.preventDefault()
                    setVisible(!visible)
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <h3>
                    Self-review <small>{lastWeek}</small>
                  </h3>
                </button>
                <span style={{ padding: "0 .5rem", cursor: "pointer" }}>
                  {visible ? (
                    <FontAwesomeIcon
                      icon={["fas", "angle-up"]}
                      size="2x"
                      color="#151515"
                      onClick={event => {
                        event.preventDefault()
                        setVisible(false)
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={["fas", "angle-down"]}
                      size="2x"
                      color="#151515"
                      onClick={event => {
                        event.preventDefault()
                        setVisible(true)
                      }}
                    />
                  )}
                </span>
              </span>
              {visible ? (
                <>
                  <span>
                    <label
                      className={formStyles.fieldtitle}
                    >{`How often did you ${activity}?`}</label>
                    <Field
                      id="Behavior"
                      name="Behavior"
                      type="number"
                      placeholder={0}
                      aria-label="count"
                      range={[0, 20]}
                      className={formStyles.formfield}
                    />
                  </span>
                  <p className={formStyles.fieldtitle}>
                    What was your biggest obstacle?
                  </p>
                  <Field
                    id="Obstacle"
                    name="Obstacle"
                    placeholder="My ego"
                    as="textarea"
                    aria-label="text-form"
                    className={formStyles.formfield}
                  />
                  <span>
                    <p className={formStyles.fieldtitle}>
                      What have you noticed?
                    </p>
                    <Field
                      id="Learnings"
                      name="Learnings"
                      placeholder="Baby steps"
                      as="textarea"
                      aria-label="text-form"
                      className={formStyles.formfield}
                    />
                  </span>
                  <span>
                    <p className={formStyles.fieldtitle}>
                      What are your goals next week?
                    </p>
                    <Field
                      id="Goals"
                      name="Goals"
                      placeholder="1 2 3"
                      as="textarea"
                      aria-label="text-form"
                      className={formStyles.formfield}
                    />
                  </span>
                  <Button type="submit" className="btn btn-lg" ref={btnRef}>
                    Submit
                  </Button>
                </>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}

export default SelfReview
