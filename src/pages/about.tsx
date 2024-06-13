import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
