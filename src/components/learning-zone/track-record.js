import React from "react"
import { formatDate } from "../shared/timetravel"

const TrackRecord = ({ logData }) => {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ padding: "1rem" }}>Your track record:</h3>
        {Object.entries(logData)
          .reverse()
          .map((hack, i) => {
            if (typeof hack[1] === "string") {
              return (
                <p key={i} className="area-white">
                  <strong>{hack[1]}</strong> • {formatDate(new Date(hack[0]))}
                </p>
              )
            }
            return (
              <div key={i} className="area-white">
                <p>
                  <strong>Self-review</strong> • {hack[1]["Week"]}
                </p>
                <p>
                  <strong>{hack[1]["Activity"]}:</strong> {hack[1]["Behavior"]}x
                  <br></br>
                  <strong>Obstacle:</strong> {hack[1]["Obstacle"]}
                  <br></br>
                  <strong>Learnings:</strong> {hack[1]["Learnings"]}
                  <br></br>
                  <strong>Goals:</strong> {hack[1]["Goals"]}
                  <br></br>
                </p>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default TrackRecord
