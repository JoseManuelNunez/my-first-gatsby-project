import { Link } from "gatsby";
import React from "react";

const container = {
  margin: "auto",
  maxWidth: "500px",
  fontFamily: "sans-serif",
};

const heading = {
  color: "rebeccapurple",
};
const navLinks = {
  display: "flex",
  listStyle: "none",
  paddingLeft: 0,
};
const navLinkItem = {
  paddingRight: "2rem",
};
const navLinkText = {
  color: "black",
};

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: JSX.Element;
}) => {
  return (
    <div style={container}>
      <nav>
        <ul style={navLinks}>
          <li style={navLinkItem}>
            <Link style={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li style={navLinkItem}>
            <Link style={navLinkText} to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 style={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
