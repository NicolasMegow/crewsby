import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import "../../styles/switch.css"

export const FieldTitle = styled.p`
  line-height: 1;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
`

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
