import Title from "../../components/Title/Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostsByHashtag } from "../../services/hashtagsServices";
import getUserToken from "../../services/getToken";
import Post from "../../components/Posts/Post";
import styled from "styled-components";
import Trending from "../../components/Trending/Trending";

export default function HashtagPage() {
    const { hashtagName } = useParams();

    const [posts, setPosts] = useState([]);
    useEffect(
        () => {
            const token = getUserToken();
            getPostsByHashtag(hashtagName, token)
                .then((res) => {
                    setPosts(res.data)
                })
                .catch((res) => alert('Could not get the posts from this hashtag, please reload'));
        },
        []
    )

    return (
        <Wrapper>
            <Title>
                <h1># {hashtagName}</h1>
            </Title>
            <div>
                <div>
                    {posts?.map(post =>
                        <Post
                            key={post.id}
                            username={post.userName}
                            userImage={post.userImage}
                            description={post.postDescription}
                            metadataUrl={post.metadataUrl}
                            metadataTitle={post.metadataTitle}
                            metadataDescription={post.metadataDescription}
                            metadataImage={post.metadataImage}
                        />
                    )}
                </div>
                <Trending />
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
width: 100%;
margin-top: 78px;

& > div {
  display: flex;

  @media (max-width: 650px) {
    width: 100%;

    div {
      width: 100%;
    }
  }
}

`