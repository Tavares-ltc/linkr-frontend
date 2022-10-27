import axios from "axios";
import URL from "./URL";

const BASE_URL = "https://project-linkr-api.herokuapp.com";

const getTrendingHashtags = (token) =>
  axios.get(`${BASE_URL}/hashtags`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getPostsByHashtag = (hashtag, token) =>
  axios.get(`${BASE_URL}/hashtags/${hashtag}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { getTrendingHashtags, getPostsByHashtag };
