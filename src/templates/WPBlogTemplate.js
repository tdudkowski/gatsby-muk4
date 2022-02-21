import React from "react";
import { Link, graphql } from "gatsby";
import LayoutBlog from "../components/layout";
import styled from "styled-components";
import parse from 'html-react-parser';

const StyledArticle = styled.article`
background-color: rgba(250,250,250,.8);
margin:.5rem;
padding:.5rem;
& ul {list-style-type: circle; margin-left:1rem;}
`;

const blogTemplatePage = ({ data }) => {

    const { title, content } = data.wpPost;

    return (
        <LayoutBlog>

            <Link to="/blog">Blog</Link>

            <h2>{title}</h2>
            <StyledArticle>
                {parse(content)}
            </StyledArticle>
        </LayoutBlog>
    );
};

export default blogTemplatePage

export const query = graphql`
  query WPBlogPageBySlug($slug: String!) {
   wpPost( slug: { eq: $slug } ) {
    slug
    title
    content
    id
     
    }
  }
`;