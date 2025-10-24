import React, { useState } from 'react';
import './create-food.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const CreateFoodItem = ({ onSubmit }) => {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file); // store actual File
      setVideoPreview(URL.createObjectURL(file)); // only for preview
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ name, description, video: videoFile });

    const formData = new FormData;
    formData.append('name', name);
    formData.append('description', description);
    formData.append('video', videoFile)

    const response = await axios.post("http://localhost:5000/api/food", formData, {
      withCredentials: true
    })

    console.log(response.data);
    navigate("/")
  };

  return (
    <div className="create-food-page">
      <form className="create-food-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add a new food video</h2>

        <label className="field">
          <span className="label">Video</span>
          <input
            type="file"
            accept="video/*"
            className="input-file"
            onChange={handleVideoChange}
          />
        </label>

        {videoFile && (
          <div className="video-preview">
            <video src={videoFile} controls />
          </div>
        )}

        <label className="field">
          <span className="label">Name</span>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="input-text"
            placeholder="Food name"
          />
        </label>

        <label className="field">
          <span className="label">Description</span>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="input-textarea"
            placeholder="Write a short description (max 200 chars)"
            maxLength={200}
          />
        </label>

        <button type="submit" className="submit-btn">Create Food</button>
      </form>
    </div>
  );
};

export default CreateFoodItem;
