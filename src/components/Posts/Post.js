import { useState } from "react";
import styled from "styled-components";
import Picture from "./Picture";

function Post() {
  const [input, setInput] = useState({ url: null, description: null });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <Wrapper>
      <Picture
        image_url={
          "https://gw.geneanet.org/public/img/media/deposits/b9/0b/4099922/medium.jpg?t=1449669854"
        }
      />
      <div>
        <h6>What are you going to share today?</h6>
        <Form onSubmit={handleSubmit}>
          <InputUrl
            placeholder="https://..."
            name="url"
            type="url"
            required
            onChange={(e) => setInput({ ...input, url: e.target.value })}
          />
          <InputDescription
            placeholder="Awesome article about #javascript"
            name="description"
            type="text"
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          />
          <div>
            <Button>Publish</Button>
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
  width: 100%;
  height: 209px;
  border-radius: 16px;
  padding: 16px;

  & > div {
    max-width: 503px;
    width: 100%;
  }

  & > div > h6 {
    font-family: "Lato", sans-serif;
    height: 40px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
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
`;

const Button = styled.button`
  position: absolute;
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

  &:hover {
    filter: brightness(1.15);
  }
`;

export default Post;
