import { request, gql } from "graphql-request";
const graphQlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
export const getPosts = async() => {
    const query = gql`
        query MyQuery {
            postsConnection {
              edges {
                node {
                  author(locales: en) {
                    bio
                    id
                    name
                    photo {
                      url
                    }
                  }
                  excerpt
                  slug
                  title
                  createdAt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                  id
                }
              }
            }
        }
    `
    const results = await request(graphQlApi,query);
    return results.postsConnection.edges;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last:3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        id
      }
    }
  `;
  const results = await request(graphQlApi, query);
  return results.posts;
};

export const getSimilarPosts = async (categories: string, slug: string) => {
  const query = gql`
    query GetPostDetails(${slug}: String!, ${categories}: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        id
      }
    }
  `;
  const results = await request(graphQlApi, query);
  return results.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        id
        name
        slug
      }
    }
  `;
  const results = await request(graphQlApi, query);
  return results.categories;
};