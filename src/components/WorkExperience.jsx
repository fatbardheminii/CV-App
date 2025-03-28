import React from "react";
import "../styles/WorkExperience.css";

function WorkExperience({ info, setInfo, isEditing, onSubmit, onEdit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="work-experience-section">
      <h2>Work Experience</h2>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={info.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Position Title:</label>
            <input
              type="text"
              name="positionTitle"
              value={info.positionTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Main Responsibilities:</label>
            <textarea
              name="responsibilities"
              value={info.responsibilities}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>
          <div>
            <label>Work Date From:</label>
            <input
              type="text"
              name="workDateFrom"
              value={info.workDateFrom}
              onChange={handleChange}
              required
              placeholder="e.g. Jun 2020"
            />
          </div>
          <div>
            <label>Work Date To:</label>
            <input
              type="text"
              name="workDateTo"
              value={info.workDateTo}
              onChange={handleChange}
              required
              placeholder="e.g. Present"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-section">
          <p>
            <strong>Company:</strong> {info.companyName}
          </p>
          <p>
            <strong>Position:</strong> {info.positionTitle}
          </p>
          <p>
            <strong>Responsibilities:</strong> {info.responsibilities}
          </p>
          <p>
            <strong>Work Period:</strong> {info.workDateFrom} -{" "}
            {info.workDateTo}
          </p>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default WorkExperience;
