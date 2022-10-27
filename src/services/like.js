import axios from "axios";
const BASE_URL = 'https://project-linkr-api.herokuapp.com';

function getLikes(token, page) {
    const promise = axios.get(`${BASE_URL}/likes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return promise;
  }