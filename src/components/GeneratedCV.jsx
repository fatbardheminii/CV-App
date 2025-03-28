import React from "react";
import "../styles/GeneratedCV.css";

function GeneratedCV({ personalInfo, educationInfo, workExperience, onReset }) {
  return (
    <div className="generated-cv-container">
      <div className="cv-header">
        <h1>{personalInfo.name || "Your Name"}</h1>
        <div className="contact-info">
          <p>{personalInfo.email || "email@example.com"}</p>
          <p>{personalInfo.phone || "Phone Number"}</p>
        </div>
      </div>

      <div className="cv-section">
        <h2>Personal Information</h2>
        {personalInfo.name || personalInfo.email || personalInfo.phone ? (
          <div>
            <p>
              <strong>Name:</strong> {personalInfo.name || "Not Provided"}
            </p>
            <p>
              <strong>Email:</strong> {personalInfo.email || "Not Provided"}
            </p>
            <p>
              <strong>Phone:</strong> {personalInfo.phone || "Not Provided"}
            </p>
          </div>
        ) : (
          <p>No personal information provided</p>
        )}
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        {educationInfo.schoolName ||
        educationInfo.studyTitle ||
        educationInfo.studyDate ? (
          <div>
            <p>
              <strong>School:</strong>{" "}
              {educationInfo.schoolName || "Not Provided"}
            </p>
            <p>
              <strong>Study Title:</strong>{" "}
              {educationInfo.studyTitle || "Not Provided"}
            </p>
            <p>
              <strong>Study Date:</strong>{" "}
              {educationInfo.studyDate || "Not Provided"}
            </p>
          </div>
        ) : (
          <p>No education information provided</p>
        )}
      </div>

      <div className="cv-section">
        <h2>Work Experience</h2>
        {workExperience.companyName ||
        workExperience.positionTitle ||
        workExperience.responsibilities ? (
          <div>
            <p>
              <strong>Company:</strong>{" "}
              {workExperience.companyName || "Not Provided"}
            </p>
            <p>
              <strong>Position:</strong>{" "}
              {workExperience.positionTitle || "Not Provided"}
            </p>
            <p>
              <strong>Responsibilities:</strong>{" "}
              {workExperience.responsibilities || "Not Provided"}
            </p>
            <p>
              <strong>Work Period:</strong>{" "}
              {workExperience.workDateFrom || "Start Date"} -{" "}
              {workExperience.workDateTo || "End Date"}
            </p>
          </div>
        ) : (
          <p>No work experience provided</p>
        )}
      </div>

      <div className="cv-actions">
        <button className="reset-btn" onClick={onReset}>
          Edit CV
        </button>
        <button className="print-btn" onClick={() => window.print()}>
          Print CV
        </button>
      </div>
    </div>
  );
}

export default GeneratedCV;
