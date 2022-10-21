import axios from "axios";

function getPosts(token) {
  const promise = axios.get("http://localhost:4000/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}

function createPost(userId, description, link, token) {
  const promise = axios.post(
    "http://localhost:4000/posts",
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
