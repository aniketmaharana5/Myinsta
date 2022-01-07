import axios from "axios";
import React, { Component } from "react";
import "./Profile.css";
import {Link} from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        userName: "",
        followers: 0,
        following: 0,
        noOfPosts: 0,
        profilePic: "",
      },
      posts: [],
    };
  }

  componentDidMount() {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    axios
      .get(`http://localhost:8084/user/profile/${userName}`, {
        headers: {
          authorization: "Basic " + window.btoa(userName + ":" + password),
        },
      })
      .then((res) => {
        this.setState({ users: res.data });
      });

    axios
      .get(`http://localhost:8084/user/profilePost/${userName}`, {
        headers: {
          authorization: "Basic " + window.btoa(userName + ":" + password),
        },
      })
      .then((res) => {
        this.setState({posts:res.data});
      });
  }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="profile">
              <div className="profile-image">
                <img
                  src={this.state.users.profilePic}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>

              <div className="profile-user-settings">
                <h1 className="profile-user-name">{this.state.users.userName}</h1>

                <Link to="/updateProfile" className="btn profile-edit-btn">Edit Profile</Link>

                <button
                  className="btn profile-settings-btn"
                  aria-label="profile settings"
                >
                  <i className="fas fa-cog" aria-hidden="true"></i>
                </button>
              </div>

              <div className="profile-stats">
                <ul>
                  <li>
                    <span className="profile-stat-count">
                      {this.state.users.noOfPosts}
                    </span>{" "}
                    posts
                  </li>
                  <li>
                    <span className="profile-stat-count">
                      {this.state.users.followers}
                    </span>{" "}
                    followers
                  </li>
                  <li>
                    <span className="profile-stat-count">
                      {this.state.users.following}
                    </span>{" "}
                    following
                  </li>
                </ul>
              </div>

              <div className="profile-bio">
                <p>
                  <span className="profile-real-name">Jane Doe</span> Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="gallery">
              {this.state.posts.map((post1)=>(
                <div className="gallery-item" tabIndex="0">
                  <img
                    src={post1.pic}
                    className="gallery-image"
                    alt=""
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="fas fa-heart" aria-hidden="true"></i>{post1.likes}
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="fas fa-comment" aria-hidden="true"></i> 2
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
