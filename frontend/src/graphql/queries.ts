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
