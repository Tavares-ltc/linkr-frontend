import styled from "styled-components";

function Picture({ image_url }) {
  return <Image src={image_url} />;
}

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
`;

export default Picture;
