<<<<<<< HEAD
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import { getPosts } from '../../services/posts';
import getToken from '../../services/getToken';
import { FallingLines } from 'react-loader-spinner';

function Posts({ refresh, setRefresh }) {
	const [posts, setPosts] = useState(false);

	useEffect(() => {
		const token = getToken();
		getPosts(token)
			.then((res) => setPosts(res.data))
			.catch(() =>
				alert(
					'An error occured while trying to fetch the posts, please refresh the page!'
				)
			);
	}, [refresh]);

	function noPostsYet() {
		if (!posts) {
			return (
				<Loading>
					<FallingLines
						color='#fff'
						width='100'
						visible={true}
						ariaLabel='falling-lines-loading'
					/>
				</Loading>
			);
		}
		if (posts.length === 0) {
			return <NoPosts>There are no posts yet 😭</NoPosts>;
		}
	}

	return (
		<Wrapper2>
			{posts.length > 0
				? posts.map((post, key) => {
						return (
							<Post
								key={key}
								id={key + 1}
								username={post.userName}
								userId={post.userId}
								userImage={post.userImage}
								description={post.postDescription}
								metadataUrl={post.metadataUrl}
								metadataTitle={post.metadataTitle}
								metadataDescription={post.metadataDescription}
								metadataImage={post.metadataImage}
								postId={post.id}
								setRefresh={setRefresh}
								refresh={refresh}
							/>
						);
				  })
				: noPostsYet()}
		</Wrapper2>
	);
=======
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
import Post from "./Post";
import { getPosts, getPostsCount } from "../../services/posts";
import getToken from "../../services/getToken";
import { FallingLines } from "react-loader-spinner";
import useInterval from "use-interval";

function Posts({ refresh, setRefresh }) {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState(false);
  const [postsCount, setPostsCount] = useState({ prev: null, curr: null });
  const [followingCount, setFollowingCount] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    const token = getToken();
    setToken(token);
    getPosts(token)
      .then((res) => {
        setPosts(res.data[0]);
        setFollowingCount(res.data[1]);
      })
      .catch(() =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page!"
        )
      );
  }, [refresh]);

  useInterval(() => {
    if (token) {
      getPostsCount(token).then((res) => {
        if (postsCount.prev === null) {
          setPostsCount({ ...postsCount, prev: parseInt(res.data[0]) });
          return;
        }
        if (postsCount.prev > parseInt(res.data[0])) {
          setPostsCount({ prev: null, curr: null });
          return;
        }
        setPostsCount({
          ...postsCount,
          curr: parseInt(res.data[0]) - postsCount.prev,
        });
      });
    }
  }, 15000);

  function updatePosts() {
    if (isDisabled) {
      return;
    }
    getPosts(token).then((res) => {
      setPosts(res.data[0]);
      setDisabled(false);
      setPostsCount({ prev: null, curr: null });
    });
  }

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

    if (posts.length === 0 && followingCount?.length === 0) {
      return (
        <NoPosts>You don't follow anyone yet. Search for new friends!</NoPosts>
      );
    }

    if (posts.length === 0 && followingCount?.length > 0) {
      return <NoPosts>No posts found from your friends.</NoPosts>;
    }

    if (posts.length === 0) {
      return <NoPosts>There are no posts yet.</NoPosts>;
    }
  }

  return (
    <Wrapper>
      {postsCount.curr > 0 ? (
        <NewPosts
          onClick={() => {
            updatePosts();
            setDisabled(true);
          }}
        >
          <p>{postsCount.curr} new posts, load more!</p>
          <BiRefresh size={30} color={"#fff"} />
        </NewPosts>
      ) : (
        <></>
      )}
      {posts.length > 0
        ? posts.slice(0, 20).map((post, key) => {
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
  );
>>>>>>> main
}

const Wrapper2 = styled.div`
	display: flex;
	flex-direction: column;
	//row-gap: 16px;
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
	font-family: 'Lato', sans-serif;
	width: 100%;
	color: #fff;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	margin-top: 40px;
`;

const NewPosts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  background-color: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  cursor: pointer;

  & > p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 19px;
    color: #fff;
  }
`;

export default Posts;
