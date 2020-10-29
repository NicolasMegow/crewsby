import React, { useState, useRef } from "react"
import { Row, Col, Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"

import { useFormik } from "formik"
import formStyles from "../../styles/form.module.scss"

const Waitlist = () => {
  const [signupState, setSignup] = useState(false)
  const btnRef = useRef()
  const formik = useFormik({
    initialValues: {
      Name: "",
      EMail: "",
    },
    onSubmit: values => {
      sendSignup(values)
      setSignup(true)
      btnRef.current.setAttribute("disabled", "disabled")
    },
  })

  const sendSignup = async signupData => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("waitlist"), {
        data: { signupData },
      })
    )
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md>
            <span>
              <input
                id="Name"
                name="Name"
                type="text"
                placeholder="your name"
                aria-label="text-form"
                onChange={formik.handleChange}
                value={formik.values.Name}
                className={formStyles.formfield}
              />
            </span>
          </Col>
          <Col md>
            <span>
              <input
                id="EMail"
                name="EMail"
                type="email"
                placeholder="your.email@domain.com"
                aria-label="text-form"
                onChange={formik.handleChange}
                value={formik.values.EMail}
                className={formStyles.formfield}
              />
            </span>
          </Col>
          <Col md>
            <Button type="submit" ref={btnRef} variant="primary" size="lg">
              Join the waitlist
            </Button>
          </Col>
        </Row>
      </form>
      <Row>
        <Col>
          <p>
            {signupState ? (
              <strong>
                Welcome on board! You'll receive a welcome email soon.
              </strong>
            ) : null}
          </p>
        </Col>
      </Row>
    </>
  )
}

export default Waitlist
