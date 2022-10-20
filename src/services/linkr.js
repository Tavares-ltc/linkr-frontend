import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

async function postSignUp(signUp) {
	const promise = await axios.post(`${BASE_URL}/signup`, signUp);
	return promise;
}

async function postSignIn(signIn) {
	const promise = await axios.post(`${BASE_URL}/signin`, signIn);
	return promise;
}

export { postSignUp, postSignIn };
