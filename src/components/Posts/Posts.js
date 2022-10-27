import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import { getPosts } from "../../services/posts";
import getToken from "../../services/getToken";
import { FallingLines } from "react-loader-spinner";
import InfiniteScroll from 'react-infinite-scroller';

function Posts({ refresh, setRefresh }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true)

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

  async function fetchItems() {
    if (fetching) {
      return;
    }

    setFetching(true);

    try {

      const token = getToken();
      const { data: newPosts } = await getPosts(token, page);
      if (newPosts.length < 10) {
        setHasMore(false);
        setPosts([...posts, ...newPosts]);
      } else {
        setPage(page + 1);
        setPosts([...posts, ...newPosts]);
      }
    } finally {
      setFetching(false);
    }
  }


  return (
    <InfiniteScroll
      loadMore={fetchItems}
      hasMore={hasMore}
      loader={
        <Loading>
          <FallingLines
            color="#fff"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </Loading>
      }>
      <Wrapper>
        {posts?.length > 0
          ? posts.map((post, key) => {
            return (
              <Post
                key={key}
                postId={post.id}
                username={post.userName}
                userId={post.userId}
                userImage={post.userImage}
                description={post.postDescription}
                metadataUrl={post.metadataUrl}
                metadataTitle={post.metadataTitle}
                metadataDescription={post.metadataDescription}
                metadataImage={post.metadataImage}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            );
          })
          : noPostsYet()}
      </Wrapper>
    </InfiniteScroll>
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
