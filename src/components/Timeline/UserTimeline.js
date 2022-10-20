import styled from "styled-components";
import Title from "../Title/Title";
import { getUserById, getUserPosts } from "../../services/userPageServices";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function UserTimeline() {
  const [error, setError] = useState({});
  const [userData, setUserData] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getUserData() {
      try {
        const user = await getUserById(id);
        setUserData(user.data);
      } catch (error) {
        console.log(error.response);
        setError(error.response);
      }
    }
    getUserData();
  }, []);

  async function getPosts() {
    try {
      const posts = await getUserPosts(id);
      setUserPosts(posts.data);
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  setInterval(getPosts, [60 * 1000]);

  return (
    <Wrapper>
      <Title>
        {error.data ? <h1>{error.data}</h1> : <h1>{userData.name}'s posts</h1>}
      </Title>
      {userPosts.map((post)=> {return <h1>{post.description}</h1>})}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 611px;
  width: 100%;
  margin-top: 78px;
`;

export default UserTimeline;
