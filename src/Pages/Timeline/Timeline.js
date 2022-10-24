
import styled from "styled-components";
import GlobalStyle from "../../Assets/styles/GlobalStyle";
import Title from "../../components/Title/Title";
import CreatePost from "../../components/Posts/CreatePost";
import Posts from "../../components/Posts/Posts";
import { useState } from "react";

function Timeline() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          <h1>timeline</h1>
        </Title>
        <CreatePost refresh={refresh} setRefresh={setRefresh} />
        <Posts refresh={refresh} setRefresh={setRefresh}/>
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

export default Timeline;
