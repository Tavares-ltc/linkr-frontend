import axios from "axios";
const BASE_URL = "https://project-linkr-api.herokuapp.com";

function getPosts(token) {
  const promise = axios.get(`${BASE_URL}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}

function getPostsCount(token) {
  const promise = axios.get(`${BASE_URL}/posts/count`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}

function createPost(userId, hashtags, description, link, token) {
  const promise = axios.post(
    `${BASE_URL}/posts`,
    {
      userId,
      description,
      link,
      hashtags,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return promise;
}

export { getPosts, createPost, getPostsCount };
