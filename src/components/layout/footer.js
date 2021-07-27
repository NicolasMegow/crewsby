/** @jsx jsx */
import { jsx, Flex, Box, Link, Divider } from "theme-ui"
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
      <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <strong>Crewsby © 2020 </strong>
        </Box>
        <Box>
          <SocialIcons />
        </Box>
        <Box>
          <Link to="/imprint" variant="footer" as={GatsbyLink}>
            Imprint
          </Link>
          <Link to="/privacy" variant="footer" as={GatsbyLink}>
            Privacy
          </Link>
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
