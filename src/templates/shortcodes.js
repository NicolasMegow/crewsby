import React from "react"
import { Link } from "gatsby"

import Emoji from "../components/shared/emoji"
import Video from "../components/shared/video"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const shortcodes = {
  Emoji,
  Video,
  Link,
  FontAwesomeIcon,
  h2: props => <h2 {...props} style={{ marginTop: "4rem" }} />,
  td: props => (
    <td {...props} style={{ border: "1px solid #151515", padding: ".4rem" }} />
  ),
  th: props => <th {...props} style={{ padding: ".4rem", color: "#4285f4" }} />,
  table: props => (
    <table {...props} style={{ marginTop: ".5rem", marginBottom: "2rem" }} />
  ),
}

// img with subtitle
// inhaltsverzeichnes
// definitionsbox
