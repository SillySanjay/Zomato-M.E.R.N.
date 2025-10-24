import { Link, useNavigate } from 'react-router-dom';
import '../../styles/theme.css';
import '../../styles/auth.css';
import axios from "axios"


const PartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:5000/api/auth/food-partner/login",{
      email,
      password
    },{withCredentials: true});
    navigate("/create-food")
  }


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Food-Partner Login</h2>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">Business Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your business email"
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

        <Link to="/food-partner/register" className="auth-link">
          Want to become a partner? Register here
        </Link>
      </form>
    </div>
  );
};

export default PartnerLogin;