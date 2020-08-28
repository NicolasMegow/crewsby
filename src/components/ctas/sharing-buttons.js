import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Emoji from "../shared/emoji"

const SharingButton = ({ link, message }) => {
  return (
    <div
      style={{
        background: "#78A9f7",
        display: "flex",
        alignItems: "center",
        color: "#ffffff",
        padding: "2rem",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <p style={{ marginBottom: "0", fontWeight: "bold", fontSize: "1.6rem" }}>
        Teile diese Übung mit der Welt{"  "}
        <Emoji symbol="👉" label="share" />
        {"  "}
      </p>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          link
        )}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="3x"
          fixedWidth
          color="#ffffff"
        />
      </a>
      <a
        href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
          message
        )}&url=${encodeURIComponent(link)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <FontAwesomeIcon
          icon={["fab", "twitter-square"]}
          size="3x"
          fixedWidth
          color="#ffffff"
        />
      </a>
    </div>
  )
}

export default SharingButton
