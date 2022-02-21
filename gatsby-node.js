const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const newsWPTemplate = path.resolve("./src/templates/WPNewsTemplate.js");
    const blogWPTemplate = path.resolve("./src/templates/WPBlogTemplate.js");
    const articleWPTemplate = path.resolve("./src/templates/WPArticleTemplate.js");

    return graphql(`
    {
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
            WPContentBlog:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "blog"}}}}}) {
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
              WPContentArticle:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "article"}}}}}) {
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
  `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        const WPContentNews = result.data.WPContentNews.edges;
        const WPContentBlog = result.data.WPContentBlog.edges;
        const WPContentArticle = result.data.WPContentArticle.edges;

        WPContentNews.forEach(post => {
            createPage({
                path: "/aktualnosci/" + post.node.slug,
                component: newsWPTemplate,
                ...post.node,
                context: {
                    ...post.node.context,
                    slug: post.node.slug,
                },
            });
        });

        WPContentBlog.forEach(post => {
            createPage({
                path: "/blog/" + post.node.slug,
                component: blogWPTemplate,
                ...post.node,
                context: {
                    ...post.node.context,
                    slug: post.node.slug,
                },
            });
        });

        WPContentArticle.forEach(post => {
            createPage({
                path: "/artykul/" + post.node.slug,
                component: articleWPTemplate,
                ...post.node,
                context: {
                    ...post.node.context,
                    slug: post.node.slug,
                },
            });
        });

    })
};