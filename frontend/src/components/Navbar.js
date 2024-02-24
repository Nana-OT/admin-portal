import React from 'react'
import logo from '../assets/logo.png'

export default function () {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <img src={logo} alt='church-logo' style={{width: '2.5rem'}}/>
        <h6 className='navbar-brand' style={{fontSize: '1rem'}}>Global Rescue Power Chapel</h6>
    </div>
    <div id="navbarSupportedContent">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
