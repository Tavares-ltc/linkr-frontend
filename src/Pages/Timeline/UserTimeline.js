import styled from 'styled-components';
import GlobalStyle from '../../Assets/styles/GlobalStyle';
import Title from '../../components/Title/Title';
import Header from '../../components/Header';
import UserPosts from '../../components/Posts/UserPosts';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/userPage';
import FollowButton from '../../components/Posts/followButton';
import Trending from '../../components/Trending/Trending';

function UserTimeline() {
	const [error, setError] = useState({});
	const [userData, setUserData] = useState({});
	const { id } = useParams();

	useEffect(() => {
		async function getUserData(id) {
			try {
				const user = await getUserById(id);
				setUserData(user.data);
			} catch (error) {
				console.log(error.response);
				setError(error.response);
			}
		}
		getUserData(id);
	}, [id]);

	return (
		<>
			<GlobalStyle />
			<Header />
			<Wrapper>
				<Title>
					{error.data ? (
						<h1>{error.data}</h1>
					) : (
						<UserWrappler>
							<img src={userData.image} />
							<h1>{userData.name}'s posts</h1>
						</UserWrappler>
					)}
					<FollowButton />
				</Title>
				<ContentWrappler>
					<UserPosts userData={userData} />
					<Trending />
				</ContentWrappler>
			</Wrapper>
		</>
	);
}
const ContentWrappler = styled.div`
	width: 937px;
	display: flex;
	@media (max-width: 650px) {
		width: 100%;
	}

  @media (max-width: 936px) {
    width: 611px;
  }
`;

const Wrapper = styled.div`
margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  & > div {
  display: flex;

  @media (max-width: 650px) {
    width: 100%;

    div {
      width: 100%;
    }
  }
}
`;
const UserWrappler = styled.div`
	img {
		width: 40px;
		height: 40px;
		border-radius: 30px;
		margin-right: 20px;
	}
	display: flex;
	justify-content: flex-start;
	align-items: center;
	& > h1 {
		font-family: 'Oswald', sans-serif;
		color: #fff;
		font-size: 43px;
		font-weight: 700;
	}
`;
export default UserTimeline;
