import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      repeatpassword: "",
      flag: false,
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    this.handleValidatePassword = this.handleValidatePassword.bind(this);
    this.handleconfirm=this.handleconfirm.bind(this);
  }

  handleUserName(event) {
    this.setState({ userName: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleRepeatPassword(event) {
    this.setState({ repeatpassword: event.target.value });
  }

  handleconfirm(pass,repeat){
    if (pass != repeat) {
      alert("Password doesnt match");
      this.state.flag=true;
    } else {
      this.state.flag=false;
    }
  }

  handleValidatePassword(pass) {
    if (pass.length < 6) {
      alert("Password must be greater than 6");
      this.state.flag=true;
    }else{
      this.handleconfirm(this.state.password,this.state.repeatpassword);
    }
    
  }

  handleRegister(event) {
    event.preventDefault();
    this.handleValidatePassword(this.state.password, this.state.repeatpassword);
    if (this.state.flag == false) {
      const user = {
        userName: this.state.userName,
        password: this.state.password,
      };
      axios
        .post("http://localhost:8084/Auth/register", user)
        .then((res) => {
          if (res.status == 200) {
            alert("registeration done succesfully");

            this.props.history.push("/");
          }
        })
        .catch((error) => {
          alert("UserName Already exists");
          window.location.reload(false);
        });
    }
    else{
      window.location.reload(false)
    }
  }

  render() {
    return (
      <div>
        <section class="vh-100" style={{ backgroundColor: "#eee" }}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form
                          class="mx-1 mx-md-4"
                          onSubmit={this.handleRegister}
                        >
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                // type="email"
                                id="form3Example3c"
                                class="form-control"
                                onChange={this.handleUserName}
                              />
                              <label class="form-label" for="form3Example3c">
                                Your UserName
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                onChange={this.handlePassword}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fa fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                class="form-control"
                                onChange={this.handleRepeatPassword}
                              />
                              <label class="form-label" for="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-5">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label class="form-check-label" for="form2Example3">
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://howdoesshe.com/wp-content/uploads/2016/08/Instagram-2.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Register);
