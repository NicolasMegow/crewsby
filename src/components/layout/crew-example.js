import React from "react"
import Emoji from "../shared/emoji"

const CrewRow = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "4rem",
      }}
    >
      <span style={{ textAlign: "center" }}>
        <h1>
          <Emoji symbol="👩🏾‍🦱" label="crew-1" />
        </h1>
        <strong>Amira</strong>
        <p>
          IT-Security Teamlead <br></br>Egypt
        </p>
      </span>
      <span style={{ textAlign: "center" }}>
        <h1>
          <Emoji symbol="🧔🏼" label="crew-2" />
        </h1>
        <strong>Karl</strong>
        <p>
          Engineering Manager <br></br> Germany
        </p>
      </span>
      <span style={{ textAlign: "center" }}>
        <h1>
          <Emoji symbol="👩🏻‍🦰" label="crew-3" />
        </h1>
        <strong>Bobbie</strong>
        <p>
          DevOps Manager<br></br>UK
        </p>
      </span>
      <span style={{ textAlign: "center" }}>
        <h1>
          <Emoji symbol="👨‍🦲" label="crew-3" />
        </h1>
        <strong>& YOU</strong>
        <p>
          Continuous learner<br></br>anywhere
        </p>
      </span>
    </div>
  )
}

export default CrewRow
