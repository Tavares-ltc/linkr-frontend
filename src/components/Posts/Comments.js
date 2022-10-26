import styled from 'styled-components';
import Picture from './Picture';
import { FiSend } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';
import Comment from './Comment';
import { FallingLines } from 'react-loader-spinner';
import { postComment } from '../../services/comments';
import getToken from '../../services/getToken';

export default function Comments({ userImage, postId, userId, comments }) {
	console.log(comments);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		message: '',
	});
	const [message, setMessage] = useState({
		message: '',
	});

	function handleMessage(e) {
		let value = e.target.value;
		setMessage({ ...message, [e.target.name]: value });
	}
	async function sendMessage(e) {
		e.preventDefault();
		const token = getToken();

		try {
			console.log(message.message);
			message.postId = postId;
			message.userId = userId;
			console.log(message);
			console.log(token);

			await postComment(token, message);

			//navigate("/");
		} catch (error) {
			setLoading(!loading);
			setError({
				isError: true,
				message: error.response.data,
			});
		}
	}

	function noPostsYet() {
		if (!comments) {
			return (
				<Loading>
					<FallingLines
						color='#fff'
						width='100'
						visible={true}
						ariaLabel='falling-lines-loading'
					/>
				</Loading>
			);
		}
		if (comments.length === 0) {
			return <NoPosts>There are no posts yet 😭</NoPosts>;
		}
	}
	return (
		<ComentPageWrapper>
			<FakeHeader>AEWWWW</FakeHeader>

			{comments.length > 0
				? comments.map((comment, key) => {
						return (
							<Comment
								key={key}
								id={key + 1}
								userImage={userImage}
								comment={comment.comment}
							/>
						);
				  })
				: noPostsYet()}

			<WritterImputBox>
				<Picture image_url={userImage} alt='User picture' />
				<input
					autoComplete='off'
					type='text'
					name='message'
					value={message.message}
					onChange={handleMessage}
					placeholder='write a comment...'
					required
				/>
				<IconWrappler>
					<FiSend onClick={sendMessage} />
				</IconWrappler>
			</WritterImputBox>
		</ComentPageWrapper>
	);
}

const FakeHeader = styled.div`
	z-index: -10;
	width: 577px;
	height: 15px;
	background: #1e1e1e;
	top: 231px;
`;

const ComentPageWrapper = styled.div`
	z-index: 0;
	position: relative;
	top: -15px;
	display: flex;
	flex-direction: column;
	width: 611px;
	height: 100%;
	background: #1e1e1e;
	border-radius: 0 0 16px 16px;
	padding: 0 17px;
	color: white;
	img {
		width: 39px;
		height: 39px;
	}

	input {
		font-family: 'Lato';
		font-weight: 400;
		font-size: 12px;
		width: 100%;
		height: 39px;
		border-radius: 8px;
		padding-left: 10px;
		font-size: 20px;
		font-weight: 500;
		background-color: #252525;
		border: none;
		color: #acacac;
	}

	input::placeholder {
		font-size: 14px;
		font-weight: 500;
		color: #575757;
		font-style: italic;
	}

	input:focus {
		outline: 0.5px solid grey;
	}

	@media (max-width: 650px) {
		border-radius: 0;
	}
`;

const IconWrappler = styled.div`
	position: absolute;
	right: 15px;
	bottom: 23px;
`;

const WritterImputBox = styled.div`
	position: relative;
	height: 72px;
	display: flex;
	gap: 15px;
	align-items: center;
`;

const Loading = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const NoPosts = styled.div`
	display: flex;
	justify-content: center;
	font-family: 'Lato', sans-serif;
	width: 100%;
	color: #fff;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	margin-top: 40px;
`;
