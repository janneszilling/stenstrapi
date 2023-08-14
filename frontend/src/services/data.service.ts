import { GET_ALL_POSTS, GET_POST_BY_SLUG, GET_THE_LATEST_POSTS } from '../graphql/queries';

const URL = process.env.STRAPIBASEURL;

export class DataService {
  constructor() {}

  async getAllPosts() {
    const fetchParams = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_ALL_POSTS,
      }),
    };
    const res = await fetch(`${URL}/graphql`, fetchParams);
    const data = await res.json();
    return data.data.blogposts.data;
  }

  async getIndividualPost(slug) {
    const fetchParams = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_POST_BY_SLUG,
        variables: {
          slugUrl: slug,
        },
      }),
    };
    const res = await fetch(`${URL}/graphql`, fetchParams);
    const data = await res.json();
    return data.data.blogposts.data[0].attributes;
  }

  async getTheLatestPosts() {
    const fetchParams = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_THE_LATEST_POSTS,
      }),
    };
    const res = await fetch(`${URL}/graphql`, fetchParams);
    const data = await res.json();
    if (data.errors) {
      return null;
    }
    return data.data.blogposts.data;
  }
}

export const dataSvc = new DataService();
