import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavPane from "../components/NavPane";
import logo from '../assets/mainLogo.png'; 
import logoCropped from "../assets/logoCropped.png";
import './styles/home.css';

function Home() {
  const [zoomOut, setZoomOut] = useState(false);
  const [transitionDone, setTransitionDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomOut(true);
      const transitionTimer = setTimeout(() => {
        setTransitionDone(true);
        console.log("transition done" + transitionDone);
      }, 1000); // Delay for the duration of the transition
  
      return () => {
        clearTimeout(transitionTimer);
      };
    }, 1000); 
  
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    console.log('Transition Done:', transitionDone);
}, [transitionDone]);
  

  return (
    <div className={`home ${transitionDone ? 'transition-done' : ''}`}>

      <div className="leftSide">
        <img className={`logoHome ${zoomOut ? 'zoom-out' : ''}`} src={logoCropped} alt="logo" />
      </div>
      <div className = {`homePageLineBreak ${transitionDone ? 'fade-in' : ''}`}/>
      <div className="rightSide">
      <div className={`navPane1 ${transitionDone ? 'fade-in' : ''}`}>
        <NavPane className = "zStuff" />
      </div>
      </div>
    </div>
  );
}

export default Home;
