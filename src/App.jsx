import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import GeneratedCV from "./components/GeneratedCV.jsx";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  const [workExperience, setWorkExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    workDateFrom: "",
    workDateTo: "",
  });

  const [isEditing, setIsEditing] = useState({
    personal: true,
    education: true,
    work: true,
  });

  const [generatedCV, setGeneratedCV] = useState(false);

  const handleSubmit = (section) => {
    setIsEditing((prev) => ({
      ...prev,
      [section]: false,
    }));
  };

  const handleEdit = (section) => {
    setIsEditing((prev) => ({
      ...prev,
      [section]: true,
    }));
  };

  const handleGenerateCV = () => {
    setGeneratedCV(true);
  };

  const handleResetCV = () => {
    setGeneratedCV(false);
  };

  return (
    <div className="App">
      <h1>CV Generator</h1>

      {!generatedCV ? (
        <div className="forms-container">
          <PersonalInfo
            info={personalInfo}
            setInfo={setPersonalInfo}
            isEditing={isEditing.personal}
            onSubmit={() => handleSubmit("personal")}
            onEdit={() => handleEdit("personal")}
          />
          <EducationInfo
            info={educationInfo}
            setInfo={setEducationInfo}
            isEditing={isEditing.education}
            onSubmit={() => handleSubmit("education")}
            onEdit={() => handleEdit("education")}
          />
          <WorkExperience
            info={workExperience}
            setInfo={setWorkExperience}
            isEditing={isEditing.work}
            onSubmit={() => handleSubmit("work")}
            onEdit={() => handleEdit("work")}
          />

          <div className="generate-cv-section">
            <button
              className="generate-cv-btn"
              onClick={handleGenerateCV}
              disabled={
                isEditing.personal || isEditing.education || isEditing.work
              }
            >
              Generate CV
            </button>
          </div>
        </div>
      ) : (
        <GeneratedCV
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          workExperience={workExperience}
          onReset={handleResetCV}
        />
      )}
    </div>
  );
}

export default App;
