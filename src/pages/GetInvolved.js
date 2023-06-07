
import './styles/getInvolved.css';
import './styles/about.css';
import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
//athenshelpinghand@gmail.com
const FORM_ENDPOINT = "https://public.herotofu.com/v1/535ed3a0-04d6-11ee-8025-97a9fb2f29da"; // TODO - fill on the later step



function GetInvolved() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    if (submitted) {
        return (
            <>
            <Header activePage = "involved"/>
                <div class="end">
                    <h2>Thank you!</h2>
                    <div>We'll be in touch soon.</div>
                </div>
            </>
        );
    }
   
return (

<div className="">
<Header activePage = "involved"/>
<p className = "pageTitle">GET INVOLVED</p>

<div className = "getInvolvedContent">
<form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div class = "formBack">
                <div className = "nameForm">
                    <label>Name:</label>
                    <input type="text" placeholder="Your name" class = "textBox" name="name" required />
                </div>
                <div className='emailForm'>
                <label>Email:</label>
                    <input type="email" placeholder="Email"  class = "textBox" name="email" required />
                </div>
                <div className='messageForm'>
                <label>Message:</label>
                    <textarea placeholder="Your message"  class = "textArea" name="message" required />
                </div>
                <div>
                    <button type="submit" class = "message"> SEND MESSAGE </button>
                </div>
            </div>
        </form>
        </div>

</div>
 
);


}
export default GetInvolved;

