import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../../services/accountServices';

import "./common/inputForms.css"
import google from "@/assets/img/google.svg"


function Login() {
  const navigate = useNavigate();
  const [showErrorMsg, setShowErrorMsg] = useState(false);
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
    if (form.id.trim() === '') {setForm((prev) => ({...prev, id: ''}))}
    if (form.password.trim() === '') {setForm((prev) => ({...prev, id: ''}))}

    handleLogin(form)
    .then(res => {
      if (res.status == 200) {
        setShowErrorMsg(false);
        sessionStorage.setItem('jwtToken', (res.headers.authorization).split(' ')[1]);
        navigate('/')
      } else {
        setShowErrorMsg(true);
      }
      window.location.reload();
    })
    .catch(e => {
      console.error(e);
      setShowErrorMsg(true);
    })
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
              type="text"
              name="id"
              placeholder="ID"
              value={form.id}
              onChange={handleChange}
              required
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
              required
            />
          </div>
        </div>
        {showErrorMsg && <p style={{color: "red", marginTop: "0"}}>로그인 실패.</p>}
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