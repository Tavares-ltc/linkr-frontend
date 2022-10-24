import axios from "axios";

const BASE_URL = 'https://project-linkr-api.herokuapp.com';

function getUser(token) {
  return axios.get(
    `${BASE_URL}/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {}
  );
}

export default getUser;
