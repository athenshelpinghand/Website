import './styles/components.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import logoCropped from '../assets/logoCropped.png';
import logoNoWords from '../assets/logoNoWords.png';

function Header(props) {

   
return (

<div className="header">

<div>
<div className = "navItemHeader"><Link to = '/about' className = {props.activePage === 'about' ? "linkActive" : "linkHeader"}>About</Link></div>
<div className = "navItemHeader"><Link to = '/team' className = {props.activePage === 'team' ? "linkActive" : "linkHeader"}>Team</Link></div>
<div className = "navItemHeader"><Link to = '/get-involved' className = {props.activePage === 'involved' ? "linkActive" : "linkHeader"}>Get Involved</Link></div>
</div>
<div className = "HeaderLineBreak"/>
<img className="headerLogo" src={logoNoWords} alt="logo" />

</div>
 
);


}
export default Header;