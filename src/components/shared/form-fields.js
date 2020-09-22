import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import "../../styles/switch.css"

export const FieldTitle = styled.p`
  line-height: 1;
  margin-bottom: 0.2rem;
  margin-top: 2rem;
`

export const TextField = ({ name, type, placeholder, handleCallback }) => {
  const [input, setInput] = useState("")
  const handleInputChange = e => {
    setInput(e.target.value)
  }

  useEffect(() => {
    handleCallback(name, input)
  }, [input, name])
  return (
    <span>
      <FieldTitle>
        <label>{name}</label>
      </FieldTitle>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={input}
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

export const TextArea = ({ name, question, placeholder, handleCallback }) => {
  const [input, setInput] = useState("")
  const handleInputChange = e => {
    setInput(e.target.value)
  }
  return (
    <span>
      <FieldTitle>
        <label>{question}</label>
      </FieldTitle>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={input}
        aria-label="text-area"
        css={css`
          border: 1px solid #151515;
          border-radius: 6px;
          padding: 0.6rem;
          font-size: 1.2rem;
          font-weight: bold;
          color: #4285f4;
          width: 100%;
          max-width: 32rem;
          ::placeholder {
            color: #78a9f7;
          }
        `}
      />
    </span>
  )
}

export const NumberInput = ({ name, question, range }) => {
  return (
    <span>
      <FieldTitle>
        <label htmlFor={name}>{question}</label>{" "}
      </FieldTitle>
      <input
        type="number"
        id="behavior"
        name={name}
        min={range[0]}
        max={range[1]}
        placeholder={0}
        aria-label="behavior count"
        css={css`
          ::-webkit-outer-spin-button,
          ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          ::-moz-appearance: textfield; /* Firefox */
          text-align: right;
          border: 1px solid #151515;
          border-radius: 6px;
          padding: 0.6rem;
          font-size: 1.2rem;
          font-weight: bold;
          ::placeholder {
            color: #78a9f7;
          }
        `}
      ></input>
    </span>
  )
}

const Chip = ({ option, id, isChecked, toggleChoice }) => {
  return (
    <div
      css={css`
        display: inline-block;
        margin-right: 1rem;
      `}
    >
      <label
        css={css`
          position: relative;
          cursor: pointer;
          margin: 1rem 0;
          > input {
            display: none;
          }
          > input:checked + span {
            border-color: #4285f4;
            color: #4285f4;
          }
          > span {
            padding: 1rem;
            font-weight: bold;
            border-radius: 2rem;
            border: 1px solid #151515;
          }
        `}
      >
        <input
          type="checkbox"
          id={id}
          name={option}
          value={isChecked}
          aria-label="choice-chips"
          checked={isChecked}
          onChange={event => toggleChoice(event)}
        />
        <span>{option}</span>
      </label>
    </div>
  )
}

export const ChoiceChips = ({ name, options, handleCallback }) => {
  const choiceList = options.reduce((o, key) => ({ ...o, [key]: false }), {})
  const [choices, setChoices] = useState(choiceList)
  const toggleChoice = event => {
    const opti = event.target.name
    const newValue = !choices[opti]
    setChoices(prevState => ({
      ...prevState,
      [opti]: newValue,
    }))
  }
  useEffect(() => {
    handleCallback(name, choices)
  }, [choices, name])

  return (
    <>
      <ul
        style={{
          marginTop: "1rem",
          marginBottom: "2rem",
          marginBlockStart: "0",
          paddingInlineStart: "0",
          listStyleType: "none",
        }}
      >
        {options.map((option, i) => {
          return (
            <li key={i} style={{ display: "inline" }}>
              <Chip
                option={option}
                id={i}
                isChecked={choices[option]}
                toggleChoice={toggleChoice}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const Switch = ({ isOn, handleToggle }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <p style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>locally</p>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        aria-label="switcheroo"
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: isOn && "#4285F4" }}
      >
        <span className={`react-switch-button`} />
      </label>
      <p style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}>globally</p>
    </div>
  )
}
