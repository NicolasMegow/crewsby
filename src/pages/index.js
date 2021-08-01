/** @jsx jsx */
import { jsx, Box, Grid, Button, Text } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layout/layout"
import SeoComp from "../components/shared/seo"

import { FaCheck, FaAR } from "../components/shared/fa-icons"
import Emoji from "../components/shared/emoji"
import Zusammenhalt from "../img/svg/Zusammenhalt.svg"
import SubscribeForm from "../components/ctas/subscribe"

const IndexPage = () => {
  return (
    <Layout>
      <SeoComp title="The culture gym" />
      <Box sx={{ maxWidth: "56rem" }}>
        <Zusammenhalt width="100%" height="18rem" />
        <h1>Shape your culture.</h1>
        <Text variant="subtitle">
          Crewsby is your culture gym. Build a nurturing & innovative workplace
          with our free exercises.
        </Text>
        <Grid gap={2} columns={[null, 1, 3]} sx={{ mt: 3 }}>
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
        <Grid gap={2} columns={[null, 1, 1]} sx={{ mt: 5 }}>
          <Box>
            <h3>
              {" "}
              <Emoji symbol="🔋" label="battery" />
              <br></br>Boost your team spirit.
            </h3>
            <p>
              Teams are the units where culture takes form. To shape your
              culture start with team building.
            </p>
            <Button variant="outline" as={GatsbyLink} to="../team-building">
              <FaAR /> Team building
            </Button>
          </Box>
        </Grid>
      </Box>
      <SubscribeForm />
    </Layout>
  )
}

export default IndexPage
