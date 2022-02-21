import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import parse from 'html-react-parser';

const BlogPage = ({ data }) => {

  const ArrayWPContentBlog = data.WPContentBlog.edges.map((el) => el)

  return (
    <Layout>
      <Seo title="Blog" />

      <h2>Blog</h2>

      {ArrayWPContentBlog.map(({ node }) => (
        <div key={node.id}>
          <h4>{node.title}</h4>
          <p>Dodany: {node.date}</p>
          <p>{parse(node.excerpt)}</p>
          <Link to={`/blog/${node.slug}`}>zobacz wpis...</Link>
        </div>
      ))}

    </Layout>
  )
}

export default BlogPage

export const publikacjeQuery = graphql`
  query BlogQuery {
      WPContentBlog: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "blog"}}}}}) {
        edges {
          node {
            slug
            title
            content
            id
            date(formatString: "YYYY-MM-DD")
            excerpt
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
   }
  `