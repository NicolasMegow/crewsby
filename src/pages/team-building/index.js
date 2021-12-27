/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import SeoComp from "../../components/shared/seo";

import Emoji from "../../components/shared/emoji";
import ExerciseItem from "../../components/shared/exercise-item";
import SubscribeForm from "../../components/ctas/subscribe";

export const query = graphql`
  query {
    allMdx(filter: { fields: { contentType: { eq: "team-building" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            job
            category
            time
            level
          }
        }
      }
    }
  }
`;

function SortAlphabet(x, y) {
  if (x.node.frontmatter.title < y.node.frontmatter.title) {
    return -1;
  }
  if (x.node.frontmatter.title > y.node.frontmatter.title) {
    return 1;
  }
  return 0;
}

const TeambuildingPage = ({ data }) => {
  const sorted = data.allMdx.edges.sort(SortAlphabet);
  return (
    <Layout>
      <SeoComp title="Team building" />
      <Box sx={{ maxWidth: "56rem" }}>
        <h1>
          <Emoji symbol="🔋" label="battery" />
          <br></br>
          Team building fuels your daily labor.
        </h1>
        <Text variant="subtitle">
          Team building is continuous work. Pick & choose what you need, when
          you need it. <br></br>All exercises are designed for crews of 4-8
          people.
        </Text>
        <Box sx={{ mt: 3 }}>
          <h2> {data.allMdx.edges.length} exercises:</h2>
          {sorted.map((exercise, i) => {
            return <ExerciseItem key={i} edge={exercise} />;
          })}
        </Box>
      </Box>
      <SubscribeForm />
    </Layout>
  );
};

export default TeambuildingPage;
