/** @jsx jsx */
import { jsx, Box, Link, Badge } from "theme-ui";
import { graphql, Link as GatsbyLink } from "gatsby";

import Layout from "../../components/layout/layout";
import SeoComp from "../../components/shared/seo";

import { MDXProvider } from "@mdx-js/react";

import { shortcodes } from "../../components/shared/shortcodes";
import { FaAL } from "../../components/shared/fa-icons";
// import TableOfContents from "../../components/shared/table-of-contents";
import SharingButtons from "../../components/ctas/sharing-buttons";

const ActivityPage = ({ data, children }) => {
  const { slug } = data.mdx.fields;
  const { title, category, job } = data.mdx.frontmatter;
  const url = `https://crewsby.com/team-building${slug}`;

  return (
    <Layout>
      <SeoComp
        title={title}
        description={job}
        pathname={`/team-building/${slug}`}
      />
      <Box sx={{ maxWidth: "56rem", px: 3, mt: 3 }}>
        <Link
          to="../"
          style={{ marginLeft: ".3rem" }}
          as={GatsbyLink}
          variant="textButton"
        >
          <FaAL /> Back
        </Link>
        <br></br>
        <Badge variant="primary" sx={{ my: 2 }}>
          {category}
        </Badge>

        <h1 style={{ marginTop: 0, lineHeight: 1 }}>{title}</h1>
        <p className="subtitle">{job}</p>
      </Box>
      {/* {data.mdx?.tableOfContents?.items &&
         <TableOfContents items={data.mdx.tableOfContents.items} />
        null} */}
      <Box sx={{ maxWidth: "56rem", my: 1, px: 3 }}>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Box>
      <SharingButtons link={url} message={`${title}`} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      fields {
        contentType
        slug
      }
      frontmatter {
        title
        category
        job
        level
        time
      }
      tableOfContents
      body
    }
  }
`;

export default ActivityPage;
