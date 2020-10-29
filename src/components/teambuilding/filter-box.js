import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FilterBox({ heading, data, filters, setFilters }) {
  return (
    <div>
      <h3>{heading}</h3>
      {data.map(([c, count]) => (
        <ul key={c} style={{ margin: "0.5rem 0", paddingInlineStart: "0" }}>
          <button
            onClick={() => {
              if (filters.has(c)) {
                filters.delete(c)
                setFilters(filters)
              } else {
                setFilters(filters.add(c))
              }
            }}
            style={{ display: "flex", alignItems: "center", width: "14rem" }}
          >
            <div style={{ fontSize: "1.2rem" }}>
              {filters.has(c) ? (
                <FontAwesomeIcon
                  icon={["fas", "check"]}
                  mask={["fas", "square"]}
                  transform="shrink-6"
                />
              ) : (
                <FontAwesomeIcon icon={["fal", "square"]} />
              )}
            </div>
            <div
              style={{
                marginRight: "auto",
                marginLeft: ".4rem",
                fontSize: "1.2rem",
              }}
            >
              {c}
            </div>
            <div style={{ fontSize: "1.2rem" }}>{count}</div>
          </button>
        </ul>
      ))}
    </div>
  )
}
