import { useState } from 'react';
import './SignUp.css';
import google from '@/assets/google.svg';

function SignUp() {
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

    //Todo: 백엔드 연결
    console.log('Form submitted:', form);
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
            />
          </div>
        </div>
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
