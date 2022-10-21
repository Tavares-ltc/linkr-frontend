import styled from "styled-components";
import Picture from "./Picture";

function Post({
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
`;

const Description = styled.p`
  min-height: 25px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
`;

const Url = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;

  &:hover {
    filter: brightness(1.05);
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 13px;
  width: calc(503px - 153px);
  height: 100%;
  border-radius: 11px 0 0 11px;
  padding: 0 27px 4px 19px;

  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`;

const RightSide = styled.div`
  width: 153px;
  height: 155px;
  border-radius: 0 11px 11px 0px;

  & > img {
    width: 153px;
    height: 154px;
    object-fit: cover;
    border-radius: 0 11px 11px 0;
  }
`;

const UrlTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
`;

const UrlDescription = styled(UrlTitle)`
  font-size: 11px;
  line-height: 13px;
  color: #9b9595;
`;

const Link = styled(UrlDescription)`
  color: #cecece;
`;

export default Post;
