import styled from "styled-components";

function Title({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  & > h1 {
    font-family: "Oswald", sans-serif;
    color: #fff;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    height: 64px;
    margin-bottom: 43px;
  }
`;

export default Title;
