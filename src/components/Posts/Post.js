import styled from "styled-components";
import { Like } from "./like";
import Picture from "./Picture";

function Post({
  postId,
  username,
  userImage,
  description,
  metadataUrl,
  metadataTitle,
  metadataDescription,
  metadataImage,
}) {
  return (
    <Wrapper>
      <LeftColumn>
        <Picture image_url={userImage} alt="User picture" />
        <Like postId={postId} />
      </LeftColumn>
      <RightColumn>
        <Username>{username}</Username>
        <Description>{description}</Description>
        <a href={metadataUrl} target="_blank" rel="noreferrer">
          <Url>
            <LeftSide>
              <div>
                <UrlTitle>{metadataTitle}</UrlTitle>
                <UrlDescription>{metadataDescription}</UrlDescription>
              </div>
              <Link>{metadataUrl}</Link>
            </LeftSide>
            <RightSide>
              <img src={metadataImage} alt="Url" />
            </RightSide>
          </Url>
        </a>
      </RightColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 14px;
  width: 100%;
  background: #171717;
  border-radius: 16px;
  padding: 17px;

  @media (max-width: 650px) {
    border-radius: 0;
  }
`;

const LeftColumn = styled.div`
  width: 50px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  width: 100%;

  & a {
    text-decoration: none;
  }
`;

const Username = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;

  @media (max-width: 650px) {
    font-size: 17px;
  }
`;

const Description = styled.p`
  min-height: 25px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;

  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const Url = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;

  @media (max-width: 650px) {
    height: 115px;
    width: calc(100% - 70px);
  }

  &:hover {
    filter: brightness(1.05);
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  width: calc(503px - 153px);
  height: 100%;
  border-radius: 11px 0 0 11px;
  padding: 15px 27px 9px 19px;

  & > div {
    display: flex;
    height: 88px;
    flex-direction: column;
    row-gap: 5px;
    overflow-y: hidden;
    line-height: 13px;

    @media (max-width: 650px) {
      row-gap: 0;
      height: 70px;
      width: 175px;
    }
  }

  @media (max-width: 650px) {
    padding: 10px 5px 0 11px;
  }
`;

const RightSide = styled.div`
  width: 153px;
  height: 155px;
  border-radius: 0 11px 11px 0px;

  & > img {
    max-width: 153px;
    width: 100%;
    height: 154px;
    object-fit: cover;
    border-radius: 0 11px 11px 0;

    @media (max-width: 650px) {
      height: 114px;
    }
  }

  @media (max-width: 650px) {
    width: 180px;
  }
`;

const UrlTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
  margin-bottom: 3.5px;

  @media (max-width: 650px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

const UrlDescription = styled.p`
  font-size: 11px;
  color: #9b9595;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  @media (max-width: 650px) {
    font-size: 9px;
  }
`;

const Link = styled.p`
  font-family: "Lato", sans-serif;
  color: #cecece;
  font-size: 11px;
  font-size: 11px;
  line-height: 13px;

  @media (max-width: 650px) {
    margin-bottom: 10px;
  }
`;

export default Post;
