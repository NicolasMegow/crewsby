import React from "react"
import { Button } from "react-bootstrap"

import { CurTime } from "../shared/timetravel"
import faunadb, { query as q } from "faunadb"
import { Formik, Form, Field } from "formik"
import formStyles from "../../styles/form.module.scss"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

const AddHack = ({ hackCollection, isAuth }) => {
  const { loginWithPopup } = useAuth0()
  const curTime = new Date()
  const sendHack = async hackData => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("signup"), {
        data: { [curTime]: hackData },
      })
    )
  }
  return (
    <div
      style={{
        padding: "1rem",
        marginTop: "2rem",
        borderRadius: "6px",
        background: "#ebebeb",
      }}
    >
      <h3>
        Track a hack{" "}
        <small>
          <CurTime />
        </small>
      </h3>
      <Formik
        initialValues={{
          Hack: "",
          time: curTime,
        }}
        onSubmit={async values => {
          sendHack(values)
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
              {hackCollection.allMdx.edges.map((edge, i) => {
                return (
                  <option value={edge.node.frontmatter.hack} key={i}>
                    {edge.node.frontmatter.hack} ({edge.node.frontmatter.type})
                  </option>
                )
              })}
            </Field>
          </span>
          {isAuth ? (
            <Button size="lg" type="submit">
              Add a hack{" "}
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
        </Form>
      </Formik>
    </div>
  )
}

export default AddHack
