import React, { useState, useEffect, useRef } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import faunadb, { query as q } from "faunadb"

import ChoiceChips from "./choice-chips"

const FieldTitle = styled.p`
  font-size: 1.2rem;
  line-height: 1;
  margin-bottom: 0.5;
  margin-top: 2rem;
`

const TextField = ({ name, placeholder, handleCallback }) => {
  const [input, setInput] = useState("")
  const handleChange = event => {
    const value = event.target.name.split(" ")[1]
    setInput({ [value]: event.target.value })
  }
  useEffect(() => {
    handleCallback(name, input)
  }, [input])
  return (
    <span>
      <FieldTitle>
        <label>{name}</label>
      </FieldTitle>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        aria-label="text-form"
        css={css`
          border: 1px solid #151515;
          border-radius: 6px;
          padding: 0.6rem;
          margin-right: 1rem;
          margin-bottom: 2rem;
          font-size: 1.2rem;
          font-weight: bold;
          color: #4285f4;
          width: 100%;
          max-width: 24rem;
          ::placeholder {
            color: #78a9f7;
          }
        `}
      />
    </span>
  )
}

const SetSignup = () => {
  const [signupData, setSignup] = useState([])
  const [signupState, setState] = useState(false)
  const btnRef = useRef()
  const handleCallback = (name, info) => {
    setSignup(prevState => ({
      ...prevState,
      [name]: info,
    }))
  }
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
    <>
      <Row>
        <Col md={4}>
          <TextField
            name="Dein Name"
            placeholder="Max Mustermann"
            handleCallback={handleCallback}
          />
        </Col>
        <Col md={4}>
          <TextField
            name="Deine E-Mail"
            placeholder="Max@Mustermann.com"
            handleCallback={handleCallback}
          />
        </Col>
        <Col md={4}>
          <TextField
            name="Dein Job-Title"
            placeholder="New Venture Manager"
            handleCallback={handleCallback}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FieldTitle>Welche Sets möchtest Du buchen?</FieldTitle>
          <ChoiceChips
            name="set-choices"
            options={[
              "Kanban: Abläufe verbessern",
              "Radical Candor: Konflikte meistern",
            ]}
            handleCallback={handleCallback}
          />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <FieldTitle>
            Wann möchtest Du am liebsten mit Deiner Crew lernen?
          </FieldTitle>
          <ChoiceChips
            name="time-choices"
            options={[
              "Morgens (7-9 Uhr)",
              "Mittags (12-14 Uhr)",
              "Abends (17-19 Uhr)",
            ]}
            handleCallback={handleCallback}
          />
        </Col>
        <Col md={6}>
          <FieldTitle>Wann möchtest Du starten?</FieldTitle>
          <ChoiceChips
            name="start-dates"
            options={["07.09.20", "14.09.20", "21.09.20"]}
            handleCallback={handleCallback}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Die Bezahlung erfolgt nach der Hälfte der Sessions per Rechnung.
          </p>
          <Button
            size="lg"
            ref={btnRef}
            onClick={() => {
              sendSignup(signupData)
              btnRef.current.setAttribute("disabled", "disabled")
              setState(true)
            }}
          >
            Anmelden
          </Button>
          <p>
            {signupState ? (
              <strong>
                Willkommen! Wir senden Dir bald Deine Bestätigung und weitere
                Infos zu.
              </strong>
            ) : null}
          </p>
        </Col>
      </Row>
    </>
  )
}

export default SetSignup
