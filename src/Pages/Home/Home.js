import React, { useState } from 'react';
import './Home.css';
import '../../App.css';

const Home = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="homeCss">
      <h1
        className={`pt-sans-bold ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Welcome!
      </h1>
      <p className="pt-sans-regular">
        Hi, I'm Tais, a passionate <span className="highlight">Product UX Designer</span>
        that loves creating intuitive and <span className="highlight">user-centric</span> digital experiences.
      </p>
    </section>

  );
};

export default Home;
