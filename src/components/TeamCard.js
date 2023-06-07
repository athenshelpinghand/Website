import './styles/components.css';
import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import {ImQuotesLeft} from 'react-icons/im';
import {ImQuotesRight} from 'react-icons/im';

const TeamCard = (props) => {
  return (
    <div className="teamCard">
      <div className="teamCardImageContainer">
        <img className="teamCardImage" src={props.img} alt="photo" />
      </div>
      <div className="teamCardName">{props.name}</div>
 
        <div className="teamCardDetails">
          <div className="teamCardDetail">
            <span className="teamCardDetailLabel">Class:</span> {props.class}
          </div>
          <div className="teamCardDetail">
            <span className="teamCardDetailLabel">Major:</span> {props.major}
          </div>
          <div className="teamCardDetail">
            <span className="teamCardDetailLabel">Email:</span> {props.email}
          </div>
        </div>
        <div className="teamCardQuoteContainer">
          <ImQuotesLeft className='leftQuote' />
          <div className="teamCardQuote">{props.quote}</div>
          <ImQuotesRight className='rightQuote' />
          <div className='credit'>- {props.credit}</div>
        </div>
    
    </div>
  );
}

export default TeamCard;
