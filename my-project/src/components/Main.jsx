import React, { useEffect, useState } from "react";


const Main = () => {
  const [text, setText] = useState(""); // For the current text being typed
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Tracks the current text in the list
  const [charIndex, setCharIndex] = useState(0); // Tracks the character being typed
  const textList = ["<Leptop_tz/>","<Preetabh Awasthi/>", "<Web-Developer/>", "<Python Developer/>"]; // Text list to animate

  useEffect(() => {
    // Typing effect
    const typingInterval = setInterval(() => {
      if (charIndex < textList[currentTextIndex].length) {
        setText((prev) => prev + textList[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // After typing is complete, wait and move to the next text
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setText(""); // Clear text before typing the next one
          setCurrentTextIndex((prevIndex) =>
            prevIndex === textList.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000); // Pause for 2 seconds before clearing and typing the next text
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [charIndex, currentTextIndex]); 

  return (
    <div>
      
      <div className="container">
        <div className="black"></div>
        <div className="welcome">Welcome!</div>
        <div className="works">
          I am &nbsp;
          <span className="animated-text">{text}</span>
        </div>
        <div className="circle-image">
       
        </div>
        <div className="buttons">
          <div className="btn-1">
            <button>
              <a href="#hire-me">Hire me</a>
            </button>
          </div>
          <div className="btn-2">
            <button>
              <a href="#view-works">View Works</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
