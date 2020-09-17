import React, { useState, useEffect, useRef } from "react"
import { Row, Col, Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"

import { TextField, ChoiceChips } from "../form-fields"

const CheckinForm = () => {
  const [logData, setCheckin] = useState([])
  const [logState, setState] = useState(false)
  const btnRef = useRef()
  const handleCallback = (name, info) => {
    setCheckin(prevState => ({
      ...prevState,
      [name]: info,
    }))
  }
  const sendLog = async userData => {
    const fauna_secret = process.env.GATSBY_FAUNA_FEEDBACK
    const client = new faunadb.Client({ secret: fauna_secret })
    await client.query(
      q.Create(q.Collection("log"), {
        data: { userData },
      })
    )
  }
  return (
    <>
      <Row style={{ marginTop: "4rem" }}>
        <Col>
          <p></p>
          <p></p>
        </Col>
      </Row>
    </>
  )
}

export default CheckinForm
