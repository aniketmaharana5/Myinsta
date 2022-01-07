import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UpdateProfile extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlFile1">Choose Profile Pic</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Caption</label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputText"
              placeholder="Caption"
            />
          </div>
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default withRouter(UpdateProfile);
