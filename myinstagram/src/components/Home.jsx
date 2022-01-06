import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { storage } from "./Firebase";
import { ref } from "@firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import "./Home.css";
import PostService from "../Service/PostService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      blobImage: null,
      progress: 0,
      firebaseUrl: "",
      posts: [],
      isLoggedIn: true,
    };
    this.handlePost = this.handlePost.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleDislikes = this.handleDislikes.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleLikes(postId) {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    // console.log(userName);
    // console.log(password);

    axios.put(`http://localhost:8084/user/likes/${postId}/${userName}`, {
      headers: {
        authorization: "Basic " + window.btoa(userName + ":" + password),
      },
    });
    this.setState({ isLoggedIn: false });

    PostService.getPost().then((res) => {
      this.setState({ posts: res.data });
    });
  }
  handleDislikes(postId) {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    axios.put(`http://localhost:8084/user/dislikes/${postId}/${userName}`, {
      headers: {
        authorization: "Basic " + window.btoa(userName + ":" + password),
      },
    });
    PostService.getPost().then((res) => {
      this.setState({ posts: res.data });
    });
    this.setState({ isLoggedIn: true });

  }
  uploadFile() {
    let img = this.state.image;
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
        getDownloadURL(uploadTask.snapshot.ref).then(
          (url) => this.setState({ firebaseUrl: url }),
          console.log(this.state.firebaseUrl)
        );
      }
    );
  }

  handlePost(e) {
    const data = {
      pic: this.state.firebaseUrl,
    };
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    console.log(userName);
    console.log(password);
    e.preventDefault();

    console.log(this.state.firebaseUrl);
    axios.post(`http://localhost:8084/user/posts/${userName}`, data, {
      headers: {
        authorization: "Basic " + window.btoa(userName + ":" + password),
      },
    });
    window.location.reload(false);
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        blobImage: URL.createObjectURL(img),
        image: img,
      });
    }
  };

  componentDidMount() {
    // const userName = localStorage.getItem("userName");
    // const password = localStorage.getItem("password");

    PostService.getPost().then((res) => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <Link to="/profile">Go to Profile</Link>
            <h1>Select Image</h1>
            <img
              src={this.state.blobImage}
              style={{ width: "30em", height: "30vh", borderRadius: "2px" }}
            />
            <br />
            <input
              type="file"
              name="myImage"
              accept=" image/*"
              onChange={this.onImageChange}
            />
            <h5>Uploaded {this.state.progress}%</h5>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.uploadFile}
            >
              Upload
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-primary"
              type="onClick"
              onClick={this.handlePost}
            >
              Post
            </button>
            <br />
          </div>
        </div>
        {this.state.posts.map((post) => (
          <div className="container">
            <div className="top_bar">
              <div className="profile_img">
                <img src={post.profilePic} alt="" />
                <span key={post.userName}>
                  <b>{post.userName}</b>
                </span>
                &nbsp;&nbsp;
                <button className="btn btn-primary">Follow</button>
              </div>
              <i className="fa fa-ellipsis-h"></i>
            </div>
            <div className="main_img">
              <img src={post.pic} style={{ width: "640px" }} />
            </div>
            <div className="footer">
              <div className="icons">
                <div className="left_side">
                  {this.state.isLoggedIn ? (
                    <i
                      className="fa fa-heart-o"
                      aria-hidden="true"
                      onClick={() => {
                        this.handleLikes(post.postId);
                      }}
                      
                    ></i>
                  ) : (

                    
                    <i
                      className="fa fa-heart"
                      aria-hidden="true"
                      onClick={() => {
                        this.handleDislikes(post.postId);
                      }}
                      
                    ></i>
                  )}
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
                <div className="right_side">
                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                </div>
              </div>
              <div className="likeCount">
                <p>{post.likes}&nbsp;likes</p>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis excepturi impedit facere, ad adipisci, cum veritatis
                  libero ipsam, ex quo quis neque debitis tenetur consequatur?
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
                  <button>Post</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default withRouter(Home);
