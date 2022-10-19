import styled from "styled-components";
import Header from "../Header/Header";
import Title from "../Title/Title";

function Timeline() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Title>
          <h1>timeline</h1>
        </Title>
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
