import axios from 'axios';

const BASE_URL = 'https://git.heroku.com/project-linkr-api.git';

async function postSignUp(signUp) {
	const promise = await axios.post(`${BASE_URL}/signup`, signUp);
	return promise;
}

async function postSignIn(signIn) {
	const promise = await axios.post(`${BASE_URL}/signin`, signIn);
	return promise;
}

export { postSignUp, postSignIn };
