import './styles/components.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';


function TeamCard(props) {

   
return (

<div className="teamCard">
<div>{props.name}</div>
<img className = "teamHeadshotImage" src = {props.img} alt="photo"/>
<div>{props.role}</div>
<div>{props.class}</div>
<div>{props.major}</div>
{props.email}


</div>
 
);


}
export default TeamCard;