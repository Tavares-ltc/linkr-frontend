import axios from 'axios';
import BASE_URL from './BASE_URL';

function getComments(token, postId) {
	const promise = axios.get(`${BASE_URL}/comments/${postId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return promise;
}

function getCommentsCount(token, postId) {
	console.log(postId);
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

function verifyFollower(token, body) {
	const promise = axios.post(`${BASE_URL}/verifyfollower`, body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return promise;
}

function getIdByToken(token) {
	const promise = axios.get(`${BASE_URL}/getid`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return promise;
}

export {
	getComments,
	postComment,
	getCommentsCount,
	verifyFollower,
	getIdByToken,
};
