import styled from "styled-components";
import Hashtag from "./Hashtag";


export default function Trending() {
    const hashtags = [
        'javascript',
        'react',
        'react-native',
        'material',
        'web-dev',
        'mobile',
        'css',
        'html',
        'node',
        'sql'        
    ];
    return (
        <Wrapper>
            <h3>
                trending
            </h3>
            {hashtags.map(hashtag => <Hashtag>{hashtag}</Hashtag>)}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 301px;
    height: 406px;
    background-color: rgba(23, 23, 23, 1);
    border-radius: 16px;
    color: rgba(255, 255, 255, 1);

    h3 {
        width: 100%;
        height: 45px;
        padding: 8px 0 12px 16px;
        border-bottom: 1px solid rgba(72, 72, 72, 1);
        font-size: 27px;
        font-weight: 700;
        margin-bottom: 22px;
    }
`