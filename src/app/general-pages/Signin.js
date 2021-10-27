import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Signin extends Component {
  render() {
    return (
      <div>
        <div className="az-signin-wrapper">
          <div className="az-card-signin">
          <img
            src={require("../../assets/images/img1.jpg")}
            alt=""
          ></img>
            <div className="az-signin-header">
              <h2>Welcome back!</h2>
              <h4>Please sign in to continue</h4>

              <form action="#/">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter your email" defaultValue="demo@rizq.us"/>
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" defaultValue="thisisademo"/>
                </div>{/* form-group */}
                <Link to="/" className="btn btn-az-primary btn-block">Sign In</Link>
              </form>
            </div>{/* az-signin-header */}
            <div className="az-signin-footer">
              <p><a href="#/">Forgot password?</a></p>
              <p>Don't have an account? <Link to="/general-pages/signup">Create an Account</Link></p>
            </div>{/* az-signin-footer */}
          </div>{/* az-card-signin */}
        </div>{/* az-signin-wrapper */}
      </div>
    )
  }
}

export default Signin
