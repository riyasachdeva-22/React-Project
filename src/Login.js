import React, { Component } from "react";
import './Lofin.css';
// import per from './per.png';


class Login extends Component
{
  constructor(props)
  {
    super(props);
    let loggedIn=false
    this.state = {
      username:'',
      password: '',

    }
  }
  onChange = (e)=>
  {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
    render()
    {
      return (
        <React.Fragment></React.Fragment>
      )
            //        return (
            //     <div>
            //     <h1>Login</h1>
            //     <form onSubmit={this.submitForm}>
            //       <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
            //       <br />
            //       <input type="placeholder" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
            //       <br />
            //       <input type="submit" />
            //       </form>
            //         </div>

            //   );
            // }
          }
        }
        
export default Login;