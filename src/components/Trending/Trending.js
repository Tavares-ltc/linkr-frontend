import { useEffect, useState } from "react";
import styled from "styled-components";
import getUserToken from "../../services/getToken";
import { getTrendingHashtags } from "../../services/hashtagsServices";
import Hashtag from "./Hashtag";


export default function Trending() {
    const [hashtags, setHashtags] = useState([]);

    useEffect(
        () => {
            const token = getUserToken();
                getTrendingHashtags(token).then((res) => {
                    console.log(res.data);
                    setHashtags(res.data)
                })
                .catch((res) => {
                    if (res.response.status === 404) {
                        return;
                    }
                    alert('Could not get Tranding hashtags, please reload');
                });
        },
        []
    );

    return (
        <Wrapper>
            <h3>
                trending
            </h3>
            {hashtags.map(hashtag => <Hashtag key={hashtag.id}>{hashtag.name}</Hashtag>)}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 301px;
    height: 406px;
    background-color: rgba(23, 23, 23, 1);
    border-radius: 16px;
    color: rgba(255, 255, 255, 1);
    margin-left: 25px;

    h3 {
        width: 100%;
        height: 45px;
        padding: 8px 0 12px 16px;
        border-bottom: 1px solid rgba(72, 72, 72, 1);
        font-size: 27px;
        font-weight: 700;
        margin-bottom: 22px;
    }

    @media (max-width: 937px) {
        display: none;
    }
`