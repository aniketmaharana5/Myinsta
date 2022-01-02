import React, { Component } from "react";
import "./Profile.css"
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="container">
            <div class="profile">
              <div class="profile-image">
                <img
                  src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                  alt=""
                />
              </div>

              <div class="profile-user-settings">
                <h1 class="profile-user-name">janedoe_</h1>

                <button class="btn profile-edit-btn">Edit Profile</button>

                <button
                  class="btn profile-settings-btn"
                  aria-label="profile settings"
                >
                  <i class="fas fa-cog" aria-hidden="true"></i>
                </button>
              </div>

              <div class="profile-stats">
                <ul>
                  <li>
                    <span class="profile-stat-count">164</span> posts
                  </li>
                  <li>
                    <span class="profile-stat-count">188</span> followers
                  </li>
                  <li>
                    <span class="profile-stat-count">206</span> following
                  </li>
                </ul>
              </div>

              <div class="profile-bio">
                <p>
                  <span class="profile-real-name">Jane Doe</span> Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="container">
            <div class="gallery">
              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true"></i> 56
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true"></i> 2
                    </li>
                  </ul>
                </div>
              </div>

              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true"></i> 89
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true"></i> 5
                    </li>
                  </ul>
                </div>
              </div>

 
              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Gallery</span>
                  <i class="fas fa-clone" aria-hidden="true"></i>
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true"></i> 52
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true"></i> 4
                    </li>
                  </ul>
                </div>
              </div>


              <div class="gallery-item" tabindex="0">
                <img
                  src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                  class="gallery-image"
                  alt=""
                />

                <div class="gallery-item-type">
                  <span class="visually-hidden">Video</span>
                  <i class="fas fa-video" aria-hidden="true"></i>
                </div>

                <div class="gallery-item-info">
                  <ul>
                    <li class="gallery-item-likes">
                      <span class="visually-hidden">Likes:</span>
                      <i class="fas fa-heart" aria-hidden="true"></i> 30
                    </li>
                    <li class="gallery-item-comments">
                      <span class="visually-hidden">Comments:</span>
                      <i class="fas fa-comment" aria-hidden="true"></i> 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- End of gallery --> */}

            <div class="loader"></div>
          </div>
          {/* <!-- End of container --> */}
        </div>
      </div>
    );
  }
}
