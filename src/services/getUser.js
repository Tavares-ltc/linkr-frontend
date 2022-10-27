import axios from "axios";
import URL from "./URL";

const BASE_URL = URL;

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
