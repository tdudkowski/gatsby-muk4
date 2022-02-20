import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {

  // const ArrayWPContentBlog = data.WPContentBlog.edges.map((trip) => trip)
  const ArrayWPContentNews = data.WPContentNews.edges.map((trip) => trip)
  const ArrayWWPContentPoster = data.WPContentPoster.edges.map((trip) => trip)
  console.log(ArrayWWPContentPoster[0].node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <p>MUK strona główna</p>
      <ul>
        {ArrayWPContentNews.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {ArrayWWPContentPoster.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <GatsbyImage image={ArrayWWPContentPoster[0].node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="obrazek" />
      </div>
    </Layout>)
}

export default IndexPage

export const query = graphql`
query AllPosts {
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
      WPContentPoster:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "poster"}}}}}) {
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
            featuredImage  {
                node {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            }
        }
      }
}
`;