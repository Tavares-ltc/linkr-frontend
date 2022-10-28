import axios from "axios";
import BASE_URL from "./BASE_URL";

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
