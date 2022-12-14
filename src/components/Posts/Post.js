import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Like } from './like';
import Picture from './Picture';
import Modal from 'react-modal';
import { useEffect, useState, useRef, useContext } from 'react';
import { deletePost, editPost } from '../../services/editPost';
import { AiTwotoneDelete } from 'react-icons/ai';
import { TiPencil } from 'react-icons/ti';
import { TailSpin } from 'react-loader-spinner';
import { ReactTagify } from "react-tagify";
import { AiOutlineComment } from 'react-icons/ai';
import Comments from './Comments';
import { getComments, getCommentsCount } from '../../services/comments';
import getToken from '../../services/getToken';
import userContext from "../../contexts/userContext";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

function Post({
  username,
  userImage,
  description,
  metadataUrl,
  metadataTitle,
  metadataDescription,
  metadataImage,
  postId,
  userId,
  setRefresh,
  refresh,
  hashtag
}) {
  Modal.setAppElement('#root');
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formEdit, setFormEdit] = useState({});
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [isEditing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentsCount, setCommentsCount] = useState([]);
  const inputRef = useRef(0);
  const navigate = useNavigate();
  const toggleEditing = () => {
    setDescriptionValue(description);
    setEditing(!isEditing);
  };

  const context = useContext(userContext);

  const tagStyle = {
    color: 'white',
    fontWeight: 700,
    cursor: 'pointer'
  }

  const [refresh3, setRefresh3] = useState(false);
  useEffect(() => {
    const token = getToken();
    getCommentsCount(token, postId)
      .then((res) => setCommentsCount(res.data))
      .catch(() =>
        alert(
          'An error occured while trying to fetch the comments, please refresh the page!'
        )
      );
  }, [refresh3]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#333333',
      borderRadius: '40px'
    },
  };


  function handleForm({ name, value }) {
    setDescriptionValue(value)
    setFormEdit({
      ...formEdit, [name]: value,
    })
  }

  function sendForm(e) {
    if (e.key === "Escape") {
      toggleEditing()
    }
    if (e.key === "Enter") {
      e.preventDefault();
      editPost({ formEdit, postId }).then((res) => {
        setDescriptionValue(formEdit.description)
        setRefresh(!refresh)
        toggleEditing()
      })
        .catch((res) => {
          alert("N??o foi poss??vel salvar as altera????es")
        })
    }
  }

  function handleForm({ name, value }) {
    setDescriptionValue(value);
    setFormEdit({
      ...formEdit,
      [name]: value,
    });
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function deleteMyPost() {
    setLoading(!loading);
    deletePost(postId)
      .then((res) => {
        setRefresh(!refresh);
        setDescriptionValue(description);
        closeModal();
      })
      .catch((res) => {
        closeModal();
        alert("N??o foi poss??vel deletar o post");
      });
  }

  async function openComments() {
    setShowComments(!showComments);
  }

  return (
    <PostWrapper>
      <Wrapper>
        <LeftColumn>
          <Picture image_url={userImage} alt='User picture' />
          <Like postId={postId} />
          <CommentIconBox>
            <AiOutlineComment onClick={openComments} />
            <p>{commentsCount} comments</p>
          </CommentIconBox>
        </LeftColumn>
        <RightColumn>
          <Header>
            <UserColumn>
              <Username
                onClick={() => {
                  navigate(`/user/${userId}`);
                }}
              >
                {username}
              </Username>
            </UserColumn>
            <EditColumn>
              <TiPencil onClick={toggleEditing} />
              <div>
                <AiTwotoneDelete onClick={openModal} />
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel='Example Modal'
                >
                  <BackModal>
                    <h2 ref={(subtitle) => (subtitle = subtitle)}>
                      Are you sure you want to delete this post?
                    </h2>
                    <BlockButtons>
                      {loading ? (
                        <TailSpin color='#ffffff' width='10' />
                      ) : (
                        <>
                          <ButtonClose onClick={closeModal}>
                            {' '}
                            No, go back
                          </ButtonClose>
                          <ExcludeButton onClick={deleteMyPost}>
                            Yes, delete it
                          </ExcludeButton>
                        </>
                      )}
                    </BlockButtons>
                  </BackModal>
                </Modal>
              </div>
            </EditColumn>
          </Header>
          <div>
            {isEditing ? (
              <InputEdit
                ref={inputRef}
                name='description'
                value={descriptionValue}
                onKeyPress={(event) => sendForm(event)}
                onChange={(e) =>
                  handleForm({
                    name: e.target.name,
                    value: e.target.value,
                  })
                }
              />
            ) : description ?
              <ReactTagify
                tagStyle={tagStyle}
                tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
              >
                <Description>{description}</Description>
              </ReactTagify>
              :
              ''
            }
          </div>

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

      {showComments ? (
        <>
          <Comments
            userImage={userImage}
            postId={postId}
            userId={userId}
            refresh3={refresh3}
            setRefresh3={setRefresh3}
          />
        </>
      ) : (
        <></>
      )}
    </PostWrapper>
  );
}

const CommentIconBox = styled.div`
  color: white;
  position: relative;
  top: 15%;
  font-family: "Lato";
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 11px;
    color: white;
  }
`;

const PostWrapper = styled.div`
	width: 611px;
`;

const Wrapper = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	gap: 14px;
	width: 611px;
	background: #171717;
	border-radius: 16px;
	padding: 14px;
  ${(hashtag) => hashtag ? 'margin-bottom: 16px;' : ''}

  @media (max-width: 650px) {
    border-radius: 0;
  }
`;

const LeftColumn = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
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
  cursor: pointer;

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

const EditColumn = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
`;

const UserColumn = styled.div`
  max-width: 80%;
`;
const Header = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
const BlockButtons = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  margin: 10px 10px;
`;
const BackModal = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  border-radius: 10px;
  color: #ffffff;
  h2 {
    font-family: "Lato";
    font-size: 34px;
  }
`;

const ButtonClose = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: "Lato";
  background-color: #ffffff;
  color: #1877f2;
  border: solid 1px #ffffff;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`;

const ExcludeButton = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: "Lato";
  background-color: #1877f2;
  color: #ffffff;
  border: solid 1px #1877f2;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`;

const InputEdit = styled.input`
  width: 90%;
  height: 45px;
  border-style: none;
`;

export default Post;
