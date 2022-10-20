import styled from "styled-components";

export default function Hashtag({ children }) {
    return (
        <Wrapper>
            # {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    font-size: 19px;
    font-weight: 700;
    margin-top: 13px;
`;