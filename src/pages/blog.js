import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DeutschPage = ({ data }) => {

    const ArrayWPContentNews = data.WPContentNews.edges.map((el) => el)
    const ArrayWPContentBlog = data.WPContentBlog.edges.map((el) => el)

    return (
        <Layout>
            <Seo title="Blog" />

            <h2>Blog</h2>
            <ul>
                {ArrayWPContentBlog.map(({ node }) => (
                    <li key={node.id}>
                        <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
                    </li>
                ))}
            </ul>
            <ul>
                {ArrayWPContentNews.map(({ node }) => (
                    <li key={node.id}>
                        <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
                    </li>
                ))}
            </ul>
            <h3>Kontakt</h3>

        </Layout>
    )
}

export default DeutschPage

export const publikacjeQuery = graphql`
  query BlogQuery {
        wycieczka: file(
      relativePath: {eq: "wycieczka2.jpg" }
    ) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }

    WPContentBlog: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "blog"}}}}}) {
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
      WPContentNews:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "news"}}}}}) {
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