import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialIcons = () => {
  return (
    <>
      <a
        href={`https://www.linkedin.com/company/crewsby/`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" fixedWidth />
      </a>
      <a
        href={`https://twitter.com/crewsbyteams`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <FontAwesomeIcon
          icon={["fab", "twitter-square"]}
          size="2x"
          fixedWidth
        />
      </a>
    </>
  )
}

export default SocialIcons
