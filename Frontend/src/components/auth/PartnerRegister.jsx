import { Link, useNavigate } from 'react-router-dom';
import '../../styles/theme.css';
import '../../styles/auth.css';
import axios from "axios";


const PartnerRegister = () => {

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.businessname.value;
    const contactName = e.target.contactname.value;
    const phone = e.target.contactphone.value;
    const address = e.target.address.value;
    const email = e.target.businessemail.value;
    const password = e.target.password.value;
    console.log(name,phone,contactName,address,email,password,)

    const response = await axios.post("http://localhost:5000/api/auth/food-partner/register",{
      name: name,
      contactName: contactName,
      phone: phone,
      address: address,
      email: email,
      password: password,
    },{withCredentials: true})
    console.log(response.data)
    navigate("/create-food")
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Food-Partner Registration</h2>
        

        <div className="form-group">
          <label className="form-label" htmlFor="business-name">Business Name</label>
          <input
            type="text"
            id="businessname"
            className="form-input"
            placeholder="Enter owner's full name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Contact Name</label>
            <input
              type="text"
              id="contactname"
              className="form-input"
              placeholder="ABC"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone </label>
            <input
              type="tel"
              id="contactphone"
              className="form-input"
              placeholder="+91 1234567890"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="business-email">Business Email</label>
          <input
            type="email"
            id="businessemail"
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
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="address">ADDRESS</label>
          <input
            type="name"
            id="address"
            className="form-input"
            placeholder="123 Market Street"
          />
        </div>


        <button type="submit" className="submit-button">
          Register as Partner
        </button>

        <Link to="/food-partner/login" className="auth-link">
          Already a partner? Login here
        </Link>
      </form>
    </div>
  );
};

export default PartnerRegister;