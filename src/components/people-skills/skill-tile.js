import React from "react"
import { Link } from "gatsby"

import { css } from "@emotion/core"
import Emoji from "../shared/emoji"

const SkillTile = ({ edge }) => {
  const { slug } = edge.node.fields
  const { skill, category, method, sources } = edge.node.frontmatter

  return (
    <Link
      to={slug}
      css={css`
        width: 22rem;
        color: #151515;
        border-radius: 6px;
        padding: 1rem;
        margin: 0.5rem;
        display: block;
        border: 1px solid #151515;
        text-decoration: none;
        & :hover {
          border-color: #4285f4;
          color: #4285f4;
        }
      `}
    >
      <h3>{skill}</h3>
      <p style={{ marginBottom: 0 }}>
        {category === "workflows" ? (
          <Emoji symbol="💪" label="muscle" />
        ) : (
          <Emoji symbol="❤️" label="heart" />
        )}{" "}
        {method}
        <br></br>
        <small>{sources.join(" • ")}</small>
      </p>
    </Link>
  )
}

export default SkillTile
