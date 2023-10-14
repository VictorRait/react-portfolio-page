import { useEffect } from "react";
import { useState } from "react";
import "./IconAnimation.css";

function IconAnimation({ path, altName }) {
  const [isAnimating, setIsAnimating] = useState(false);

  function fadeIn() {
    setIsAnimating(true);
    // Simulate the animation duration (2 seconds)
    setTimeout(() => {
      setIsAnimating(false);
    }, 3900);
  }
  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <img
      className={`headerIcon ${
        isAnimating ? "animate-fade-inY" : "hover-transform"
      }`}
      src={path}
      alt={altName}
    />
  );
}

export default IconAnimation;
