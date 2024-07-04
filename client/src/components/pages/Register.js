import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  });

  const { username, password, password2, firstname, lastname, email } = userData;
  const onChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwords do not match");
      return;
    }

    fetchData("/user/register",
      {
        firstname,
        lastname,
        email,
        username,
        password
      },
      "POST"
    )
    .then((data) => {
      if (!data.message) {
        console.log(data);
        navigate("/books");
      } else {
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.log(`Error! ${error.message}`);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="firstname"
            name='firstname'
            onChange={onChange}
            value={firstname}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="lastname"
            name='lastname'
            onChange={onChange}
            value={lastname}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            name='email'
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            onChange={onChange}
            value={password2}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
    </div>
  );
};

export default Register;
