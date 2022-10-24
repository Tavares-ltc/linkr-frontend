import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

function auth (){
    const aut = JSON.parse(localStorage.getItem("linkr"))?.token;
    const config = {
        headers : {
            Authorization: `Bearer ${aut}`
        }
    }

    return config
}

function editPost({formEdit,postId}){
    const config = auth()
    const promise = axios.put(`${BASE_URL}updatePost/${postId}`,formEdit, config);
    return promise;
}

function deletePost(postId){
    const config = auth()
    const promise = axios.delete(`${BASE_URL}delete/${postId}`, config);
    return promise;
}

export {editPost, deletePost}