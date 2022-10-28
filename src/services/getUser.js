import axios from "axios";
import BASE_URL from "./BASE_URL";

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
