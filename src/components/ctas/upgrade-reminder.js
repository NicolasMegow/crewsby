import React from "react"
import { Link } from "gatsby"

import Emoji from "../shared/emoji"

const UpgradeReminder = ({ variant }) => {
  const vText = {
    teambuilding: "get customized recommendations",
    peopleskills: "access dedicated peer support",
  }
  return (
    <Link to="../pricing">
      → Upgrade to {vText[variant]} with Crewsby Business for $99/month flat.
    </Link>
  )
}

export default UpgradeReminder
