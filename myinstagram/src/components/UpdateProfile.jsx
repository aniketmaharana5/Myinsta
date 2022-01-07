import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { storage } from "./Firebase";
import { ref } from "@firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import axios from "axios";
class UpdateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      blobImage: null,
      progress: 0,
      firebaseUrl: "",
      caption:""
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
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
  onChangeCaption=(e)=>{
    this.setState({caption:e.target.value})
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
  handleUpdate(e) {
    e.preventDefault();

    const data = {
      profilePic: this.state.firebaseUrl,
      caption:this.state.caption
    };
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    console.log(data);

    console.log(this.state.firebaseUrl);
    axios.put(`http://localhost:8084/user/updateProfile/${userName}`, data, {
      headers: {
        authorization: "Basic " + window.btoa(userName + ":" + password),
      },
    });
    this.props.history.push("/profile")
  }
  render() {
    return (
      <div>
        <br/>
      <div className="container">
        <form onSubmit={this.handleUpdate}>
          <div className="form-outline mb-4">
            <br/>
            <div className="container">
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
            <br />
          </div>
        </div>
          <div className="form-outline mb-4">
            <textarea type="text" id="form1Example2" className="form-control" onChange={this.onChangeCaption} />
            <label className="form-label" htmlFor="form1Example2">
              Add Caption
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{align:'center'}}>
            Update
          </button>
        </form>
      </div>
      </div>
    );
  }
}
export default withRouter(UpdateProfile);
