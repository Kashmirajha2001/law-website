import React from 'react'
import Intro from '../Intro/Intro'
import Nav from '../Navbar/Nav'
import adminImg from '../../assets/images/adminProfile.png'
import './dashboard.css';
import Chat from '../Chat/Chat'
import {RiVerifiedBadgeFill} from 'react-icons/ri';
import { useNavigate } from "react-router-dom";

const client = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Intro/>
      <Nav/>
      <div className='dashboard-content'>
        <div className='admin-info'>
          <img src={adminImg} alt='admin.png'/>
          <div className='name-bio'>
          <h1>Adnan Sameer <span style={{color: 'blue', margin: '0.3rem'}}><RiVerifiedBadgeFill/></span></h1>
          <p>Adnan is a seasoned attorney with a passion for justice. With a J.D. from Adamas School and years of diverse legal experience, he`s your trusted advocate for all your legal needs. Whether it`s civil litigation, family matters, or corporate law, Adnan is dedicated to protecting your rights and achieving the best outcomes. Your legal journey starts here with Adnan ✏️</p>
          </div>
        </div>
        <div className='other-features'>
          <div className='card' onClick={()=>{navigate("/")}}>Archieve</div>
          <div className='card' onClick={()=>{navigate("/community")}}>Community</div>
          <div className='card'>Messages</div>
          <div className='card'>Personal Cloud Space</div>
          <div className='card'>Calender</div>
        </div>
        <p className='privacy'>Privacy + Terms of Service</p>
      </div>
      <Chat/>
    </div>
  )
}

export default client