import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const FieldTitle = styled.p`
  font-size: 1.2rem;
  line-height: 1;
  margin-bottom: 0.5;
  margin-top: 2rem;
`

export const TextField = ({ name, placeholder, handleCallback }) => {
  const [input, setInput] = useState("")
  const handleChange = event => {
    const value = event.target.name.split(" ")[1]
    setInput({ [value]: event.target.value })
  }
  useEffect(() => {
    handleCallback(name, input)
  }, [input, name, handleCallback])
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
