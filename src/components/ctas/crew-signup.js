import React, { useState, useRef } from "react"
import { Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"
import { Formik, Form, Field } from "formik"
import formStyles from "../../styles/form.module.scss"
import { timezones } from "../shared/timetravel"

const CrewSignup = () => {
  const btnRef = useRef()
  const [signupState, setState] = useState(false)

  const sendSignup = async userData => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("signup"), {
        data: { userData },
      })
    )
  }
  return (
    <Formik
      initialValues={{
        FullName: "",
        EMail: "",
        Timezone: "",
        JobTitle: "",
        LinkedinProfile: "",
        Projects: "",
        Topics: [],
      }}
      onSubmit={async values => {
        sendSignup(values)
        btnRef.current.setAttribute("disabled", "disabled")
        setState(true)
      }}
    >
      {({ values }) => (
        <Form>
          <div
            style={{
              padding: "1rem",
              borderRadius: "6px",
              background: "#ebebeb",
              maxWidth: "750px",
            }}
          >
            <h3>Please tell us a little bit about yourself:</h3>
            <span>
              <label className={formStyles.fieldtitle} htmlFor="FullName">
                Full name
              </label>
              <Field
                id="FullName"
                name="FullName"
                type="text"
                placeholder="Max Muster"
                aria-label="text-form"
                className={formStyles.formfield}
              />
            </span>
            <span>
              <label className={formStyles.fieldtitle} htmlFor="EMail">
                Email
              </label>
              <Field
                id="EMail"
                name="EMail"
                type="email"
                placeholder="max.muster@gmail.com"
                aria-label="text-form"
                className={formStyles.formfield}
              />
            </span>
            <span>
              <label className={formStyles.fieldtitle} htmlFor="Timezone">
                Timezone
              </label>
              <Field
                as="select"
                name="Timezone"
                id="Timezone"
                className={formStyles.formfield}
              >
                {timezones.map((zone, i) => {
                  return (
                    <option value={zone} key={i}>
                      {zone}
                    </option>
                  )
                })}
              </Field>
            </span>
            <span>
              <label className={formStyles.fieldtitle} htmlFor="JobTitle">
                Current job title
              </label>
              <Field
                id="JobTitle"
                name="JobTitle"
                type="text"
                placeholder="imperfect human"
                aria-label="text-form"
                className={formStyles.formfield}
              />
            </span>
            <span>
              <label
                className={formStyles.fieldtitle}
                htmlFor="LinkedinProfile"
              >
                Profile on LinkedIn
              </label>
              <Field
                id="LinkedinProfile"
                name="LinkedinProfile"
                type="text"
                placeholder="https://www.linkedin.com/in/usually-max-muster/"
                aria-label="text-form"
                className={formStyles.formfield}
              />
            </span>
            <div
              role="group"
              aria-labelledby="checkbox-group"
              style={{ margin: "1rem 0" }}
            >
              <p className={formStyles.fieldtitle}>
                {" "}
                What topics are you interested in?
              </p>
              <label htmlFor="checkbox_1" className="chip">
                <Field
                  type="checkbox"
                  name="Topics"
                  value="Digital transformation"
                  id="checkbox_1"
                />
                <p>Digital transformation</p>
              </label>
              <label htmlFor="checkbox_2" className="chip">
                <Field
                  type="checkbox"
                  name="Topics"
                  value="New work"
                  id="checkbox_2"
                />
                <p>New work</p>
              </label>
              <label htmlFor="checkbox_3" className="chip">
                <Field
                  type="checkbox"
                  name="Topics"
                  value="Agile practices"
                  id="checkbox_3"
                />
                <p>Agile practices</p>
              </label>
              <label htmlFor="checkbox_4" className="chip">
                <Field
                  type="checkbox"
                  name="Topics"
                  value="Servant leadership"
                  id="checkbox_4"
                />
                <p>Servant leadership</p>
              </label>
              <label htmlFor="checkbox_5" className="chip">
                <Field
                  type="checkbox"
                  name="Topics"
                  value="Psychological safety"
                  id="checkbox_5"
                />
                <p>Psychological safety</p>
              </label>
            </div>
            <span>
              <label className={formStyles.fieldtitle} htmlFor="Projects">
                What projects are you currently working on?
              </label>
              <Field
                id="Projects"
                name="Projects"
                placeholder="1 2 3"
                aria-label="text-area"
                as="textarea"
                className={formStyles.formfield}
              />
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Button size="lg" ref={btnRef} type="submit">
                Request an invite
              </Button>
              <p style={{ marginLeft: "2rem", marginBottom: "0" }}>
                {signupState ? (
                  <strong>
                    We've received your info. <br></br>We'll be in touch.
                  </strong>
                ) : null}
              </p>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CrewSignup
