import styled from "styled-components";
import Title from "../Title/Title";
import Post from "../Posts/Post";

function Timeline() {
  return (
    <Wrapper>
      <Title>
        <h1>timeline</h1>
      </Title>
      <Post />
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
