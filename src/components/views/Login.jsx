import { useState } from 'react';
import './Login.css';
import google from "@/assets/google.svg"

function Login() {
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

    //Todo: 백엔드 연결
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>
        <div className="form-group">
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={form.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Log In</button>
        <div className="google-login">
          <button className="google-button" onClick={handleGoogleLogin}>
            <img src={google} alt='google-logo' style={{width: "20px", marginRight: "10px"}} /> Log in with Google
          </button>
        </div>
        <div className="signup-link">
          No account yet? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;