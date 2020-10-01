import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import faunadb, { query as q } from "faunadb"

import { TextArea, NumberInput } from "../shared/form-fields"

const CheckinForm = ({ setDone, behavior }) => {
  const [checkinData, setCheckin] = useState([])
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
      <div style={{ margin: "2rem 0" }}>
        <h3>Check in</h3>
        <NumberInput
          name="behavior"
          question={`How many ${behavior[0]} have you ${behavior[1]}?`}
          range={[0, 20]}
        />
        <TextArea
          name="obstacle"
          question="What was your biggest obstacle?"
          placeholder="?"
          handleCallback={handleCallback}
        />
        <TextArea
          name="learning"
          question="What have you noticed?"
          placeholder="??"
          handleCallback={handleCallback}
        />
        <TextArea
          name="goals"
          question="What are your goals next week?"
          placeholder="1 - 2 - 3"
          handleCallback={handleCallback}
        />
      </div>
      <div>
        <Button onClick={() => setDone(true)}>Submit</Button>
      </div>
    </>
  )
}

export default CheckinForm
