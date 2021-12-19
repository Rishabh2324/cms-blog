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