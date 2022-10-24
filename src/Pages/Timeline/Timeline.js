
import styled from "styled-components";
import GlobalStyle from "../../Assets/styles/GlobalStyle";
import Title from "../../components/Title/Title";
import CreatePost from "../../components/Posts/CreatePost";
import Posts from "../../components/Posts/Posts";
import { useState } from "react";
import Trending from "../../components/Trending/Trending";

function Timeline() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          <h1>timeline</h1>
        </Title>
        <div>
          <div>
            <CreatePost refresh={refresh} setRefresh={setRefresh} />
            <Posts refresh={refresh} />
          </div>
          <Trending />
        </div>
      </Wrapper>
    </>
  );

}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  margin-top: 78px;

  & > div {
    display: flex;

    @media (max-width: 650px) {
      width: 100%;

      div {
        width: 100%;
      }
    }
  }
`;

export default Timeline;
