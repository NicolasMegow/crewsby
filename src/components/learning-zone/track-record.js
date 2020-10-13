import React from "react"

const TrackRecord = ({ logData }) => {
  return (
    <>
      {logData.map((entry, i) => {
        return <p key={i}>{entry}</p>
      })}
    </>
  )
}

export default TrackRecord
