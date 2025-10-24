import { Link, useNavigate } from 'react-router-dom';
import '../../styles/theme.css';
import '../../styles/auth.css';
import axios from 'axios'

const UserRegister = () => {
const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(fullName,email,password)

    const response = await axios.post("http://localhost:5000/api/auth/user/register",{
      name: fullName,
      email: email,
      password: password
    },{
      withCredentials: true
    })
    console.log(response.data);
    navigate("/")

  }
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">User Registration</h2>

        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <button type="submit" className="submit-button">
          Register
        </button>

        <Link to="/user/login" className="auth-link">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
};

export default UserRegister;