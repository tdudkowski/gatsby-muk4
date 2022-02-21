import React from "react";
import { graphql, Link } from "gatsby";
import parse from 'html-react-parser';
import Layout from "../components/layout";
import Seo from "../components/seo";

const NewsPage = ({ data }) => {

  const ArrayWPContentNews = data.WPContentNews.edges.map((el) => el)

  return (
    <Layout>
      <Seo title="Aktualności" />

      <h2>Aktualności</h2>

      {ArrayWPContentNews.map(({ node }) => (
        <div key={node.id}>
          <h4>{node.title}</h4>
          <p>Dodano: {node.date}</p>
          <p>{parse(node.content)}</p>
          <Link to={`/aktualnosci/${node.slug}`}>{node.title}</Link>
        </div>
      ))}

    </Layout >
  )
}

export default NewsPage

export const indexQuery = graphql`
  query NewsQuery {
    WPContentNews:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "news"}}}}}) {
      edges {
        node {
          slug
          title
          content
          id
          date(formatString: "YYYY-MM-DD")
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
