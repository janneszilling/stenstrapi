const URL = process.env.STRAPIBASEURL;

export class DataService {
  constructor() {}

  async getData() {
    const fetchParams = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          blogposts{
            data{
              attributes{
                title
                description
                postbody
                slug
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
        }
        `,
      }),
    };
    const res = await fetch(`${URL}/graphql`, fetchParams);
    const data = await res.json();
    return data.data.blogposts.data;
  }
}

export const dataSvc = new DataService();
