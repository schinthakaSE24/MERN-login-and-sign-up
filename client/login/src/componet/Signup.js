import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
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
            const response = axios.post('http://localhost:8000/register', {
              
              email,
              password,
            });
      
            // Registration successful
            
            console.log(response.data);
            navigate("/login")
            // Redirect to login or display success message
          } catch (error) {
            // Registration failed
            if (error.response && error.response.data && error.response.data.error) {
              setError(error.response.data.error);
            } else {
              setError('An unknown error occurred');
            }
          }
        
    };
  return (
    <div className="container">
    <h2>Register here</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
      </div>
      <p> {error} </p>
      <button type="submit" className="btn btn-primary">sign up</button>
   
    </form>
  </div>
  
    
  )
}
