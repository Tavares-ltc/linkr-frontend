import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import { getPosts } from "../../services/posts";
import getToken from "../../services/getToken";
import { FallingLines } from "react-loader-spinner";

function Posts({ refresh }) {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    const token = getToken();
    getPosts(token)
      .then((res) => setPosts(res.data))
      .catch(() =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page!"
        )
      );
  }, [refresh]);

  function noPostsYet() {
    if (!posts) {
      return (
        <Loading>
          <FallingLines
            color="#fff"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </Loading>
      );
    }
    if (posts.length === 0) {
      return <NoPosts>There are no posts yet 😭</NoPosts>;
    }
  }

  return (
    <Wrapper>
      {posts.length > 0
        ? posts.map((post, key) => {
            return (
              <Post
                key={key}
                username={post.userName}
                userImage={post.userImage}
                description={post.postDescription}
                metadataUrl={post.metadataUrl}
                metadataTitle={post.metadataTitle}
                metadataDescription={post.metadataDescription}
                metadataImage={post.metadataImage}
              />
            );
          })
        : noPostsYet()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 100px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NoPosts = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Lato", sans-serif;
  width: 100%;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  margin-top: 40px;
`;
export default Posts;
