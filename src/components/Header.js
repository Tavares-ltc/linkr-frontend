import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import getUser from "../services/getUser";
import getToken from "../services/getToken";
import userContext from "../contexts/userContext";
export default function Header() {
  const [button, setButton] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  // const { setUserdata } = useContext(userContext);

  useEffect(() => {
    const userToken = getToken();
    getUser(userToken)
      .then((res) => {
        // setUserdata(res.data)
        setUser({ ...res.data })
      })
      .catch(() =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page!"
        )
      );
  }, []);
  function showLogoutButton() {
    setButton(!button);
  }

  function exitUser() {
    localStorage.removeItem("linkr");
    navigate("/");
  }
  return (
    <>
      <ContentHeader>
        <Link to="/timeline">
          <a>linkr</a>
        </Link>
        <SearchBarWrappler>
          <SearchBar />
        </SearchBarWrappler>
        <RighSide>
          {button ? (
            <SlArrowUp
              onClick={showLogoutButton}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
              }}
              size="19px"
              color="white"
            />
          ) : (
            <SlArrowDown
              onClick={showLogoutButton}
              style={{
                marginLeft: "10px",
                cursor: "pointer",
              }}
              size="19px"
              color="white"
            />
          )}

          <img src={user.image} alt="" />
        </RighSide>
        {button ? (
          <LogOutButton onClick={exitUser}>Logout</LogOutButton>
        ) : (
          <></>
        )}
      </ContentHeader>
    </>
  );
}

const ContentHeader = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  font-family: "Passion One", cursive;
  font-size: 49px;
  color: white;
  padding: 0 10px;
  width: 100vw;
  height: 72px;
  display: flex;
  padding-top: 14px;
  justify-content: space-between;
  background-color: #151515;

  a {
	margin-left: 10px;
    text-decoration: none;
    color: white;
  }
`;

const LogOutButton = styled.div`
  width: 150px;
  height: 43px;
  background-color: #171717;
  border-radius: 0px 0px 0px 20px;
  font-family: "Lato";
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  right: 0;
  top: 72px;
`;
const SearchBarWrappler = styled.div`
      width: 440px;
	  margin: 0 20px;

  position: relative;
`;
const RighSide = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 45px;
    width: 45px;
    border-radius: 35px;
    margin-left: 20px;
	margin-right: 20px;
  }
`;
