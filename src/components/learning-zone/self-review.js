import React from "react"
import { Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

import { useFormik } from "formik"
import appStyles from "../../styles/app.module.scss"

const SelfReview = ({ behavior, skill, session }) => {
  const { isAuthenticated, loading, user } = useAuth0()
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
    if (loading || !isAuthenticated) return
    const curTime = new Date().toLocaleString()
    const sessionId = session.toString()
    const fauna_secret = user["https://fauna.com/id/secret"]
    const client = new faunadb.Client({ secret: fauna_secret })

    await client.query(
      q.Update(
        q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        ),
        { data: { [skill]: { [curTime]: { [sessionId]: reviewData } } } }
      )
    )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ margin: "2rem 0" }}>
        <h3>Self-review</h3>
        <span>
          <p className={appStyles.fieldtitle}>
            <label>{`How many ${behavior[0]} have you ${behavior[1]}?`}</label>
          </p>
          <input
            id="Behavior"
            name="Behavior"
            type="number"
            placeholder={0}
            aria-label="count"
            range={[0, 20]}
            onChange={formik.handleChange}
            value={formik.values.Behavior}
            className={appStyles.formfield}
          />
        </span>
        <p className={appStyles.fieldtitle}>What was your biggest obstacle?</p>
        <textarea
          id="Obstacle"
          name="Obstacle"
          placeholder="??"
          aria-label="text-form"
          onChange={formik.handleChange}
          value={formik.values.Obstacle}
          className={appStyles.formfield}
        />
        <span>
          <p className={appStyles.fieldtitle}>What have you noticed?</p>
          <textarea
            id="Learnings"
            name="Learnings"
            placeholder="I rock"
            aria-label="text-form"
            onChange={formik.handleChange}
            value={formik.values.Learnings}
            className={appStyles.formfield}
          />
        </span>
        <span>
          <p className={appStyles.fieldtitle}>What are your goals next week?</p>
          <textarea
            id="Goals"
            name="Goals"
            placeholder="1 2 3"
            aria-label="text-form"
            onChange={formik.handleChange}
            value={formik.values.Goals}
            className={appStyles.formfield}
          />
        </span>
      </div>
      <div>
        <Button type="submit" className="btn btn-lg">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default SelfReview
