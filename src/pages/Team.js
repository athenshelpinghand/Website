
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
quote="If you want to lift yourself up, lift up someone else."
credit = "Booker T. Washington"
/>
<TeamCard
name = "Case"
img = {Case}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
quote="When we choose to trust the journey and embrace love and joy, we are free to fly"
credit = "Anniken R. Day"
/>
<TeamCard
name = "Ashwin"
img = {Ashwin}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
quote="Believe in your infinite potential. Your only limitations are those you set upon yourself."
credit = "Roy T. Bennett"
/>
<TeamCard
name = "Rob"
img = {Rob}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
quote="Education is the most powerful weapon which you can use to change the world"
credit = "Nelson Mandela"
/>
<TeamCard
name = "Shervin"
img = {Shervin}
role="coordinator"
class="2023"
major="Biology"
email="email@email"
quote="Develop a passion for learning. If you do, you will never cease to grow."
credit = "Anthony J. D'Angelo"
/>

</div>
</div>
 
);


}
export default Team;