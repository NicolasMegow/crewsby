/** @jsx jsx */
import { jsx, Flex, Box, Grid, Text, Link } from "theme-ui";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/layout";
import SeoComp from "../components/shared/seo";
import Emoji from "../components/shared/emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAR } from "../components/shared/fa-icons";
import Teamboat from "../images/svg/EinBoot.svg";

const OurVisionPage = () => {
  return (
    <Layout>
      <SeoComp title="Our vision" />
      <Box sx={{ maxWidth: "56rem" }}>
        <Box>
          <Flex style={{ alignItems: "flex-end" }}>
            <span>
              <h1>
                <Emoji symbol="❤️" label="heart" /> &{" "}
                <Emoji symbol="💡" label="idea" />
                <br></br>
                Nurturing & innovative workplaces.
              </h1>
              <Text variant="subtitle">
                You are sitting in the same boat as your colleagues. <br></br>
                Crewsby helps you to make the most out of the ride.
              </Text>
            </span>
          </Flex>
          <Flex style={{ alignItems: "center" }}>
            <Teamboat width="100%" height="18rem" />
          </Flex>
        </Box>
        <Box style={{ marginTop: "4rem" }}>
          <h2>Access the genius of smarter people.</h2>
          <p className="subtitle">
            We curate the best ideas & practices to design tools for you. Here
            are the giants on whose shoulders we stand:
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
          <p>
            We are currently working on a better way to express our
            appreciation. Any suggestions?
          </p>
        </Box>
        <Box sx={{ mt: "4rem", maxWidth: "56rem" }}>
          <h2>Culture by the crew for the crew.</h2>
          <p>
            Culture creates a place to belong. Everybody deserves this
            connection at work. We believe that change can only come from the
            crew itself. Learning to fish is so much more fun than just getting
            a fish. It is our mission to provide actionable resources for you to
            change gracefully. We scout the web for amazing ideas and best
            practices from which we design tutorials & exercises.
          </p>
        </Box>
        <Grid gap={2} columns={[1, 2, 4]}>
          <Box
            sx={{
              my: 2,
            }}
          >
            <StaticImage
              src="../images/crew/LI_square.jpg"
              alt="Lilian Izsak"
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
              <strong>Lilian Izsak</strong>
              <br></br>Lili is a happiness engineer with a sixth sense for
              details.
              <br></br>
              <a
                href="https://www.linkedin.com/in/lilian-izsak/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>{" "}
              <a
                href="https://twitter.com/lili07marie"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
              </a>
            </p>
          </Box>
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
              <strong>Nicolas Megow</strong>
              <br></br>Nicolas is a team coach & a bookworm.
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
            <h3>Share & adapt</h3>
            <p>
              Our exercises are yours to use. Adapt them to your needs & share
              them with your friends.
            </p>
          </Box>
          <Box className="area-white">
            {" "}
            <div style={{ fontSize: "2.4rem" }}>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
            <h3>Contributions welcome!</h3>
            <p>
              We'd love to include your ideas & practices.
              <br></br>
              <Link
                href="https://github.com/NicolasMegow/crewsby"
                target="_blank"
                rel="noreferrer noopener"
                variant="textButton"
              >
                <FaAR /> Join us
              </Link>
            </p>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

export default OurVisionPage;
