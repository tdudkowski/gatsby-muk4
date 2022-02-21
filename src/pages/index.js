import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import NavbarLinks from "../components/Navbar/NavbarLinks"
import Seo from "../components/seo"
import styled from "styled-components"
import "../styles/css/font-awesome.css"
import img from "../images/muk-fotel2-removebg.png"

const StyledContainer = styled.div`
/* position: relative; */
margin: 0 auto;
padding: 0;
border: none;
article {padding: .5rem;}
background-image: none;

@media (min-height: 500px) and (min-width: 650px) {
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;

} 
@media (min-height: 500px) and (min-width: 1025px) {
  margin: 1rem auto;
  flex-direction: row-reverse;
  background-position: right bottom;
  background-attachment: initial;
  .info {    width: 60%;  }
  article {margin: 1rem 0;}
  .menu {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
} 
`;

const IndexPage = ({ data }) => {

  const ArrayWWPContentPoster = data.WPContentPoster.edges.map((el) => el)

  return (
    <StyledContainer className="container">
      <Seo title="Home" />
      <section className="info">

        <article>
          <h2>Małgorzata Urlich-Kornacka – przewodnik po Wrocławiu</h2>
          <p>
            Witamy na stronie firmy Via Wrocław – Małgorzata Urlich-Kornacka. Oferujemy kompleksowe usługi
            turystyczne po Wrocławiu w języku polskim i niemieckim.</p>
          <p>Tutaj znajdziesz ciekawostki o stolicy
            Dolnego Śląska, zmówisz licencjonowanego przewodnika i wybierzesz trasę, która najbardziej
            odpowiada Twoim indywidualnym zainteresowaniom.
          </p>
          <div className="contactOnFront">
            <section><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;+48 607 239 776</section>
            <section><i className="fa fa-at" aria-hidden="true"></i>&nbsp;malgorzata.wroclove@gmail.com</section>
          </div>
        </article>

        <div className="newsOnFront">

          <Link to="kontakt"><h3>Kontakt</h3></Link>

          <Link to="/news">
            <h3>Aktualności</h3>
            <GatsbyImage image={ArrayWWPContentPoster[0].node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
              alt="obrazek" />
          </Link>
        </div>
      </section>

      <div className="menu">
        <section className="about">
          <NavbarLinks />
        </section>

        <section className="news">
          <h2>Facebook</h2>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffilmwroclaw%2F&tabs=timeline&width=380&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="facebook"
            width="100%"
            maxWidth="380"
            height="320"
            styleName="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </section>
      </div>
    </StyledContainer>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexQuery {
    
    afiszsmall1: file(
      relativePath: {eq: "afisz-MuzycznyWroclawx300.jpg" }
    ) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 200
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
`
