import React from "react";
import "../styles/PersonalInfo.css";

function PersonalInfo({ info, setInfo, isEditing, onSubmit, onEdit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="personal-info-section">
      <h2>Personal Information</h2>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={info.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-section">
          <p>
            <strong>Name:</strong> {info.name}
          </p>
          <p>
            <strong>Email:</strong> {info.email}
          </p>
          <p>
            <strong>Phone:</strong> {info.phone}
          </p>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
