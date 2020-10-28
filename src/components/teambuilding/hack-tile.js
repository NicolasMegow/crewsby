import React from "react"
import { Link } from "gatsby"

import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HackTile = ({ edge }) => {
  const { slug } = edge.node.fields
  const { hack, type, job, time, crewsize } = edge.node.frontmatter

  return (
    <Link
      to={slug}
      css={css`
        width: 32rem;
        color: #151515;
        border-radius: 6px;
        padding: 1rem;
        margin: 1rem;
        display: block;
        text-decoration: none;
        background: #ebebeb;
        & :hover {
          background: #d9e6fc;
          color: #151515;
        }
      `}
    >
      <h3>{hack}</h3>
      <p style={{ marginBottom: 0 }}>{job}</p>
      <p style={{ marginBottom: 0 }}>
        {type} • {crewsize}{" "}
        <FontAwesomeIcon icon={["fas", "users"]} fixedWidth /> • {time}{" "}
        <FontAwesomeIcon icon={["fas", "hourglass-half"]} />
      </p>
    </Link>
  )
}

export default HackTile
