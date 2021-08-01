/** @jsx jsx */
import { jsx, Grid, Box, Flex, Link, Divider } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

import SocialIcons from "../shared/social-icons"

const Footer = () => {
  return (
    <footer
      sx={{
        width: "100%",
        maxWidth: "1260px",
        mt: 3,
        pb: 2,
        px: 2,
      }}
    >
      <Divider />
      <Grid gap={2} columns={[2, null, 3]} sx={{}}>
        <Box>
          <strong>Crewsby</strong>
        </Box>
        <Flex
          sx={{
            justifyContent: "space-around",
            "@media screen and (max-width: 52em)": {
              justifyContent: "flex-end",
            },
          }}
        >
          <SocialIcons />
        </Flex>
        <Box
          sx={{
            textAlign: "right",
            "@media screen and (max-width: 52em)": {
              textAlign: "left",
            },
          }}
        >
          <Link to="/imprint" variant="footer" as={GatsbyLink}>
            Imprint
          </Link>
          <Link to="/privacy" variant="footer" as={GatsbyLink} sx={{ ml: 2 }}>
            Privacy
          </Link>
        </Box>
      </Grid>
    </footer>
  )
}

export default Footer
