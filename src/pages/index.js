import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";
import "font-awesome/css/font-awesome.min.css";
import Projects from "../components/projects";
import Videos from "../components/videos";
const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .slice(0, 3)
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title} - HOME</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content="blog, expo, react native, web, apps," />
        <html lang="en" />
      </Helmet>
      <HeroHeader />
      <h2 className="postTitle">Latest blog posts &darr;</h2>
      <div className="grids">{Posts}</div>

      <div style={{ marginTop: 100 }}>
        <h2 className="postTitle">Latest projects &darr;</h2>
        <Projects />
      </div>

      <div style={{ marginTop: 100 }}>
        <h2 className="postTitle">Latest videos &darr;</h2>
        <Videos />
      </div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
