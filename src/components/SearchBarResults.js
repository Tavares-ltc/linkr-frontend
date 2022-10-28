import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function UserPlaceholder({ img, name, id, setSearch, isFollowing }) {
  const navigate = useNavigate();

  return (
    <UserWrappler>
      <img src={img} alt="" />
      <h1
        onClick={() => {
          setSearch('');  
          navigate(`/user/${id}`);
        }}
      >
        {name}
      </h1>
      {isFollowing ? <h2>• following</h2> : ""}
    </UserWrappler>
  );
}

function SearchBarResults({ usersList, setSearch }) {
  return (
    <Wrappler>
      {usersList.map((user, key) => (
        <UserPlaceholder
          key={key}
          img={user.image}
          name={user.name}
          id={user.id}
          isFollowing={user.isFollowing}
          setSearch={setSearch}
        />
      ))}
    </Wrappler>
  );
}

const Wrappler = styled.div`
  margin-top: 15px;
  height: 40px;
  width: 100%;
`;
const UserWrappler = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  background-color: #e7e7e7;
  h1 {
    font-size: 18px;
    color: #515151;
    cursor: pointer;
    font-family: Lato, Helvetica, sans-serif;
  }
  h2 {
    margin-left: 15px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    color: #C5C5C5;
  }
  img {
    height: 35px;
    width: 35px;
    border-radius: 25px;
    margin: 0 15px;
  }
`;

export default SearchBarResults;
