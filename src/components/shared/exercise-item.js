/** @jsx jsx */
import { jsx, Flex, Box, Link, Badge } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExerciseItem = ({ edge }) => {
  const { slug } = edge.node.fields
  const { title, job, category, time, level } = edge.node.frontmatter

  return (
    <Link
      to={slug}
      as={GatsbyLink}
      sx={{
        width: "100%",
        padding: 2,
        display: "block",
        borderBottomWeight: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "muted",
      }}
    >
      <Flex style={{ justifyContent: "space-between" }}>
        <Box>
          <h3 sx={{ my: "0" }}>{title}</h3>
          <p sx={{ my: "0" }}>{job}</p>
        </Box>
        <Box style={{ textAlign: "right" }}>
          <p sx={{ my: "0" }}>
            <Badge variant="outline">{category}</Badge>
            <br></br>
            <FontAwesomeIcon
              icon={["fas", "hourglass-half"]}
              fixedWidth
              size="sm"
            />
            {time} •{" "}
            <FontAwesomeIcon icon={["fas", "fire-alt"]} fixedWidth size="sm" />
            {level}
          </p>
        </Box>
      </Flex>
    </Link>
  )
}

export default ExerciseItem
