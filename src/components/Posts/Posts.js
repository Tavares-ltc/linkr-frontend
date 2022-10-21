import styled from "styled-components";
import Post from "./Post";
import { getPosts } from "../../services/posts";
import { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

function Posts({ refresh }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, [refresh]);

  return (
    <Wrapper>
      {posts.length === 0 ? (
        <Loading>
          <FallingLines
            color="#fff"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </Loading>
      ) : (
        posts.map((post, key) => {
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
      )}
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

export default Posts;
