import React, { useState } from "react"
import { Button } from "react-bootstrap"

import { curTime } from "../shared/timetravel"
import faunadb, { query as q } from "faunadb"
import { Formik, Form, Field } from "formik"
import formStyles from "../../styles/form.module.scss"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddHack = ({ hackCollection, isAuth, user, update }) => {
  const { loginWithPopup } = useAuth0()
  const [isSent, setSent] = useState(false)
  const newTime = new Date()

  const updateUserProfile = async formData => {
    const fauna_secret = user["https://fauna.com/id/secret"]
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Update(
        q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("profile_by_email"), user.email))
        ),
        { data: { logs: { [newTime]: formData["Hack"] } } }
      )
    )
  }

  return (
    <div className="area-grey">
      <h3>
        Track a hack as completed <small>{curTime}</small>
      </h3>
      <Formik
        initialValues={{
          Hack: "",
        }}
        onSubmit={async values => {
          updateUserProfile(values)
          setSent(!isSent)
          update("add-hack")
        }}
      >
        <Form>
          <span>
            <Field
              as="select"
              name="Hack"
              id="Hack"
              className={formStyles.formfield}
            >
              <option value={""} key="xyz">
                Select a hack
              </option>
              {hackCollection.allMdx.edges.map((edge, i) => {
                const hackData = `${edge.node.frontmatter.hack} (${edge.node.frontmatter.type})`
                return (
                  <option value={hackData} key={i}>
                    {hackData}
                  </option>
                )
              })}
            </Field>
          </span>
          {isAuth ? (
            <>
              <Button size="lg" type="submit">
                <FontAwesomeIcon icon={["fas", "check-circle"]} fixedWidth />{" "}
                completed
              </Button>
              {isSent ? <p>Sent, pick another if you like</p> : null}
            </>
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
        </Form>
      </Formik>
    </div>
  )
}

export default AddHack
