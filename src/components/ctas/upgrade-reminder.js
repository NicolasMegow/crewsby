import React from "react"
import { Link } from "gatsby"

import Emoji from "../shared/emoji"

const UpgradeReminder = ({ variant }) => {
  const vText = {
    teambuilding: "get customized recommendations & combos",
    peopleskills: "access dedicated peer support",
  }
  return (
    <Link to="../pricing">
      → Upgrade to {vText[variant]} with Crewsby Teams for $49/month flat.
    </Link>
  )
}

export default UpgradeReminder
