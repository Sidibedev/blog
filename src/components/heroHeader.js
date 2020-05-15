import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
export default () => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          home {
            title
            description
          }
        }
      }
      image: file(relativePath: { eq: "avatar.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <div className="hero-header">
      <div style={{ width: "70%" }}>
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link>
      </div>

      <div style={{ width: "30%" }}>
        <Img
          alt="profil"
          fluid={data.image.childImageSharp.fluid}
          fadeIn={true}
        />
      </div>
    </div>
  );
};
