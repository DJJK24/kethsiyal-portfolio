import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in CSE",
      institution: "Angel College of Engineering and Technology",
      year: "2022 - Present",
      marks: "CGPA: 7.5 (Till 3rd Year)",
      description: "Currently pursuing my BE in Computer Science, focusing on web development, AI, and software engineering.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Jaivabai Girls Higher Secondary School",
      year: "2020 - 2022",
      marks: "Percentage: 72%",
      description: "Completed my 12th grade with a strong foundation in mathematics and computer science.",
    },
    {
      degree: "Secondary School Education",
      institution: "Kongu Vellalar Matric Higher Secondary School",
      year: "2018 - 2020",
      marks: "Percentage: 67%",
      description: "Achieved a strong academic record, developing my passion for technology and coding.",
      },
  ];

  return (
    <div className="education-container">
      <h1 className="title">Education</h1>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h2>{edu.degree}</h2>
            <h3>{edu.institution}</h3>
            <p>{edu.year}</p>
            <p className="marks">{edu.marks}</p> {/* Added marks */}
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
