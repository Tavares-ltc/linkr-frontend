import styled from "styled-components";

function Title({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  & > h1 {
    font-family: "Oswald", sans-serif;
    height: 64px;
    line-height: 64px;
    font-weight: 700;
    font-size: 43px;
    color: #fff;
  }
`;

export default Title;
