import axios from 'axios';
const BASE_URL = 'http://localhost:4000';

function getComments(token, postId) {
	const promise = axios.get(`${BASE_URL}/comments/${postId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return promise;
}

function getCommentsCount(token, postId) {
	const promise = axios.get(`${BASE_URL}/commentscount/${postId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return promise;
}

async function postComment(token, body) {
	const promise = await axios.post(`${BASE_URL}/comments`, body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return promise;
}

export { getComments, postComment, getCommentsCount };
