export const GET_ALL_POSTS = `
{
  blogposts {
    data {
      attributes {
        title
        description
        urlSlug
        splash {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  }`;

export const GET_POST_BY_SLUG = `
  query ($slugUrl: String!) {
    blogposts(filters: {urlSlug: {eq: $slugUrl}}) {
      data {
        attributes {
          title
          description
          urlSlug
          splash {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    }`;
