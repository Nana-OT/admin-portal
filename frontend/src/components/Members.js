import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Members() {
  
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await axios.get('http://localhost:8081/members');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    }

    fetchMembers();
  }, []);
  return (
    <div>
       <div className='container-fluid'>
       <div className="table-responsive" style={{ position: 'absolute', width: '70vw', margin: '0 auto', top: 110, left: 330 }}>
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
            {members.map(member =>(
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
                <td>{member.gender}</td>
                <td>{member.role}</td>
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
