import React from "react"
import { Link } from "gatsby"

const CheckinResults = ({ results, behavior }) => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <h3>Results</h3>
      <p>
        Last week you {behavior[1]} {results["behavior"]} {behavior[0]}
      </p>
      <p>
        <strong>Biggest obstacle:</strong>
        <br></br>
        {results["obstacle"]}
      </p>
      <p>
        <strong>Learning:</strong>
        <br></br> {results["learning"]}
      </p>
      <p>
        <strong>Goals:</strong>
        <br></br> {results["goals"]}
      </p>
    </div>
  )
}

export default CheckinResults
