import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { AuthContext } from '../context/authContext'


const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  axios.defaults.withCredentials = true;

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(inputs)
      const res = await axios.post("auth/login", inputs)
      navigate("/")
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input type="password" placeholder='password' name='password'onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        { err && <p>{err}</p>}
        <span className='link-to-register'>Don't have an account? <br /> <Link to="/register">Register here.</Link></span>
        <Link to="/"><span>Continue as guest</span></Link>
      </form>
    </div>
  )
}

export default Login