/** @jsx jsx */
import { jsx, Box, Flex, Grid, Text } from "theme-ui";
// import { Link as GatsbyLink } from "gatsby";

import Layout from "../components/layout/layout";
import SeoComp from "../components/shared/seo";

import { FaCheck } from "../components/shared/fa-icons";
import Teamboat from "../images/svg/EinBoot.svg";

import SubscribeForm from "../components/ctas/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <SeoComp title="The team gym" />
      <Box sx={{ maxWidth: "56rem" }}>
        <Flex style={{ alignItems: "center" }}>
          <Teamboat width="100%" height="18rem" />
        </Flex>
        <h1>Nurture your teamwork.</h1>
        <Text variant="subtitle">
          You are sitting in the same boat, so make the most out of the ride.
          Use Crewsby's free activities for DIY team building with your crew.
        </Text>
        <Grid gap={2} columns={[null, 1, 3]} sx={{ mt: 3, mb: 3 }}>
          <Box>
            <p style={{ marginBottom: "0" }}>
              <span sx={{ fontWeight: "bold", fontSize: 1 }}>
                <FaCheck /> Improve by doing
              </span>
            </p>
          </Box>
          <Box>
            <p style={{ marginBottom: "0" }}>
              <span sx={{ fontWeight: "bold", fontSize: 1 }}>
                <FaCheck /> On the job
              </span>
            </p>
          </Box>
          <Box>
            <p style={{ marginBottom: "0" }}>
              <span sx={{ fontWeight: "bold", fontSize: 1 }}>
                <FaCheck /> Remote & on site
              </span>
            </p>
          </Box>
        </Grid>
        <Box style={{ marginTop: "4rem" }}>
          <h2>Insights from experts.</h2>
          <p className="subtitle">
            Crewsby designs activities based on a curation of the best ideas &
            findings. Here are the giants on whose shoulders you could stand:
          </p>
          <p>
            <strong>
              Ken Blanchard • Chip Conley • John Doerr • Amy Edmundson • Tasha
              Eurich • Atul Gawande • Adam Grant • Jeremy Gutsche • Gary Hamel •
              Ben Horrowitz • Tom Kelley • Fredic Laloux • Patrick Lencioni •
              Vittorio Loreto • Fredrick G. Pferdt • Max De Pree • Edgar Schein
              • F. Schulz von Thun • Kim Scott • Simon Sinek • J.J. Sutherland •
              Karl Weick • Tom Wujec
            </strong>
          </p>
        </Box>
      </Box>
      <SubscribeForm />
    </Layout>
  );
};

export default IndexPage;
