import axios from 'axios';

const Post_api_base_url="http://localhost:8084/user/posts";

class PostService{
    getPost(){
        const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
        return axios.get(`http://localhost:8084/user/posts/${userName}`,{
            headers: {
                authorization: "Basic " + window.btoa(userName + ":" + password),
              },});
    }

    // deleteEmployee(Year){
    //     return axios.delete(Student_api_base_url + '/' + Year);
    // }
}



export default new PostService()