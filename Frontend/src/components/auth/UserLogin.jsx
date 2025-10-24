import { Link, useNavigate } from 'react-router-dom';
import '../../styles/theme.css';
import '../../styles/auth.css';
import axios from "axios"


const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const response = await axios.post("http://localhost:5000/api/auth/user/login",{
      email,
      password
    },{withCredentials:true})

    navigate("/")
  }
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">User Login</h2>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="submit-button">
          Login
        </button>

        <div>
          <p className="auth-link">Don't have an account?</p>
          <div className="register-options">
            <Link to="/user/register" className="register-option">
              <h3>Register as User</h3>
              <p>Order food from your favorite restaurants</p>
            </Link>
            <Link to="/food-partner/register" className="register-option">
              <h3>Register as Partner</h3>
              <p>List your restaurant and grow your business</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;