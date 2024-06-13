import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home">
      <main>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage 
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/icon.png"
        />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
