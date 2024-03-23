import React from 'react'
import Logo from '../assets/logo.png'
import dash from '../assets/dashboard.png'
import members from '../assets/group.png'
import mic from '../assets/microphone.png'
import '../App.css';

export default function SidePanel() {
  return (
    <div className="bg-black" style={{ width: '250px', height: '100vh', paddingTop: '20px', textAlign: 'center', zIndex: -1 }}>
      <div>
      <img src={Logo} style={{width: '35px'}}/>
      <h6 className='text-white'>Global Rescue Power Chapel, Accra</h6>
      </div>
      
      <ul className='fs-6' style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'center', marginTop: '60px' }}>
       <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} className='side-link'>
        <img src={dash} style={{width: '25px', height: '25px', marginRight: '10px'}}/>
        <li>
            <a href="#" className='side-options'>Dashboard</a>
        </li>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} className='side-link'>
        <img src={members} style={{width: '25px', height: '25px', marginRight: '15px'}}/>
        <li>
          <a href="#" className='side-options'>Members</a>
        </li>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} className='side-link'>
        <img src={mic} style={{width: '30px', height: '30px', marginRight: '15px'}}/>
        <li>
          <a href="#" className='side-options'>Singers</a>
        </li>
        </div>
      </ul>
      <button type="button" class="btn btn-primary" style={{position:'absolute' ,bottom: '2px', left: '9%', transform: 'translateX(-50%)'}}>Logout</button>
    </div>
  )
}
