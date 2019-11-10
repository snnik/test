import axios from 'axios'

const API_URL = 'http://127.0.0.1:8085';

class DataService {

    retrieveAllPosts() {
        return axios.get(`${API_URL}/`);
    }

    deletePost(id){
        return axios.get(`${API_URL}/delete/${id}`);
    }

    retrievePost(id) {
        return axios.get(`${API_URL}/post/${id}`);
    }

    updatePost(id, post) {
        return axios.put(`${API_URL}/post/update/${id}`, post);
    }
  
    createPost(post) {
        return axios.post(`${API_URL}/add`, post);
    }
}

export default new DataService()