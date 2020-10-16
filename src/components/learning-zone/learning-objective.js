import React, { useRef } from "react"
import { Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

import { useFormik } from "formik"
import formStyles from "../../styles/form.module.scss"

const LearningObjective = ({ learnObj, isAuth, user }) => {
  const { loginWithPopup } = useAuth0()
  const btnRef = useRef()
  const formik = useFormik({
    initialValues: {
      Objective: "",
      Activity: "",
    },
    onSubmit: values => {
      updateUserLevel(values)
      btnRef.current.setAttribute("disabled", "disabled")
    },
  })

  const updateUserLevel = async objectiveData => {
    const curTime = new Date()
    const fauna_secret = user["https://fauna.com/id/secret"]
    const client = new faunadb.Client({ secret: fauna_secret })

    await client.query(
      q.Update(
        q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        ),
        { data: { learnObj: { objectiveData, curTime } } }
      )
    )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="area-blue">
        <h3>Learning objective</h3>
        <span>
          <label className={formStyles.fieldtitle} htmlFor="Objective">
            Objective
          </label>
          <input
            id="Objective"
            name="Objective"
            type="text"
            placeholder="Improve team cohesion"
            aria-label="text"
            onChange={formik.handleChange}
            value={formik.values.Objective}
            className={formStyles.formfield}
          />
        </span>
        <span>
          <label className={formStyles.fieldtitle} htmlFor="Activity">
            Key activity
          </label>
          <input
            id="Activity"
            name="Activity"
            type="text"
            placeholder="Create opportunities to socialize"
            aria-label="text"
            onChange={formik.handleChange}
            value={formik.values.Activity}
            className={formStyles.formfield}
          />
        </span>
        {isAuth ? (
          <Button type="submit" className="btn btn-lg" ref={btnRef}>
            Save
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={() => {
              loginWithPopup()
            }}
          >
            Signup / Login
          </Button>
        )}
      </div>
    </form>
  )
}

export default LearningObjective
