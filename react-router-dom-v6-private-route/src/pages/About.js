import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const handleLogut = () => {
    localStorage.setItem("isLogin", false);
  };
  return (
    <div>
      If you are seeing this, you are authentificated
      <button onClick={handleLogut}>Logout</button>
    </div>
  );
};

export default About;
