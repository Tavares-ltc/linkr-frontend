import axios from "axios";

const BASE_URL = 'http://localhost:4000';

const getTrendingHashtags = (token) => axios.get(`${BASE_URL}/hashtags`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const getPostsByHashtag = (hashtag, token) => axios.get(`${BASE_URL}/hashtags/${hashtag}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const postHashtag = (hashtags, token) => axios.post(`${BASE_URL}/hashtags`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
},
hashtags);

export {
    getTrendingHashtags,
    getPostsByHashtag,
    postHashtag
}