import axios from "axios";
import URL from "./URL";
const BASE_URL = URL;

function getPosts(token, page) {
  const promise = axios.get(`${BASE_URL}/posts?page=${page}`, {
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
      hashtags
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return promise;
}

export { getPosts, createPost };