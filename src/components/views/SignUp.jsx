import { useState } from 'react';
import "./common/inputForms.css";
import google from '@/assets/google.svg';
import { handleSignUP } from '../../services/accountServices';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (form.firstName.trim() === '') {setForm((prev) => ({...prev, firstName: ''}))}
    if (form.lastName.trim() === '') {setForm((prev) => ({...prev, lastName: ''}))}
    if (form.id.trim() === '') {setForm((prev) => ({...prev, id: ''}))}
    if (form.email.trim() === '') {setForm((prev) => ({...prev, email: ''}))}
    if (form.password.trim() === '') {setForm((prev) => ({...prev, password: ''}))}
    if (form.confirmPassword.trim() === '') {setForm((prev) => ({...prev, confirmPassword: ''}))}

    if (form.password !== form.confirmPassword) {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      return
    }
    
    handleSignUP({
      username: form.id,
      nickname: form.firstName + (form.lastName != '' ? (' ' + form.lastName) : ''),
      email: form.email,
      password: form.password
    })
    .then(res => {
      if (res.status == 200) {
        setErrorMsg();
        sessionStorage.setItem('jwtToken', (res.headers.authorization).split(' ')[1]);
        navigate('/')
      } else {
        setErrorMsg('회원가입 실패.');
      }
      window.location.reload();
    })
    .catch(e => {
      console.error(e);
      setErrorMsg('회원가입 실패.');
    })
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className='forms'>
          <div className="form-group" style={{ display: "flex" }}>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
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
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
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
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {errorMsg && <p style={{color: "red", marginTop: "0"}}>{errorMsg}</p>}
        <div className='submit-btn-container'><button type="submit" className="submit-button">Sign Up</button></div>
        <div className="google-btn">
          <button className="google-button" onClick={handleGoogleLogin}>
            <img src={google} alt='google-logo' style={{ width: "20px", marginRight: "10px" }} /> Sign up with Google
          </button>
        </div>
        <div className="link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
