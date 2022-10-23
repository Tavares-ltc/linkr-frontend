import axios from "axios";

function getUser(token) {
  return axios.get(
    "http://localhost:4000/user",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {}
  );
}

export default getUser;
