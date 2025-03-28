import React from "react";
import "../styles/EducationInfo.css";

function EducationInfo({ info, setInfo, isEditing, onSubmit, onEdit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="education-info-section">
      <h2>Education</h2>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div>
            <label>School Name:</label>
            <input
              type="text"
              name="schoolName"
              value={info.schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Title of Study:</label>
            <input
              type="text"
              name="studyTitle"
              value={info.studyTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date of Study:</label>
            <input
              type="text"
              name="studyDate"
              value={info.studyDate}
              onChange={handleChange}
              required
              placeholder="e.g. Sep 2018 - May 2022"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-section">
          <p>
            <strong>School:</strong> {info.schoolName}
          </p>
          <p>
            <strong>Study Title:</strong> {info.studyTitle}
          </p>
          <p>
            <strong>Study Date:</strong> {info.studyDate}
          </p>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationInfo;
