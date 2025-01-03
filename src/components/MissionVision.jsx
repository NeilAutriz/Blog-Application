// MissionVision.js
import React from "react";
import "../styles/MissionVision.css"; // Import specific styles for MissionVision component

const MissionVision = () => {
    return (
        <div className="mission-vision-container">
            <div className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    To inspire and empower individuals through innovative technology
                    solutions that make a meaningful impact.
                </p>
            </div>

            <div className="vision-section">
                <h2>Our Vision</h2>
                <p>
                    To be a leading force in the tech industry, recognized for
                    innovation, creativity, and dedication to excellence.
                </p>
            </div>
        </div>
    );
};

export default MissionVision;
