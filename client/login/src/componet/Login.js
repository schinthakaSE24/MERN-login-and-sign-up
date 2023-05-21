import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            const response =  axios.post('http://localhost:8000/login', {
              email,
              password,
            });
      
            // Login successful
            console.log(response.data);
            navigate("/Home");
           
            // Store the authentication token in local storage or state management
          } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
              setError(error.response.data.error);
            } else {
              setError('An unknown error occurred');
            }
            

            // Login failed
            console.log(error);
          }
    };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
        </div>
        <p>{error}</p>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
 
      
  )
}
