import styled from "styled-components";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import {
  checkFollowing,
  follow,
  unfollow,
} from "../../services/followServices";
import { useParams } from "react-router-dom";
function FollowButton() {
  const [loading, setLoading] = useState(true);
  const [isFollower, setIsFollower] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function isFollowing() {
      try {
        const response = await checkFollowing(id);
        console.log(response);
        setIsFollower(response.data);
        setLoading(false);
      } catch (error) {
        alert("Error on follower requisition");
      }
    }
    isFollowing();
  }, []);

  async function toggleFollow() {
    if (loading) {
      return;
    }
    setLoading(true);
    if (isFollower === false) {
      try {
        await follow(id);
        setLoading(false);
        setIsFollower(true);
      } catch (error) {
        alert("Error on follow person");
        setLoading(false);
      }
    } else {
      try {
        await unfollow(id);
        setLoading(false);
        setIsFollower(false);
      } catch (error) {
        alert("Error on unfollow person");
        setLoading(false);
      }
    }
  }

  return (
    <Button isFollower={isFollower} loading={loading} onClick={toggleFollow}>
      {loading ? (
        <TailSpin color="#ffffff" width="15" />
      ) : isFollower ? (
        "Unfollow"
      ) : (
        "Follow"
      )}
    </Button>
  );
}

const Button = styled.div`
  font-family: "Oswald", sans-serif;
  background-color: ${(props) => (props.isFollower ? " #ffffff" : "#1877f2")};
  height: 32px;
  border-radius: 5px;
  color: ${(props) => (props.isFollower ? "#1877f2" : "#ffffff")};
  border: none;
  font-size: 14px;
  font-weight: bold;
  width: 112px;
  ${(props) => (props.loading ? "" : "cursor: pointer;")};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.15);
  }
`;

export default FollowButton;
