import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Singers() {
  const [singers, setSingers] = useState([]);
  useEffect(() => {
    async function fetchSingers() {
      try {
        const response = await axios.get('http://localhost:8081/singers');
        setSingers(response.data);
      } catch (error) {
        console.error('Error fetching singers:', error);
      }
    }

    fetchSingers();
  }, []);


  return (
    <div>
       <div className='container-fluid'>
       <div className="table-responsive" style={{ position: 'absolute', width: '70vw', margin: '0 auto', top: 110, left: 340 }}>
      <table className="table table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {singers.map(singer =>(
              <tr key={singer.id}>
                <td>{singer.id}</td>
                <td>{singer.name}</td>
                <td>{singer.phone}</td>
                <td>{singer.address}</td>
                <td>{singer.gender}</td>
                <td>{singer.role}</td>
                <td>
                <button type="button" class="btn btn-success">Update</button>
                <button type="button" class="btn btn-danger m-2">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
 )
}
