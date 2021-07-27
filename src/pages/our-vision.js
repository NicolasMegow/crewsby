/** @jsx jsx */
import { jsx, Flex, Box, Grid, Text } from "theme-ui"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SeoComp from "../components/shared/seo"

import Emoji from "../components/shared/emoji"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Teamboat from "../img/svg/EinBoot.svg"

export const query = graphql`
  query {
    imageLili: file(relativePath: { eq: "crew/LI_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNici: file(relativePath: { eq: "crew/NM_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const OurVisionPage = ({ data }) => {
  return (
    <Layout>
      <SeoComp title="Our vision" />
      <Box sx={{ maxWidth: "56rem" }}>
        <Box>
          <Flex style={{ alignItems: "flex-end" }}>
            <span>
              <h1>Culture by the crew for the crew.</h1>
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
          <h2>
            We <Emoji symbol="❤️" label="love" /> culture.
          </h2>
          <p>
            Culture creates a place to belong. Everybody deserves this
            connection at work. We believe that change can only come from the
            crew itself. Learning to fish is so much more fun than just getting
            a fish. It is our mission to provide actionable resources for you to
            change gracefully. We scout the web for amazing ideas and best
            practices from which we design tutorials & exercises.
          </p>
        </Box>
        <Grid gap={2} columns={[1, null, 2]}>
          <Box
            style={{
              margin: "2rem 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Img
              fluid={data.imageLili.childImageSharp.fluid}
              alt="Lilian Izsak"
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
            />
            <p style={{ marginBottom: "0" }}>
              <strong>Lilian Izsak</strong>
              <br></br>Lili is a happiness engineer <br></br>with a sixth sense
              for details.
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
            style={{
              margin: "2rem 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Img
              fluid={data.imageNici.childImageSharp.fluid}
              alt="Nicolas Megow"
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                margin: "1rem",
              }}
            />
            <p style={{ marginBottom: "0" }}>
              <strong>Nicolas Megow</strong>
              <br></br>Nicolas is a team coach <br></br>& a bookworm.
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
              <a
                href="https://github.com/NicolasMegow/crewsby"
                target="_blank"
                rel="noreferrer noopener"
              >
                → Join us on github
              </a>
            </p>
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default OurVisionPage
