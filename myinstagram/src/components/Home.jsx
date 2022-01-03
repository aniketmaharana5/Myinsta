import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { storage } from "./Firebase";
import { ref } from "@firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";

import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      blobImage:null,
      progress: 0,
      firebaseUrl:'',
    };
    this.handlePost = this.handlePost.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(img){
    console.log(img)
    if (!img) return;
    const storageRef = ref(storage, `/image/${img.name}`);
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: prog });
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((url) =>this.setState({firebaseUrl:url}),
        console.log(this.state.firebaseUrl));
      }
    );
  };

  handlePost(e) {
    const userName=localStorage.getItem('userName');
    const password=localStorage.getItem('password');
    console.log(userName);
    console.log(password);
    e.preventDefault();
    this.uploadFile(this.state.image);

    this.timer = setTimeout(() =>
    console.log("hiiiiiiiiiiiiiiiiiiiiiik")
    // const data={
    //   firebaseUrl:this.state.firebaseUrl,
    // };
    // console.log(this.state.firebaseUrl)
    // axios.post(`http://localhost:8084/user/posts/${userName}`,data,
    // { headers: {authorization: 'Basic ' + window.btoa(userName + ":" +password) } }
    
    , 20000);
  

    // axios.post(`http://localhost:8084/user/post/${localStorage.getItem('userName')}`)
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        blobImage: URL.createObjectURL(img),
        image:img
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div className="container" >
            <h1>Select Image</h1>
            <img
              src={this.state.blobImage}
              style={{ width: "30em", height: "30vh",borderRadius:'2px'}}
            />
                        <br/>

            <input
              type="file"
              name="myImage"
              accept=" image/*"
              onChange={this.onImageChange}
            />
            <h5>Uploaded {this.state.progress}%</h5>
            <button
              className="btn btn-primary"
              type="onClick"
              onClick={this.handlePost}
            >
              Post
            </button>
          </div>
        </div>
        <div className="container">
          <div className="top_bar">
            <div className="profile_img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <span>Coding BD</span>
            </div>
            <i className="fa fa-ellipsis-h"></i>
          </div>
          <div className="main_img">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="footer">
            <div className="icons">
              <div className="left_side">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
              </div>
              <div className="right_side">
                <i className="fa fa-bookmark-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="likeCount">
              <p>10,890 Likes</p>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                excepturi impedit facere, ad adipisci, cum veritatis libero
                ipsam, ex quo quis neque debitis tenetur consequatur?
              </p>
            </div>
            <div className="comments">
              <p>View All 1008 Comments</p>
            </div>
            <div className="comments_box">
              <div className="icon">😊</div>
              <div className="input_field">
                <input type="text" placeholder="Add a Comments..." id="" />
              </div>
              <div className="btn">
                <button onClick={this.handlePost}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
