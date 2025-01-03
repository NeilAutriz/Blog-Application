// Importing styles and necessary components
import "../styles/About.css";
import React from "react";
import TeamCard from "../components/Teamcard";
import MissionVision from "../components/MissionVision.jsx";
import meImage from "../assets/images/me.jpg"; // Import the image
import avatar1 from "../assets/images/avatar1.jpg"
import avatar2 from "../assets/images/avatar2.jpg"

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
                <p className="about-intro">
                    Welcome to our creative space! We believe in innovation, collaboration, and excellence.
                </p>
            </header>
            
            <section className="about-section mission-vision">
                <MissionVision />
            </section>

            <section className="about-section team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <TeamCard name="Mark Neil Autriz" role="Software Engineer" image={avatar2} />
                    <TeamCard name="Jane Doe" role="UI/UX Designer" image= {meImage} />
                    <TeamCard name="John Smith" role="Project Manager" image={avatar1} />
                </div>
            </section>

            <section className="about-section achievements">
                <h2>Our Achievements</h2>
                <ul className="achievements-list">
                    <li>100+ Projects Completed</li>
                    <li>Awarded Best Software Team in 2023</li>
                    <li>Trusted by 50+ Clients Worldwide</li>
                </ul>
            </section>

            <footer className="about-footer">
                <p>Thank you for visiting us. We look forward to collaborating with you!</p>
            </footer>
        </div>
    );
};

export default About;
