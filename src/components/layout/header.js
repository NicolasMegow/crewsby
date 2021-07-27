/** @jsx jsx */
import { jsx, Flex, Box, Link, MenuButton } from "theme-ui"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"

import CrewsbyLogo from "../../img/svg/Crewsby_Logo.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header
      sx={{
        width: "100%",
        maxWidth: "1260px",
        p: 2,
        bg: "background",
        position: "fixed",
        zIndex: "1",
        top: "0",
      }}
    >
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Flex>
          <Link
            to="/"
            as={GatsbyLink}
            variant="logo"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CrewsbyLogo width="100px" height="60px" />
            {data.site.siteMetadata.title}
          </Link>
        </Flex>
        <Box>
          <Link variant="nav" to="/team-building" as={GatsbyLink}>
            Team building
          </Link>
          <p
            sx={{
              lineHeight: "2.8",
              fontWeight: "500",
              pl: 2,
              py: 0,
              m: 0,
              display: "inline",
            }}
          >
            |
          </p>
          <Link variant="nav" to="/our-vision" as={GatsbyLink}>
            Our vision
          </Link>
        </Box>
      </Flex>
    </header>
  )
}

export default Header
