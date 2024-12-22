import React, { useState } from 'react';
import './Home.css';
import '../../App.css';

const Home = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="homeCss">
      <h1
        className={`figtree-bold ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Welcome!
      </h1>
      <p className="lora-regular">
        Hi, I'm Tais, a <span className="highlight">Product UX Designer</span>
        that loves creating intuitive and <span className="highlight">User-Centric</span> digital experiences.
      </p>
    </section>

  );
};

export default Home;
