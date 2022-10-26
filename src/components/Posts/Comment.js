import styled from 'styled-components';
import Picture from './Picture';

export default function Comment({ id, userImage, comment }) {
	return (
		<CommentBox>
			<Picture image_url={userImage} alt='User picture' />
			<AuthorMessageBox>
				<AuthorFollower>
					<h1>Luciano</h1>
					<span>following</span>
				</AuthorFollower>

				<p>{comment}</p>
			</AuthorMessageBox>
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
