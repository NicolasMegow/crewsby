import React, { useState, useRef } from "react"
import { Row, Col, Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"

import { useFormik } from "formik"
import appStyles from "../../styles/app.module.scss"

const EmailSignup = () => {
  const [signupState, setSignup] = useState(false)
  const btnRef = useRef()
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
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
      q.Create(q.Collection("signup"), {
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
                className={appStyles.formfield}
              />
            </span>
          </Col>
          <Col md>
            <span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@domain.com"
                aria-label="text-form"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={appStyles.formfield}
              />
            </span>
          </Col>
          <Col md>
            <Button type="submit" ref={btnRef} className="btn btn-lg">
              Find me a crew
            </Button>
          </Col>
        </Row>
      </form>
      <Row>
        <Col>
          <p>
            {signupState ? (
              <strong>
                Welcome! We've received your info and are off to work. We'll
                send you everything you need soon to get you started. <br></br>
                Thank you for training with us!
              </strong>
            ) : null}
          </p>
        </Col>
      </Row>
    </>
  )
}

export default EmailSignup
