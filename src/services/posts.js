import axios from "axios";

function getPosts(token) {
  const promise = axios.get("https://git.heroku.com/project-linkr-api.git", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}

function createPost(userId, description, link, token) {
  const promise = axios.post(
    "https://git.heroku.com/project-linkr-api.git",
    {
      userId,
      description,
      link,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return promise;
}

export { getPosts, createPost };
