import axios from "axios";
import getUserToken from "./getToken";
import BASE_URL from "./BASE_URL";

const token = getUserToken();

function checkFollowing(personId) {
  return axios.get(`${BASE_URL}/follow/${personId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function follow(personId) {
  return axios.post(`${BASE_URL}/follow`,{personId}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function unfollow(personId) {
  return axios.delete(`${BASE_URL}/follow/${personId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { checkFollowing, follow, unfollow };
