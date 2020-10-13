import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SharingButton = ({ link, message }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <p style={{ marginBottom: "0", fontSize: "1.4rem" }}>
        Share {message} with the world 🡒
      </p>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          link
        )}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
        style={{ marginLeft: ".5rem" }}
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          fixedWidth
          color="#4285F4"
        />
      </a>
      <a
        href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
          message
        )}&url=${encodeURIComponent(link)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
        style={{ marginLeft: ".5rem" }}
      >
        <FontAwesomeIcon
          icon={["fab", "twitter-square"]}
          size="2x"
          fixedWidth
          color="#4285F4"
        />
      </a>
    </div>
  )
}

export default SharingButton
