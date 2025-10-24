import { useParams } from "react-router";
import "./profile.css"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const Profile = () => {

    const {id} = useParams()
    const [profile,setProfile] = useState(null)
    const [videos,setVideos] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:5000/api/food-partner/${id}`,{withCredentials:true})
        .then((response)=> {
          setProfile(response.data.foodPartnerResponse);
          setVideos(response.data.foodPartnerResponse.foodItems);
        })
    
    }, [])
    
  return (
    <div className="profile-container">
      <div className="profile-header">
            <img className="profile-avatar" src="https://images.pexels.com/photos/9895332/pexels-photo-9895332.jpeg" alt="" />
            {profile?.name?.[0] || '📍'}
        <div className="profile-info">
          <div className="profile-name">{profile?.name || 'Loading...'}</div>
          <div className="profile-address">{profile?.address || 'Restaurant Address'}</div>
        </div>
      </div>
      <div className="profile-stats">
        <div className="profile-stat">
          <div className="profile-stat-label">Total Meals</div>
          <div className="profile-stat-label">22</div>
        </div>
        <div className="profile-stat">
          <div className="profile-stat-label">Customer Served</div>
          <div className="profile-stat-label">33</div>
        </div>
      </div>
      <div className="profile-videos">
        {videos.map((val, key) => (
          <div key={key} className="profile-video">
            <video src={val.video} muted></video>
          </div>
        ))}
      </div>
    </div>
  );
}; 

const demoVideos = Array(9).fill('video');

export default Profile;
// ...existing code...