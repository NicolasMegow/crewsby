/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import Layout from "../components/layout/layout";
import SeoComp from "../components/shared/seo";

const ImpressumPage = () => {
  return (
    <Layout>
      <SeoComp title="Imprint" />
      <Box sx={{ maxWidth: "56rem", mt: 3 }}>
        <h1>
          <strong>Imprint</strong>
        </h1>
        <h3>Verantwortlich für sämtliche Inhalte</h3>
        <p>Nicolas Megow</p>
        <h3>Adress</h3>
        <p>
          Arndtstrasse 26<br></br>33100 Paderborn
        </p>
        <h3>Contact</h3>
        <p>
          <a href="mailto:info@crewsby.com">info@crewsby.com</a>
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Als Icons verwenden wir die wunderbaren{" "}
          <a href="https://fontawesome.com/">Font Awesome Icons</a> von Dave
          Gandy.
        </p>
        <h3>Online-Streitbeilegung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:<br></br>
          <a href="http://ec.europa.eu/consumers/odr">
            http://ec.europa.eu/consumers/odr
          </a>
          <br></br>Die E-Mail-Adresse finden Sie oben im Impressum. Wir sind
          nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Box>
    </Layout>
  );
};

export default ImpressumPage;
