
import './styles/about.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import { useEffect } from 'react';


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
<Header activePage = "about"/>
<p className = "pageTitle">{typedText}</p>

</div>
 
);


}
export default About;