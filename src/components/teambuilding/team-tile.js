import React from "react"
import { Link } from "gatsby"

import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Emoji from "../shared/emoji"

const TeamTile = ({ edge }) => {
  const { slug } = edge.node.fields
  const { hack, type, category, job, time, crewsize } = edge.node.frontmatter

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
      <h3>{hack}</h3>
      <p style={{ marginBottom: 0 }}>{job}</p>
      <p style={{ marginBottom: 0 }}>
        {category === "Workflow" ? (
          <Emoji symbol="💪" label="muscle" />
        ) : (
          <Emoji symbol="❤️" label="heart" />
        )}{" "}
        {type}
        {"  "}
        <br></br>
        {crewsize}{" "}
        <FontAwesomeIcon
          icon={["fas", "users"]}
          style={{ marginRight: "1rem" }}
        />
        {"  "}
        {time} <FontAwesomeIcon icon={["fas", "hourglass-half"]} />
      </p>
    </Link>
  )
}

export default TeamTile
