import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow-x: auto;

	a {
		margin-top: 15px;
		text-decoration: underline;
		font-size: 20px;
		color: white;
	}
	@media (max-width: 414px) {
		flex-direction: column;
		width: 414px;
	}
`;
const LeftSide = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #151515;
	display: flex;
	justify-content: center;

	@media (max-width: 414px) {
		width: 414px;
		height: 300px;
		z-index: 3;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
	}
`;

const Linkr = styled.div`
	font-family: 'Passion One', cursive;
	width: 380px;
	height: 100vh;
	background-color: #151515;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 20px;

	h1 {
		font-size: 106px;
		color: white;
	}

	p {
		font-size: 40px;
		color: white;
	}
	@media (max-width: 414px) {
		align-items: center;
		height: 300px;

		p {
			text-align: center;
			font-size: 38px;
		}
	}
`;

const SignPage = styled.div`
	width: 540px;
	height: 100vh;
	padding: 0 50px;
	background-color: #4d4d4d;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 414px) {
		justify-content: flex-start;
		padding-top: 60px;
		width: 414px;
	}
`;

const Form = styled.form`
	width: 429px;
	min-height: 380px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	input {
		font-family: 'Oswald', sans-serif;
		width: 100%;
		height: 58px;
		border-radius: 5px;
		border: 1px solid rgb(127, 133, 141);
		padding-left: 10px;
		font-size: 20px;
		font-weight: 500;
		background-color: rgb(245, 245, 245);
		margin-bottom: 13px;
	}

	input::placeholder {
		font-size: 20px;
		font-weight: 500;
		color: rgb(127, 133, 141);
	}

	input:focus {
		outline: 0.5px solid #1877f2;
	}

	h2 {
		color: rgb(239, 99, 50);
		font-weight: bold;
		font-size: 36px;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	h5 {
		color: white;
		text-decoration: underline;
		font-weight: bold;
		margin-bottom: 12px;
		font-size: 15px;
	}

	@media (max-width: 414px) {
		justify-content: flex-start;
		input {
			width: 350px;
			margin-bottom: 20px;
		}
	}
`;

const Button = styled.button`
	font-family: 'Oswald', sans-serif;
	background-color: #1877f2;
	height: 65px;
	border-radius: 5px;
	color: #ffffff;
	border: none;
	font-size: 20px;
	font-weight: bold;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 414px) {
		width: 350px;
	}
`;

export { Button, Form, Container, LeftSide, Linkr, SignPage };
