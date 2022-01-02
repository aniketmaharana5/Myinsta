import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
    this.handlePost = this.handlePost.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }
  handlePost() {
    axios.get(`http://localhost:8084/user/posts`).then((res) => {
      console.log(res);
    });
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
        <div class="container">
          <div class="top_bar">
            <div class="profile_img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <span>Coding BD</span>
            </div>
            <i class="fa fa-ellipsis-h"></i>
          </div>
          <div class="main_img">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div class="footer">
            <div class="icons">
              <div class="left_side">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-comment-o" aria-hidden="true"></i>
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </div>
              <div class="right_side">
                <i class="fa fa-bookmark-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="likeCount">
              <p>10,890 Likes</p>
            </div>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                excepturi impedit facere, ad adipisci, cum veritatis libero
                ipsam, ex quo quis neque debitis tenetur consequatur?
              </p>
            </div>
            <div class="comments">
              <p>View All 1008 Comments</p>
            </div>
            <div class="comments_box">
              <div class="icon">😊</div>
              <div class="input_field">
                <input type="text" placeholder="Add a Comments..." id="" />
              </div>
              <div class="btn">
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
