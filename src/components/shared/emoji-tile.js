import React from "react"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"
import Emoji from "./emoji"
import appStyles from "../../styles/app.module.scss"

const EmojiTile = ({ edge, info }) => {
  const { slug, contentType } = edge.node.fields
  const { title, emojis, excerpt, type } = edge.node.frontmatter

  const type_dict = {
    "solo-training": "Solo",
    teamentwicklung: "Team",
  }

  return (
    <Col md={6} lg={4} className={appStyles.menuItem}>
      <Link to={`/${type}/${contentType}/${slug}`}>
        {emojis.map((emoji, i) => {
          return <Emoji symbol={emoji[0]} label={emoji[1]} key={i} />
        })}
        {info === "true" ? (
          <p
            style={{
              float: "right",
              fontSize: "1rem",
              lineHeight: 1.2,
              marginBottom: "0",
            }}
          >
            {type_dict[type]}
          </p>
        ) : null}
        <h3>{title}</h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.2,
            marginBottom: "0",
          }}
        >
          {excerpt}
        </p>
      </Link>
    </Col>
  )
}

export default EmojiTile
