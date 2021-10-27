import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Signup extends Component {
  render() {
    return (
      <div>
        <div className="az-signup-wrapper">
          <div className="az-column-signup-left">
            <div>
              <img
                src={require("../../assets/images/zenn.png")}
                alt="ZEN Charity Platform"
              ></img>
              <h5>ZEN TRACKING SOLUTION</h5>
              <p>Your first step to transparency.</p>
              <p>Zen provide a solution for charites that help them tackling the most challending issues from funding to reporting</p>
              <a href="https://zen-charity.net/landing" className="btn btn-outline-indigo">Learn More</a>
            </div>
          </div>{/* az-column-signup-left */}
          <div className="az-column-signup">
          <img
            src={require("../../assets/images/zenn.png")}
            alt="ZEN Charity Platform"
          ></img>
            <div className="az-signup-header">
              <h2>Get Started</h2>
              <h4>Show donors where the money really goes.</h4>

              <form action="#/">
                <div className="form-group">
                  <label>Firstname &amp; Lastname</label>
                  <input type="text" className="form-control" placeholder="Enter your firstname and lastname"/>
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter your email"/>
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password"/>
                </div>{/* form-group */}
                <Link to="/" className="btn btn-az-primary btn-block">Create Account</Link>
                <div className="row row-xs">
                  <div className="col-sm-6"><button className="btn btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</button></div>
                  <div className="col-sm-6 mg-t-10 mg-sm-t-0"><button className="btn btn-primary btn-block"><i className="fab fa-twitter"></i> Signup with Twitter</button></div>
                </div>{/* row */}
              </form>
            </div>{/* az-signup-header */}
            <div className="az-signup-footer">
              <p>Already have an account? <Link to="/general-pages/signin">Sign In</Link></p>
            </div>{/* az-signin-footer */}
          </div>{/* az-column-signup */}
        </div>{/* az-signup-wrapper */}
      </div>
    )
  }
}

export default Signup
