
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
name = "Shervin Eskandari"
img = {Shervin}
role="President"
class="2023"
major="Biology"
email="Shervin.Eskandari@uga.edu"
quote="Develop a passion for learning. If you do, you will never cease to grow."
credit = "Anthony J. D'Angelo"
/>
<TeamCard
name = "Alan Wu"
img = {Alan}
role="Vice President"
class="2023"
major="Biology"
email="Alan.Wu@uga.edu"
quote="If you want to lift yourself up, lift up someone else."
credit = "Booker T. Washington"
/>
<TeamCard
name = "Robel Yohannes"
img = {Rob}
role="Event Coordinator"
class="2023"
major="Biology"
email="Robel.Yohannes@uga.edu"
quote="Education is the most powerful weapon which you can use to change the world"
credit = "Nelson Mandela"
/>

<TeamCard
name = "Case Condon"
img = {Case}
role="Treasurer"
class="2023"
major="Management Information Systems"
email="Case.condon@uga.edu"
quote="When we choose to trust the journey and embrace love and joy, we are free to fly."
credit = "Anniken R. Day"
/>
<TeamCard
name = "Ashwin Gidwani"
img = {Ashwin}
role="Secretary"
class="2023"
major="Management Information Systems"
email="Ashwin.gidwani@uga.edu"
quote="Believe in your infinite potential. Your only limitations are those you set upon yourself."
credit = "Roy T. Bennett"
/>


</div>
</div>
 
);


}
export default Team;