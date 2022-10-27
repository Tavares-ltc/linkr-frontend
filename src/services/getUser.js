import axios from "axios";

const BASE_URL = "http://localhost:4000";

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
