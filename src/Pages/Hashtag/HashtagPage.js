import Title from "../../components/Title/Title";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostsByHashtag } from "../../services/hashtagsServices";
import getUserToken from "../../services/getToken";
import Post from "../../components/Posts/Post";

export default async function HashtagPage() {
    const location = useLocation();

    const [posts, setPosts] = useState([]);

    useEffect(
        async () => {
            const hashtag = location.state.hashtag;
            const token = getUserToken();
            try {
                const response = await getPostsByHashtag(hashtag, token);
                setPosts(response.data);
            } catch (error) {
                alert('Error');
            }
        },
        []
    )

    return (
        <Wrapper>
            <Title># {hashtag}</Title>
            {posts.map(post =>
                <Post
                    key={key}
                    username={post.userName}
                    userImage={post.userImage}
                    description={post.postDescription}
                    metadataUrl={post.metadataUrl}
                    metadataTitle={post.metadataTitle}
                    metadataDescription={post.metadataDescription}
                    metadataImage={post.metadataImage}
                />
            )}
        </Wrapper>
    )
}