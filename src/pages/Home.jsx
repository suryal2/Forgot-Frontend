import React, { useEffect, useState } from 'react';
import { Container,Button } from "react-bootstrap";
import "../styles/Home.css";
import axios from "axios";
import API_URL from "../../config/global";
import { useNavigate } from 'react-router-dom';

 

 



const Home = ( {userNotes,res,setRes}) => {
 
const navigate = useNavigate();

    
    useEffect(() => {
        const user =  userNotes;  
        if (user) {
            getData(user.token);
        }
    }, []);
    
    
const getData = async (token)=>{
try{
    const config = {
        headers:{
            Authorization:token
        },
    }

    const response = await axios.get(`${API_URL}/home`,config);
    console.log(response);
    if(response.data === "Invalid Token"){
        alert("login again")
    }else if(response.data === "server Busy"){
        alert("unuthorised access")
    }
     else if (response?.status){
        setRes(response.data)
    }

} catch(e){
    console.log(e);
}
};


  return (
    <div className="home">
    <div className="belowheader">
        <div className="know"> 
            <h2>inversting in Knowledge and<span>Your Future</span></h2>
            <p>learn with us anytime and anywhere, let's hone your skills and be profession, with certifed mentors and competitive prices</p>
        </div>
        <div >
            <img className="base64" src=" data:image/jpeg;base64,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"></img>
        </div>
    </div>
    <div className="aggre">
    <div id="aggre">
        <h3>Google</h3>
        <h3>Udemy</h3>
        <h3>moodle</h3>
        <h3>Chamilo</h3>
        <h3>slack</h3>
    </div>
    </div>
    
    <div className = "accregrater">
    <h4 >
         Why Choose Us
    </h4>
    <p>Learn with us and enjoy the various advantages </p>
    </div>
    <div className="cards">
        <div className="card">
        <i className="fa fa-clock-o fa-3x" aria-hidden="true"></i>
        <h4>Flexible Timer</h4>
        <p>Now learning is not fixated on tone, learning can be</p>
        </div>

        <div className="card">
        <i class="fa fa-plus-square fa-3x" aria-hidden="true"></i>
        <h4>Certified</h4>
        <p>When you complete the class, you will get a certificate that</p>
        </div>
        <div className="card">
        <i class="fa fa-check fa-3x" aria-hidden="true"></i>
        <h4>Certified</h4>
        <p>Now learning is not fixated on tone, learning can be</p>
        </div>

    </div>

    <div id="cardImg">
    <div className=" imageine"> 
            <h2> Learn Anytime Anywhere</h2>
            <p> Learning is now very easy, there is no reason for you to be lazy, let's start learning and improve your skile because life is not as beautiful as you imageine  This can help teachers to identify students who may be struggling and provide them with the extra help they need to succeed</p>
    </div>
   
  <img className="usatoday" src="https://www.usatoday.com/gcdn/presto/2021/07/12/USAT/5d9140a5-cec4-4d4e-bac2-67048dda2333-BTS_TECH_AI_IN_THE_CLASSROOM_1.jpg?crop=2879,1620,x0,y36&width=1600&height=800&format=pjpg&auto=webp" alt="hh" />
    
   
    </div>
    <div id="lastbase">
    FlipLean is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language
    </div>

      
    </div>
 
  )
}

export default Home 