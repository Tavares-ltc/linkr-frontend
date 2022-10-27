import styled from "styled-components";

function Title({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 934px;
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  & > h1 {
    font-family: "Oswald", sans-serif;
    color: #fff;
    font-size: 43px;
    font-weight: 700;
  }

  margin-bottom: 43px;

  @media (max-width: 937px) {
    width: 611px;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-left: 17px;
  }
`;

export default Title;
