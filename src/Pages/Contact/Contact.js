import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contactCss">
      <h1>Contact Me</h1>
      <p>
        I’d love to connect! You can reach me via email or check out my LinkedIn profile for more about my work and professional journey.
      </p>
      <ul>
        <li>
          <a href="mailto:myemail@example.com" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="email">📧</span> rizzotais@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tais-rizzo/" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="briefcase">💼</span> LinkedIn Profile
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
