import { useState } from "react";
import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const navigate = useNavigate();
  const { username, password, confirmPassword, email } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      
    }

    else
    {
      fetchData("/user/login",formData,"POST")
    .then((data) => {
      if (!data.message) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
        window.location.reload();
        
      } 
    })
    .catch((error) => {
      console.log(error)
    });
  
    }
  
    
    console.log("Form submitted", formData);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form id="LogUser" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username}
            onChange={onChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={onChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input 
            type="password" 
            id="confirm-password" 
            name="confirmPassword" 
            value={confirmPassword}
            onChange={onChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={onChange}
            required 
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
