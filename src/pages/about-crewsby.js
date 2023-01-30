/** @jsx jsx */
import { jsx, Flex, Box, Grid, Text, Link } from "theme-ui";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/layout";
import SeoComp from "../components/shared/seo";
import Emoji from "../components/shared/emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAR } from "../components/shared/fa-icons";

const AboutPage = () => {
  return (
    <Layout>
      <SeoComp title="About Crewsby" />
      <Box sx={{ maxWidth: "56rem", mt: 3 }}>
        <Box>
          <Flex style={{ alignItems: "flex-end" }}>
            <span>
              <h1>
                <Emoji symbol="❤️" label="heart" />
                <br></br>
                Nurturing workplaces.
              </h1>
              <Text variant="subtitle">
                Work is part of life. So are the crews we work with. Team
                building is the best investment for a happy and healthy life. We
                believe that real improvement can only come from the crew
                itself.
              </Text>
            </span>
          </Flex>
        </Box>

        <Box style={{ marginTop: "4rem" }}>
          <h2>Crewsby is open source.</h2>
        </Box>
        <Grid gap={2} columns={[1, null, 2]}>
          <Box className="area-white">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <FontAwesomeIcon icon={["fab", "creative-commons"]} />{" "}
              <FontAwesomeIcon icon={["fab", "creative-commons-by"]} />{" "}
            </div>
            <h3>Share & adapt.</h3>
            <p>
              All activities are yours to use. Adapt them to your needs & share
              them however you see fit.
            </p>
          </Box>
          <Box className="area-white">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
            <h3>Contribute.</h3>
            <p>
              I'd love to include your ideas & activities.
              <br></br>
              <Link
                href="https://github.com/NicolasMegow/crewsby"
                target="_blank"
                rel="noreferrer noopener"
                variant="textButton"
              >
                <FaAR /> Chip in
              </Link>
            </p>
          </Box>
        </Grid>
        <Box sx={{ mt: "4rem", maxWidth: "56rem" }}>
          <h2>Get in touch.</h2>
        </Box>
        <Grid gap={2} columns={[1, 2, 3]}>
          <Box
            sx={{
              my: 2,
            }}
          >
            <StaticImage
              src="../images/crew/NM_square.jpg"
              alt="Nicolas Megow"
              sx={{
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
              placeholder="blurred"
              layout="fixed"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ my: "auto" }}>
            <p style={{ marginBottom: "0" }}>
              <strong>Hi, I'm Nicolas.</strong>
              <br></br>I've been coaching teams since 2014. Currently, I'm a
              Scrum Master for three squads.
              <br></br>
              <a
                href="https://www.linkedin.com/in/nicolas-megow/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>{" "}
              <a
                href="http://github.com/NicolasMegow/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
              >
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
              </a>
            </p>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default AboutPage;
