import React from 'react'
import Logo from '../assets/logo.png'
import dash from '../assets/dashboard.png'
import members from '../assets/group.png'
import mic from '../assets/microphone.png'
import '../App.css';
import Navbar from './Navbar'
import { useState, useCallback, } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SidePanel() {
    const [activity, setActivity] = useState('No Activity');

    const navigate = useNavigate();

    const handleSidebarClick = useCallback((option) => {
    setActivity(option);
    if (option === 'Dashboard') {
      navigate('/home/dashboard');
    }
    else if (option === 'Members'){
      navigate('/home/members')
    }
    else{
      navigate('/home/singers')
    }

    },[setActivity]);

  return (
    <div>
    <div className="bg-black" style={{ width: '250px', height: '100vh', paddingTop: '20px', textAlign: 'center', zIndex: -1 }}>
      <div>
      <img src={Logo} style={{width: '35px'}} alt='logo'/>
      <h6 className='text-white'>Global Rescue Power Chapel, Accra</h6>
      </div>
      
      <ul className='fs-6' style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'center', marginTop: '60px' }}>
       <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} className='side-link'>
        <img src={dash} style={{width: '25px', height: '25px', marginRight: '10px'}} alt='dashboard'/>
        <li onClick={() => handleSidebarClick('Dashboard')}>
            <a href="#" className='side-options'>Dashboard</a>
        </li>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} className='side-link'>
        <img src={members} style={{width: '25px', height: '25px', marginRight: '15px'}} alt='members'/>
        <li onClick={() => handleSidebarClick('Members')}>
          <a href="#" className='side-options'>Members</a>
        </li>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} className='side-link'>
        <img src={mic} style={{width: '30px', height: '30px', marginRight: '15px'}} alt='singers'/>
        <li onClick={() => handleSidebarClick('Singers')}>
          <a href="#" className='side-options'>Singers</a>
        </li>
        </div>
      </ul>
      <button type="button" class="btn btn-outline-primary text-white" style={{position:'absolute' ,bottom: 10, left: '9%', transform: 'translateX(-50%)'}}>Logout</button>
    </div>
    <div style={{position: 'absolute', top: 30, right: 60, width: '70%'}}>
        <Navbar activity={activity}/>
    </div>
    </div>
  )
}