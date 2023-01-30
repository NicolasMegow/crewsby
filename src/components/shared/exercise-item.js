/** @jsx jsx */
import { jsx, Grid, Box, Link, Badge } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExerciseItem = ({ edge }) => {
  const { slug } = edge.fields;
  const { title, job, category, time, level } = edge.frontmatter;

  return (
    <Link
      to={`.${slug}`}
      as={GatsbyLink}
      sx={{
        width: "100%",
        padding: 2,
        display: "block",
        borderBottomWeight: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "text",
      }}
    >
      <Grid gap={2} columns={[1, 2, null]} sx={{}}>
        <Box>
          <h3 sx={{ my: "0" }}>{title}</h3>
          <p sx={{ my: "0" }}>{job}</p>
        </Box>
        <Box
          sx={{
            textAlign: "right",
            "@media screen and (max-width: 40em)": {
              textAlign: "left",
            },
          }}
        >
          <Badge variant="primary">{category}</Badge>
          <br></br>
          <FontAwesomeIcon icon={["fas", "stopwatch"]} fixedWidth size="sm" />
          {time} •{" "}
          <FontAwesomeIcon icon={["fas", "fire-alt"]} fixedWidth size="sm" />
          {level}
        </Box>
      </Grid>
    </Link>
  );
};

export default ExerciseItem;
