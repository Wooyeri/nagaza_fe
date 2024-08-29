import { useState } from 'react';
import axios from 'axios';
import "./inputForms.css"
import google from "@/assets/google.svg"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', form);

  //   //Todo: 백엔드 연결
  //   sessionStorage.setItem('jwtToken', "dummy")
  //   navigate('/')
  //   window.location.reload()
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        username: form.username,
        password: form.password,
      }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true
      });


      if (response.status === 200) {
        const token = response.headers.authorization.split(' ')[1];
        console.log("token : ", token);
        sessionStorage.setItem('token', token);
        navigate('/');
        // window.location.reload();
      }
    } catch (error) {
      setError('Login failed.');
      console.error('Error logging in:', error);
    }
  };
  
        
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>
        <div className='forms'>
          <div className="form-group">
            <label>ID</label>
            <input
              type="username"
              name="username"
              placeholder="ID"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* 에러 메시지 출력 */}
        <div className='submit-btn-container'><button type="submit" className="submit-button">Log In</button></div>
        <div className="google-btn">
          <button className="google-button" onClick={handleGoogleLogin}>
            <img src={google} alt='google-logo' style={{ width: "20px", marginRight: "10px" }} /> Log in with Google
          </button>
        </div>
        <div className="link">
          No account yet? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;