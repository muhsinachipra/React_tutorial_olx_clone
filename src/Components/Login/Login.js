import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {

  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { firebaseApp } = useContext(FirebaseContext)

  const handleLogin = (e) => {
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/')
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={() => {
          history.push('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
