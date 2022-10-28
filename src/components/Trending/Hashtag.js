import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Hashtag({ children }) {
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => {
            navigate(`/hashtag/${children}`);
        }}>
            # {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin-left: 16px;
    font-size: 19px;
    font-weight: 700;
    margin-top: 13px;
    cursor: pointer;
`;