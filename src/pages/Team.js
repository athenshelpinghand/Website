
import './styles/team.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import Alan from '../assets/headshots/Alan.JPG'
import Ashwin from '../assets/headshots/Ashwin.jpeg'
import Case from '../assets/headshots/Case.jpeg'
import Rob from '../assets/headshots/Rob.jpeg'
import Shervin from '../assets/headshots/Shervin.jpeg'
function Team() {

   
return (

<div className="">
<Header activePage = "team"/>
<p className = "pageTitle">TEAM</p>
<div className = "teamPage">
<TeamCard
name = "alan"
img = {Alan}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
/>
<TeamCard
name = "Case"
img = {Case}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
/>
<TeamCard
name = "Ashwin"
img = {Ashwin}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
/>
<TeamCard
name = "Rob"
img = {Rob}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
/>
<TeamCard
name = "Shervin"
img = {Shervin}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
/>

</div>
</div>
 
);


}
export default Team;