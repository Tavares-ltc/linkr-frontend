import axios from "axios";
//lembrar de trocar novamente o token
function getPosts(token) {
  const promise = axios.get("http://localhost:4000/posts", {
    headers: {
      Authorization: `Bearer 1aab568c-284c-48e3-84fb-0cfbb344a695`,
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
