import React from 'react'
import Seo from '../components/seo/Seo'
import Layout from '../components/layout/Layout'
import { graphql } from 'gatsby'

const Blog = ({data}:{data:any}) => {
  return (
    <Layout pageTitle="My Blog Posts">
            <ul>
      {
        data.allFile.nodes.map((node:any) => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>

    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />


export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`

export default Blog