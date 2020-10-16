import React from "react"
import { formatDate } from "../shared/timetravel"

const TrackRecord = ({ logData }) => {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ padding: "1rem" }}>Your track record:</h3>
        {Object.entries(logData).map((hack, i) => {
          return (
            <p key={i} className="area-white">
              <strong>{hack[1]}</strong> • {formatDate(new Date(hack[0]))}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default TrackRecord
