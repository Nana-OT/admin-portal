import React from 'react';
import '../App.css';

export default function Navbar({activity}) {
  return (
    <div className='nav'>
    <div>
      <h5>{activity}</h5>
    </div>
    <div>
      <form class="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
      </div>
      <div>
      <button type="button" className="btn btn-primary">Add +</button>
      </div>
    </div>
  )
}
