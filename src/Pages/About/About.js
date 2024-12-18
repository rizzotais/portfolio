import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="aboutcss">
      <h1>About Me</h1>
      <p>
        My name is Tais, and I am a Product UX Designer with a deep passion for
        creating user-centered designs and scalable solutions. With over five years of experience as a clinical
        psychologist in Brazil, I bring a unique perspective to understanding human behavior and needs. Over the past
        few years, I have been honing my skills in technology and design, bridging my expertise in psychology with
        innovative approaches to problem-solving. Now, I am focused on crafting intuitive digital experiences that make
        a meaningful impact.
      </p>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Junior Software Developer & UX Designer</strong> - at
          <a
            href="https://rook-tech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            Rook Tech
          </a>
          (2024 - Present)
          <p>
            Designed and developed user-centered digital solutions, integrating UX principles and software development skills to enhance user experiences.
          </p>
        </li>
        <li>
          <strong>Clinical Psychologist</strong> - Private Practice/part-time (2018 - present)
          <p>
            Provided psychological counseling and applied cognitive-behavioral therapy to clients, fostering deep understanding of human behavior and empathy.
          </p>
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>Bachelor's Psychology - FEF - 2015</li>
        <li>Graduate Certificate in Cognitive Behavioral Therapy - IPECS - 2019</li>
        <li>Coding Bootcamp - Le Wagon - 2022</li>
        <li>MBA in Data Science and Analytics - USP Esalq - 2025</li>
        <li>MBA in Software Engineering - USP Esalq - 2025</li>
        <li>Graduate Certificate UX User Experience and Human-Computer Interaction - PUC RJ - 2025</li>
        <li>Membership at Interaction Design Foundation</li>
      </ul>
      <h2>Other than Work</h2>
      <p>
        Outside of work, I am a travel enthusiast, a proud pet lover, and a coffee aficionado. I enjoy learning new languages and embracing diverse cultures, which complements my Brazilian-Italian heritage. Currently, I’m based in Brazil, where I balance my professional life with my love for exploration and continuous learning.
      </p>
      <h2>Resume</h2>
      <p>
        You can view or download my resume here:
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
          📄 Download Resume
        </a>
      </p>
    </section>
  );
};

export default About;
