import './styles/components.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';


function NavPane() {

   
return (

<div className="navPane">
<div className = "navItemPane"><Link to = '/about' className = "linkNavPane">About</Link></div>
<div className = "navItemPane"><Link to = '/team' className = "linkNavPane">Team</Link></div>
<div className = "navItemPane"><Link to = '/get-involved' className = "linkNavPane">Get Involved</Link></div>


</div>
 
);


}
export default NavPane;