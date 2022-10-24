import axios from "axios";

function getUser(token) {
  return axios.get(
    "https://project-linkr-api.herokuapp.com/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {}
  );
}

export default getUser;
