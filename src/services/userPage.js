import axios from "axios";
import getUserToken from "./getToken";
import BASE_URL from "./BASE_URL";

const token = getUserToken();
async function getUserById(userId) {
  return axios.get(`${BASE_URL}/user/data/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
async function getUserPosts(userId) {
  if (!userId) {
    return;
  }
  return axios.get(`${BASE_URL}/user/posts/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

async function searchUser(name) {
  return axios.get(`${BASE_URL}/user/search/${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { getUserById, getUserPosts, searchUser };
