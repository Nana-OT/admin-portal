import React from 'react';
import Logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className='d-flex flex-row container-fluid'>
            <div className='container-fluid'>
                <a class="navbar-brand" href="#Navbar">
            <img src={Logo} alt="Logo" width="33" height="30" class="d-inline-block align-text-top"/>
            <span className='text-primary-emphasis fs-6'>Global Rescue Power Chapel</span>
            </a>
            </div>
            <div className='container-fluid'>
            <form class="d-flex" role="search" style={{marginLeft: '16rem'}}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            </div>
        </nav>
    </div>
  )
}
