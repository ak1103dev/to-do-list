import React, { Component } from 'react';
import Router from 'next/router';
import request from 'superagent';
import config from '../config';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  onLogin = () => {
    const { username, password } = this.state;
    return request.post(`${config.apiHost}/users/login`)
      .send({ username, password })
      .end((err, res) => {
        if (err) {
          console.error(err);
          return alert('Error !!!');
        }
        console.log(res.body);
        const { accessToken } = res.body;
        localStorage.setItem('accessToken', accessToken);
        return Router.push('/home');
      });
  }
  onRegister = () => {
    const { username, password } = this.state;
    return request.post(`${config.apiHost}/users`)
      .send({ username, password })
      .end((err, res) => {
        if (err) {
          console.error(err);
          return alert('Error !!!');
        }
        return this.onLogin();
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Login / Register</h1>
        <div className="box">
          <div>
            <label>Username:</label><br />
            <input className="input" onChange={(event) => this.setState({ username: event.target.value })} />
          </div>
          <div>
            <label>Password:</label><br />
            <input type="password" className="input" onChange={(event) => this.setState({ password: event.target.value })} />
          </div>
          <div className="btnG">
            <button className="login" onClick={this.onLogin}>Login</button>
            <button className="register" onClick={this.onRegister}>Register</button>
          </div>
        </div>
        <style jsx>{`
          .container {
            text-align: center;
            margin-left: 500px;
            margin-right: 500px;
          }
          @media(max-width: 767px) {
            .container {
              text-align: center;
              margin-left: 100px;
              margin-right: 100px;
            }
          }
          .box {
            text-align: left;
          }
          .box .input {
            width: 100%;
            margin-bottom: 10px;
          }
          .btnG {
            width: 100%;
          }
          .btnG >button {
            width: calc(50% - 5px);
          }
          .btnG .login {
            margin-right: 5px;
          }
          .btnG .register {
            margin-left: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default Login;
