export const GET_ALL_POSTS = `
{
  blogposts(sort: "date:desc", pagination: { limit: 100 }) {
    data {
      attributes {
        title
        description
        urlSlug
        estimatedReadingTimeInMinutes
        date
        tags {
          data {
            attributes {
              title
            }
          }
        }
        author
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
          date
          splash {
            data {
              attributes {
                url
              }
            }
          }
          content
        }
      }
    }
    }`;

export const GET_THE_LATEST_POSTS = `
{
  blogposts(sort: "date:desc", pagination: {limit: 4}) {
    data {
      attributes {
        title
        description
        urlSlug
        estimatedReadingTimeInMinutes
        date
        tags {
          data {
            attributes {
              title
            }
          }
        }
        author
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
