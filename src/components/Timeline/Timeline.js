import styled from "styled-components";
import Title from "../Title/Title";
import CreatePost from "../Posts/CreatePost";
import Posts from "../Posts/Posts";
import { useState } from "react";

function Timeline() {
  const [refresh, setRefresh] = useState(false);
  return (
    <Wrapper>
      <Title>
        <h1>timeline</h1>
      </Title>
      <CreatePost refresh={refresh} setRefresh={setRefresh} />
      <Posts refresh={refresh} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 611px;
  width: 100%;
  margin-top: 78px;
`;

export default Timeline;
