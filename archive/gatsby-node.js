const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const postWPTemplate = path.resolve("./src/templates/tripWPPostTemplate.js");

    return graphql(`
    {
  
        WPposts: allWpPost{
                            nodes {
                  slug
                  title
                  content
                  id
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
              WPContentBlog:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "blog"}}}}}) {
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
  `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }
        const WPposts = result.data.WPposts.nodes;
        const WPContentNews = result.data.WPContentNews.nodes;
        const WPContentBlog = result.data.WPContentBlog.nodes;

        WPContentNews.forEach(post => {
            createPage({
                path: "/aktualnosci/" + post.slug,
                component: postWPTemplate,
                ...post,
                context: {
                    ...post.context,
                    slug: post.slug,
                },
            });
        });

        WPContentBlog.forEach(post => {
            createPage({
                path: "/blog/" + post.slug,
                component: postWPTemplate,
                ...post,
                context: {
                    ...post.context,
                    slug: post.slug,
                },
            });
        });

    })
};