import axios from 'axios';
import URL from './URL';

const BASE_URL = URL;

async function postSignUp(signUp) {
	const promise = await axios.post(`${BASE_URL}/signup`, signUp);
	return promise;
}

async function postSignIn(signIn) {
	const promise = await axios.post(`${BASE_URL}/signin`, signIn);
	return promise;
}

export { postSignUp, postSignIn };
