import styled from "styled-components";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { searchUser } from "../services/userPage";
import SearchBarResults from "./SearchBarResults";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    searchUser(search)
      .then((res) => setUsersList(res.data))
      .catch(() => setUsersList([]));
  }, [search]);

  return (
    <>
      <InputWrappler>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={"Search for people "}
        />
        <Wrappler>
          <BsSearch size="0.4em" color="#C6C6C6"/>
        </Wrappler>
        {usersList.length > 0 && <SearchBarResults usersList={usersList} />}
      </InputWrappler>
    </>
  );
}
const InputWrappler = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #e7e7e7;
  box-sizing: content-box;
  border-radius: 8px;
  width: 100%;

  input {
    border: none;
    box-shadow: none;
    width: 100%;
    min-height: 40px;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
  }
  input::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #c6c6c6;
  }
`;
const Wrappler = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
height: 40px;

right:0;
margin-right: 10px;
`;
export default SearchBar;
