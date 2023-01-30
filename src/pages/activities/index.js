/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import SeoComp from "../../components/shared/seo";

import Teambuilding from "../../images/svg/Teambuilding.svg";
import ExerciseItem from "../../components/shared/exercise-item";
import SubscribeForm from "../../components/ctas/subscribe";

export const query = graphql`
  query {
    allMdx(
      filter: { fields: { contentType: { eq: "team-building" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      nodes {
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
`;

const ActivitiesPage = ({ data }) => {
  const sorted = data.allMdx.nodes;
  return (
    <Layout>
      <SeoComp title="Team building activities" />
      <Box sx={{ maxWidth: "56rem", mt: 3 }}>
        <h1>
          <Teambuilding width="100%" height="12rem" />
          <br></br>
          Team building is your journey.
        </h1>
        <Text variant="subtitle">
          Pick & choose what you need, when you need it. All activities are
          designed for crews of 4-8 people.
        </Text>
        <Box sx={{ mt: 3 }}>
          <h2> {data.allMdx.nodes.length} activities:</h2>
          {sorted.map((exercise, i) => {
            return <ExerciseItem key={i} edge={exercise} />;
          })}
        </Box>
      </Box>
      <SubscribeForm />
    </Layout>
  );
};

export default ActivitiesPage;
