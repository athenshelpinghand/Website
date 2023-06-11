
import './styles/about.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import { useEffect } from 'react';
import aboutImage from '../assets/about/AboutImage.jpeg';

function About() {

    
    const [typedText, setTypedText] = useState("ABOUT");

    useEffect(() => {
        // const text = "ABOUT";
        // let index = 0;
    
        // const typeText = setInterval(() => {
        //     if (index < text.length) {
        //         setTypedText(typedText => typedText + text[index]);
        //         index++;
        //     } else {
        //         clearInterval(typeText);
        //     }
        // }, 200);
    
        // return () => {
        //     clearInterval(typeText);
        // };
    }, []);
    
return (

<div className="">
  <Header activePage="about" />
  <p className="pageTitle">ABOUT</p>
  <div className="aboutContent">
    <div className="contentContainer">
      <img className="aboutImage" src={aboutImage} alt="service image" />
      <div className="textOverlay">
        <p className="textImage">
          Athens Helping Hand is dedicated to making a positive impact on the vibrant community of Athens. Founded with the vision of connecting students with meaningful volunteer opportunities, we strive to be the bridge that brings together the aspirations of students and the pressing needs of our city.
        </p>
      </div>

      <div className = "mission">
        <h2>Our Mission</h2>
        <p className = "missionText">Our mission is simple yet powerful: to lend a helping hand to those in need while fostering community engagement for UGA students. By working hand in hand with local organizations, institutions, and individuals facing social barriers, we create opportunities for our students to learn firsthand about complexities of our community and what needs to be done to help. Together, we can create a stronger, healthier, and more equitable Athens, one hand at a time.</p>
      </div>
    </div>
  </div>
</div>
);


}
export default About;