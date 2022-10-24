import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import { FallingLines } from "react-loader-spinner";
import { getUserPosts } from "../../services/userPage";
import { useParams } from "react-router-dom";

function UserPosts({userData}) {
  const [userPosts, setUserPosts] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getPosts() {
      try {
        if(!id){
          return;
        }
          const posts = await getUserPosts(id);
          setUserPosts(posts.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    getPosts();
  }, [id]);
 

  function noPostsYet() {
    if (!userPosts) {
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
    if (userPosts.length === 0) {
      return <NoPosts>The user has no posts 😭</NoPosts>;
    }
  }

  return (
    <Wrapper>
      {userPosts.length > 0
        ? userPosts.map((post, key) => {
            return (
              <Post
                key={key}
                username={userData.name}
                userId={post.userId}
                userImage={userData.image}
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
export default UserPosts;