import styled from "styled-components";
import GlobalStyle from "../../Assets/styles/GlobalStyle";
import Title from "../../components/Title/Title";
import UserPosts from "../../components/Posts/UserPosts";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById} from "../../services/userPage";

function UserTimeline() {
  const [error, setError] = useState({});
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getUserData(id) {
      try {
        const user = await getUserById(id);
        setUserData(user.data);
      } catch (error) {
        console.log(error.response);
        setError(error.response);
      }
    }
    getUserData(id);
  }, []);


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          {error.data ? (
            <h1>{error.data}</h1>
          ) : (
            <h1>{userData.name}'s posts</h1>
          )}
        </Title>
        <UserPosts userData={userData} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 611px;
  width: 100%;
  margin-top: 78px;
`;

export default UserTimeline;
