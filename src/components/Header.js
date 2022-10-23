import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SlArrowUp } from 'react-icons/sl';
import { useState } from 'react';

export default function Header() {
	const [button, setButton] = useState(false);
	const navigate = useNavigate();

	function showLogoutButton() {
		setButton(!button);
	}

	function exitUser() {
		localStorage.removeItem('linkr');
		navigate('/');
	}
	return (
		<>
			<ContentHeader>
				<Link to='/timeline'>
					<a>linkr</a>
				</Link>
				<RighSide>
					<SlArrowUp
						onClick={showLogoutButton}
						style={{
							marginLeft: '30px',
							cursor: 'pointer',
						}}
						size='19px'
						color='white'
					/>
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
	font-family: 'Passion One', cursive;
	font-size: 49px;
	color: white;
	padding: 0 10px;
	width: 100vw;
	height: 72px;
	display: flex;

	align-items: center;
	justify-content: space-between;
	background-color: #151515;

	a {
		text-decoration: none;
		color: white;
	}
`;

const LogOutButton = styled.div`
	width: 150px;
	height: 43px;
	background-color: #171717;
	border-radius: 0px 0px 0px 20px;
	font-family: 'Lato';
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

const RighSide = styled.header``;
