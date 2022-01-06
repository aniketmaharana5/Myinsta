import axios from 'axios';

const Post_api_base_url="http://localhost:8084/user/posts";

class PostService{
    getPost(){
        return axios.get(Post_api_base_url);
    }

    // deleteEmployee(Year){
    //     return axios.delete(Student_api_base_url + '/' + Year);
    // }
}



export default new PostService()