import React from 'react';
import '../App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, ArcElement, BarElement } from 'chart.js';
import { registerables } from 'chart.js'; // Import all available Chart.js components
import { Bar, Pie } from 'react-chartjs-2';

Chart.register(...registerables); // Register all components

export default function Dashboard() {
  const [genderData, setGenderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8081/members');
        setGenderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Process data to calculate male-to-female ratio
  const calculateRatio = () => {
    // Count males and females
    let maleCount = 0;
    let femaleCount = 0;
    genderData.forEach(member => {
      if (member.gender === 'Male') {
        maleCount++;
      } else if (member.gender === 'Female') {
        femaleCount++;
      }
    });

     // Calculate ratio
     const total = maleCount + femaleCount;
     const maleRatio = (maleCount / total) * 100;
     const femaleRatio = (femaleCount / total) * 100;
 
     return { maleRatio, femaleRatio };
   };
 
   const { maleRatio, femaleRatio } = calculateRatio();
 
   // Chart data
   const barChartData = {
     labels: ['Male', 'Female'],
     datasets: [
       {
         label: 'Gender Ratio',
         backgroundColor: ['#3e95cd', '#8e5ea2'],
         data: [maleRatio, femaleRatio]
       }
     ]
   };
 
   const pieChartData = {
     labels: ['Male', 'Female'],
     datasets: [
       {
         backgroundColor: ['#3e95cd', '#8e5ea2'],
         data: [maleRatio, femaleRatio]
       }
     ]
   };

   const barOptions = {
    scales: {
      x: {
        type: 'category', // Specify category scale for the x-axis
      },
      y: {
        type: 'linear',
      },
    },
  };

  const pieOptions = {
    elements: {
      arc: {
        backgroundColor: 'transparent', // Ensure pie slices are visible
      },
    },
  };

  return (
     <div className="container" style={{position: 'absolute', width: '70vw', height: '50vh', left: 340, top: 110}}>
      <h2 className="my-4">Gender Ratio</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Chart 1</h3>
              <Bar data={barChartData} options={barOptions} id={"bar-chart"}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Chart 2</h3>
              <Pie data={pieChartData} options={pieOptions} id={"pie-chart"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
