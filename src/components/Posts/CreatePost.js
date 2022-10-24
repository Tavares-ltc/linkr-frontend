import { useState, useEffect } from "react";
import styled from "styled-components";
import Picture from "./Picture";
import getUser from "../../services/getUser";
import getToken from "../../services/getToken";
import { createPost } from "../../services/posts";
import { postHashtags } from '../../services/hashtagsServices'

function CreatePost({ setRefresh, refresh }) {
  const [input, setInput] = useState({ url: "", description: "" });
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
    if (token) {
      getUser(token)
        .then((res) => setUser({ ...res.data, token }))
        .catch(() =>
          alert(
            "An error occured while trying to fetch the posts, please refresh the page!"
          )
        );
    }
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(!loading);
    const inputWords = input.description.split(' ');
    const hashtags = inputWords.filter(word => word[0] === '#');
    createPost(user.id, hashtags, input.description, input.url, token)
      .then(() => {
        setInput({ url: "", description: "" });
        setLoading(false);
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Houve um erro ao publicar seu link!");
      });
  }

  return (
    <Wrapper>
      <UserPicture>
        <Picture image_url={user.image} />
      </UserPicture>

      <div>
        <Title>
          <h6>What are you going to share today?</h6>
        </Title>
        <Form onSubmit={handleSubmit}>
          <InputUrl
            placeholder="https://..."
            name="url"
            type="url"
            value={input.url}
            pattern="^(http(s)?:\/\/)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$"
            required
            disabled={loading}
            onChange={(e) => setInput({ ...input, url: e.target.value })}
          />
          <InputDescription
            placeholder="Awesome article about #javascript"
            name="description"
            type="text"
            value={input.description}
            disabled={loading}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          />
          <div>
            {!loading ? (
              <Button>Publish</Button>
            ) : (
              <Button disabled>Publishing...</Button>
            )}
          </div>
        </Form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  column-gap: 18px;
  max-width: 611px;
  width: 611px;
  height: 209px;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 29px;

  & > div {
    max-width: 503px;
    width: 100%;
  }

  @media (max-width: 650px) {
    height: 164px;
    border-radius: 0;
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  & > h6 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    height: 100%;

    @media (max-width: 650px) {
      font-size: 17px;
    }
  }

  @media (max-width: 650px) {
    justify-content: center;
    height: 25px;
  }
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const InputUrl = styled.input`
  height: 30px;
  background: #efefef;
  font-family: "Lato";
  color: #595959;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;

  &::placeholder {
    font-weight: 300;
    color: #949494;
  }

  &:focus {
    outline: none;
  }
`;

const InputDescription = styled(InputUrl)`
  height: 66px;

  @media (max-width: 650px) {
    height: 47px;
  }
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1877f2;
  width: 112px;
  height: 31px;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  border: 0;
  right: 0;

  @media (max-width: 650px) {
    width: 112px;
    height: 22px;
    font-size: 13px;
  }

  &:hover {
    filter: brightness(1.15);
  }
`;

const UserPicture = styled.span`
  @media (max-width: 650px) {
    display: none;
  }
`;

export default CreatePost;
