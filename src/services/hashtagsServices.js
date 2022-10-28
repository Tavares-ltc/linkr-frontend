import axios from "axios";
import BASE_URL from "./BASE_URL";

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
