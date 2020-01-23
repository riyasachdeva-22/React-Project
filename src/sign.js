import React, { Component } from 'react'
import './Lofin.css';
// import per from './per.png';
export default class Sign extends Component {
    render() {
        return (
            <div>
                  <div className="loginbox">
                    {/* <img src={per} className="avatar" /> */}
                    <h1>SignUp Here</h1>
                    <form>
                      <p>Username</p>
                      <input type="text" name="username" placeholder="Enter Username" required/>
                      <p>Password</p>
                      <input type="password" name="password" placeholder="Enter Password" />
                      <input type="submit" value="create an account"/>
                    </form>
                  </div>
            </div>
        )
    }
}
