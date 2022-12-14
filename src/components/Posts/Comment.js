import styled from 'styled-components';
import Picture from './Picture';
import { verifyFollower } from '../../services/comments';
import getToken from '../../services/getToken';
import { useEffect, useState, useRef } from 'react';

export default function Comment({
	id,
	commenterImage,
	comment,
	commenterId,
	authorId,
	commenterName,
}) {
	const [follow, setFollow] = useState([]);
	const body = {
		followerId: commenterId,
		postAuthor: authorId,
	};
	let follower = '';

	useEffect(() => {
		const token = getToken();
		verifyFollower(token, body).then((res) => {
			setFollow(res.data);
		});
	}, []);

	if (follow.length === 0) {
	} else {
		if (commenterId === authorId) {
			follower = `post's author`;
		} else if (follow.follow.rows.length === 1) {
			follower = 'following';
		}
	}

	return (
		<CommentBox>
			{follow.length === 0 ? (
				<></>
			) : (
				<>
					<Picture image_url={commenterImage} alt='User picture' />
					<AuthorMessageBox>
						<AuthorFollower>
							<h1>{commenterName}</h1>
							<span>{follower}</span>
						</AuthorFollower>

						<p>{comment}</p>
					</AuthorMessageBox>
				</>
			)}
		</CommentBox>
	);
}

const CommentBox = styled.div`
	width: 577px;
	height: 72px;
	display: flex;
	border-bottom: 1px solid #353535;
	gap: 15px;
	align-items: center;
`;

const AuthorMessageBox = styled.div`
	p {
		color: #acacac;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
	}
`;
const AuthorFollower = styled.div`
	display: flex;
	gap: 15px;
	h1 {
		color: #f3f3f3;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 17px;
	}
	span {
		color: #565656;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
	}
`;
