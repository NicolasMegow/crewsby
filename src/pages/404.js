/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

import Layout from "../components/layout/layout";
import SeoComp from "../components/shared/seo";
import Emoji from "../components/shared/emoji";

const NotFound = () => {
  return (
    <Layout>
      <SeoComp title="404" />
      <Box sx={{ maxWidth: "56rem" }}>
        <h1>
          <Emoji symbol="🕳️" label="gone" />
        </h1>
        <h1>Something went missing here...</h1>
        <p
          style={{
            fontSize: "1.4rem",
            marginBottom: "2rem",
          }}
        >
          We're terribly sorry for this dead end! Please continue from our
          homepage.
        </p>
        <Button to="/" as={GatsbyLink} variant="primary">
          → To the homepage
        </Button>
      </Box>
    </Layout>
  );
};

export default NotFound;
