import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

import FilterBox from "./filter-box"
import HackTile from "./hack-tile"

export default class FilteredList extends Component {
  state = {
    filtersType: new Set([]),
    filtersCategory: new Set([]),
  }
  setFiltersType = filtersType => {
    this.props.state.filtersType = filtersType
  }
  setFiltersCategory = filtersCategory => {
    this.props.state.filtersCategory = filtersCategory
  }
  render() {
    const { data } = this.props
    const { filtersType, filtersCategory } = this.props.state
    const { setFiltersType, setFiltersCategory } = this
    return (
      <>
        <Row>
          <Col>
            <FilterBox
              heading="Type"
              data={Array.from(
                count(data.allMdx.edges.map(edge => edge.node.frontmatter.type))
              )}
              filters={filtersType}
              setFilters={setFiltersType}
            />
          </Col>
          <Col>
            <FilterBox
              heading="Category"
              data={Array.from(
                count(
                  data.allMdx.edges.map(edge => edge.node.frontmatter.category)
                )
              )}
              filters={filtersCategory}
              setFilters={setFiltersCategory}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "4rem" }}>
          {data.allMdx.edges.map((hack, i) => {
            return <HackTile key={i} edge={hack} />
          })}
        </Row>
      </>
    )
  }
}

function count(array) {
  const counts = new Map()

  for (const category of array) {
    if (!category) continue

    if (!counts.has(category)) {
      counts.set(category, 0)
    }

    counts.set(category, counts.get(category) + 1)
  }

  return counts
}
