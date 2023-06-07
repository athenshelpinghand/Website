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
      <div className='lineCards'/>
        <div className="teamCardDetails">
        <div className="">
            <p className="">{props.role}</p>
          </div>
          <div className="">
            <p className="teamCardDetailLabel">Class of {props.class}</p>
          </div>
          <div className="teamCardDtail">
            <p className="teamCardDetailLabel">Major</p>
            <p className="">{props.major}</p>
          </div>
          <div className="">
            <p className="teamCardDetailLabel">Email</p>
            <p className="">{props.email}</p>
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
