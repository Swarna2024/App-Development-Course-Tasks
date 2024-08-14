// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar'; // Import Navbar component
// import './ListOfReq.css'; // Ensure you have appropriate styles for the theme

// function ScheduleTable() {
//     const [requests, setRequests] = useState([]);
//     const token = localStorage.getItem('token'); // Retrieve the token from local storage
  
//     // Fetch requests from the backend
//     useEffect(() => {
//       fetch('/auth/admin/getrequest', {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Add the Bearer token to the headers
//         }
//       })
//         .then(response => response.json())
//         .then(data => setRequests(data))
//         .catch(error => console.error('Error fetching data:', error));
//     }, [token]);
  
//     // Function to handle status change
//     const handleStatusChange = (shiftId, newStatus) => {
//       fetch(`/auth/admin/updaterequest/${shiftId}/status`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`, // Add the Bearer token to the headers
//         },
//         body: JSON.stringify({ status: newStatus }),
//       })
//         .then(response => response.json())
//         .then(updatedRequest => {
//           // Update the state with the new status
//           setRequests(prevRequests =>
//             prevRequests.map(request =>
//               request.shiftId === shiftId ? { ...request, status: newStatus } : request
//             )
//           );
//         })
//         .catch(error => console.error('Error updating status:', error));
//     };
  
//     return (
//       <div>
//         <Navbar /> {/* Add Navbar at the top */}
//         <div className="schedule-container">
//           <h2 className="schedule-title">View Schedule</h2>
//           <div className="schedule-notifications">
//             {requests.map((request) => (
//               <div key={request.shiftId} className="schedule-notification">
//                 <div className="schedule-info">
//                   <span className="schedule-staff-id">Staff ID: {request.staffId}</span>
//                   <span className="schedule-shift-id">Shift ID: {request.shiftId}</span>
//                   <span className="schedule-date">Date: {request.date}</span>
//                 </div>
//                 <div className="schedule-actions">
//                   <button
//                     className={`schedule-btn accept ${request.status === 'Accept' ? 'active' : ''}`}
//                     onClick={() => handleStatusChange(request.shiftId, 'Accept')}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     className={`schedule-btn reject ${request.status === 'Reject' ? 'active' : ''}`}
//                     onClick={() => handleStatusChange(request.shiftId, 'Reject')}
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default ScheduleTable;

// import React, { useState } from 'react';
// import Navbar from './Navbar'; // Import Navbar component
// import './ListOfReq.css'; // Ensure you have appropriate styles for the theme

// function ScheduleTable() {
//   // Example state to manage the selected status for each row
//   const [status, setStatus] = useState({
//     '001': 'Pending', // Example default status for row 1
//     '002': 'Pending', // Example default status for row 2
//   });

//   // Function to handle dropdown change
//   const handleStatusChange = (shiftId, newStatus) => {
//     setStatus(prevStatus => ({
//       ...prevStatus,
//       [shiftId]: newStatus
//     }));
//   };

//   return (
//     <div>
//       <Navbar /> {/* Add Navbar at the top */}
//       <div className="schedule-container">
//         <h2 className="schedule-title">View Schedule</h2>
//         <div className="schedule-notifications">
//           <div className="schedule-notification">
//             <div className="schedule-info">
//               <span className="schedule-staff-id">Staff ID: 123</span>
//               <span className="schedule-shift-id">Shift ID: 456</span>
//               <span className="schedule-date">Date: 2024-08-12</span>
//             </div>
//             <div className="schedule-actions">
//               <button 
//                 className={`schedule-btn accept ${status['001'] === 'Accept' ? 'active' : ''}`} 
//                 onClick={() => handleStatusChange('001', 'Accept')}
//               >
//                 Accept
//               </button>
//               <button 
//                 className={`schedule-btn reject ${status['001'] === 'Reject' ? 'active' : ''}`} 
//                 onClick={() => handleStatusChange('001', 'Reject')}
//               >
//                 Reject
//               </button>
//             </div>
//           </div>

//           <div className="schedule-notification">
//             <div className="schedule-info">
//               <span className="schedule-staff-id">Staff ID: 124</span>
//               <span className="schedule-shift-id">Shift ID: 457</span>
//               <span className="schedule-date">Date: 2024-08-13</span>
//             </div>
//             <div className="schedule-actions">
//               <button 
//                 className={`schedule-btn accept ${status['002'] === 'Accept' ? 'active' : ''}`} 
//                 onClick={() => handleStatusChange('002', 'Accept')}
//               >
//                 Accept
//               </button>
//               <button 
//                 className={`schedule-btn reject ${status['002'] === 'Reject' ? 'active' : ''}`} 
//                 onClick={() => handleStatusChange('002', 'Reject')}
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScheduleTable;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import Navbar component
import './ListOfReq.css'; // Ensure you have appropriate styles for the theme
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode

function ListOfReq() {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        if (!token) {
          throw new Error('No token found in local storage');
        }

        const decodedToken = jwtDecode(token);
        const role = decodedToken.role;
        const apiEndpoint = role === 'ROLE_ADMIN' 
          ? 'http://localhost:8080/auth/admin/getrequest' 
          : `http://localhost:8080/auth/staff/viewrequest/${decodedToken.sub}`;

        const response = await axios.get(apiEndpoint, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setRequests(response.data);
      } catch (error) {
        setError(error.message || 'Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchRequests();
  }, [token]);

  // Function to handle status change
  const handleStatusChange = async (shiftId, newStatus) => {
    try {
      if (!token) {
        throw new Error('No token found in local storage');
      }

      await axios.patch(`http://localhost:8080/auth/admin/updaterequest/${shiftId}/status`, 
        { status: newStatus },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      );

      // Update the state with the new status
      setRequests(prevRequests =>
        prevRequests.map(request =>
          request.shiftId === shiftId ? { ...request, status: newStatus } : request
        )
      );
    } catch (error) {
      setError(error.message || 'Error updating status');
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar at the top */}
      <div className="schedule-container">
        <h2 className="schedule-title">View Schedule</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="schedule-notifications">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.shiftId} className="schedule-notification-2">
                <div className="schedule-info">
                  <span className="schedule-staff-id">Staff ID: {request.staffId}</span>
                  <span className="schedule-shift-id">Shift ID: {request.shiftId}</span>
                  <span className="schedule-date">Date: {request.date}</span>
                </div>
                <div className="schedule-actions">
                  <button
                    className={`schedule-btn accept ${request.status === 'Accept' ? 'active' : ''}`}
                    onClick={() => handleStatusChange(request.shiftId, 'Accept')}
                  >
                    Accept
                  </button>
                  <button
                    className={`schedule-btn reject ${request.status === 'Reject' ? 'active' : ''}`}
                    onClick={() => handleStatusChange(request.shiftId, 'Reject')}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No requests available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListOfReq;
