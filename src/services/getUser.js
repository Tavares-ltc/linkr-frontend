import axios from "axios";

function getUser(token) {
  return axios.get(
    "https://git.heroku.com/project-linkr-api.git",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {}
  );
}

export default getUser;
