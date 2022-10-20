import axios from 'axios';

    const BASE_URL = 'http://localhost:4000';

async function getUserById(userId) {
	return axios.get(`${BASE_URL}/user/data/${userId}`)
}
async function getUserPosts(userId) {
    return axios.get(`${BASE_URL}/user/posts/${userId}`)
}


export {
    getUserById,
    getUserPosts
}