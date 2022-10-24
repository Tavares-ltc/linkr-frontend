import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function UserPlaceholder({ img, name, id, setSearch }) {
  const navigate = useNavigate()
  return (
    <UserWrappler>
      <img src={img} />
      <h1 onClick={()=>{
        navigate(`/user/${id}`)
        setSearch("")
        }}>{name}</h1>
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
          setSearch={setSearch}
        />
      ))}
    </Wrappler>
  );
}

const Wrappler = styled.div`
  margin-top:15px;
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
  img {
    height: 35px;
    width: 35px;
    border-radius: 25px;
    margin: 0 15px;
  }
`;

export default SearchBarResults;
