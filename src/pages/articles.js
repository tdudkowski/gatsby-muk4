import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ArticlesPage = ({ data }) => {

    const ArrayWPContentArticle = data.WPContentArticle.edges.map((el) => el)

    return (
        <Layout>
            <Seo title="Artykuły" />

            <h2>Artykuły</h2>

            <ul>
                {ArrayWPContentArticle.map(({ node }) => (
                    <li key={node.id}>
                        <Link to={`/artykul/${node.slug}`}>{node.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout >
    )
}

export default ArticlesPage

export const indexQuery = graphql`
  query ArticlesQuery {
    WPContentArticle:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "article"}}}}}) {
      edges {
        node {
          slug
          title
          content
          id
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
