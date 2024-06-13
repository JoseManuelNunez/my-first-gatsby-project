import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home">
      <main>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
