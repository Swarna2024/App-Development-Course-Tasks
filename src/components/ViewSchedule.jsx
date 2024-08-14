

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
// import './ViewSchedule.css';
// import Navbar from './Navbar';
// import { getUserIdByEmail } from './getUserIdByEmail'; // Assuming getUserIdByEmail is correctly imported

// const ViewSchedule = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserId = async (email) => {
//       try {
//         const token = localStorage.getItem('token');
//         const decodedToken = jwtDecode(token);
//         // console.log(decodedToken);
//         // const email = decodedToken.sub;
//         console.log("Email:"+email);
//         const id = await getUserIdByEmail(email);
//         setUserId(id);
//         console.log("User ID fetched: ", id); // Log to verify User ID fetching
//       } catch (error) {
//         console.error('Error fetching user ID:', error);
//       }
//     };

//     const fetchSchedules = async (userId, role, token) => {
//       try {
//         console.log("Fetching schedules for User ID:", userId, "Role:", role); // Log role and userId

//         // Set the authorization header with the Bearer token
//         const config = {
//           headers: { Authorization: `Bearer ${token}` }
//         };

//         // Determine the API endpoint based on the role
//         let apiEndpoint = '';
//         if (role === 'ROLE_USER') {
//           apiEndpoint = `http://localhost:8080/auth/viewshift/${userId}`;
//         } else if (role === 'ROLE_ADMIN') {
//           apiEndpoint = `http://localhost:8080/auth/admin/viewshift/${userId}`;
//         } else {
//           console.error('Unknown role:', role);
//           return;
//         }

//         // Fetch schedules from the API using the appropriate endpoint
//         const response = await axios.get(apiEndpoint, config);
//         setSchedules(response.data);
//         console.log("Schedules fetched:", response.data); // Log fetched schedules
//       } catch (error) {
//         console.error('Error fetching schedules:', error);
//       }
//     };

//     const init = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('No token found in local storage');
//           return;
//         }

//         const decodedToken = jwtDecode(token);
//         const { sub:email, role } = decodedToken;

//         console.log("Token decoded:", decodedToken); // Log decoded token

//         // Fetch user ID and then fetch schedules
//         const id = await getUserIdByEmail(email);
//         setUserId(id);

//         if (id) {
//           fetchSchedules(id, role, token);
//         }
//       } catch (error) {
//         console.error('Initialization error:', error);
//       }
//     };

//     init();
//   }, []);

//   const handleDelete = async (shiftId) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found in local storage');
//         return;
//       }

//       const config = {
//         headers: { Authorization: `Bearer ${token}` }
//       };

//       await axios.delete(`http://localhost:8080/auth/admin/deleteshift/${shiftId}`, config);
//       setSchedules(schedules.filter(schedule => schedule.shiftId !== shiftId));
//     } catch (error) {
//       console.error('Error deleting schedule:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="view-schedule-container">
//         <h2 className="view-schedule-title">View Schedule</h2>
//         <table className="view-schedule-table">
//           <thead>
//             <tr>
//               <th>Staff ID</th>
//               <th>Task</th>
//               <th>Date</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedules.map(schedule => (
//               <tr key={schedule.shiftId}>
//                 <td>{schedule.staffId}</td>
//                 <td>{schedule.task}</td>
//                 <td>{new Date(schedule.date).toLocaleDateString()}</td>
//                 <td>{schedule.start_time}</td>
//                 <td>{schedule.end_time}</td>
//                 <td>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(schedule.shiftId)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ViewSchedule;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode'; // Correct import for jwt-decode
// import './ViewSchedule.css'; // Updated CSS import
// import Navbar from './Navbar';
// import { getUserIdByEmail } from './getUserIdByEmail'; // Assuming getUserIdByEmail is correctly imported

// const ViewSchedule = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentSchedule, setCurrentSchedule] = useState(null);

//   useEffect(() => {
//     const fetchUserId = async (email) => {
//       try {
//         const token = localStorage.getItem('token');
//         const decodedToken = jwtDecode(token);
//         const id = await getUserIdByEmail(email);
//         setUserId(id);
//       } catch (error) {
//         console.error('Error fetching user ID:', error);
//       }
//     };

//     const fetchSchedules = async (userId, role, token) => {
//       try {
//         const config = {
//           headers: { Authorization: `Bearer ${token}` }
//         };

//         let apiEndpoint = '';
//         if (role === 'ROLE_USER') {
//           apiEndpoint = `http://localhost:8080/auth/viewshift/${userId}`;
//         } else if (role === 'ROLE_ADMIN') {
//           apiEndpoint = `http://localhost:8080/auth/admin/viewshift/${userId}`;
//         }

//         const response = await axios.get(apiEndpoint, config);
//         setSchedules(response.data);
//       } catch (error) {
//         console.error('Error fetching schedules:', error);
//       }
//     };

//     const init = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('No token found in local storage');
//           return;
//         }

//         const decodedToken = jwtDecode(token);
//         const { sub: email, role } = decodedToken;

//         const id = await getUserIdByEmail(email);
//         setUserId(id);

//         if (id) {
//           fetchSchedules(id, role, token);
//         }
//       } catch (error) {
//         console.error('Initialization error:', error);
//       }
//     };

//     init();
//   }, []);

//   const handleDelete = async (shiftId) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found in local storage');
//         return;
//       }

//       const config = {
//         headers: { Authorization: `Bearer ${token}` }
//       };

//       await axios.delete(`http://localhost:8080/auth/admin/deleteshift/${shiftId}`, config);
//       setSchedules(schedules.filter(schedule => schedule.shiftId !== shiftId));
//     } catch (error) {
//       console.error('Error deleting schedule:', error);
//     }
//   };

//   const handleAdd = async (newSchedule) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found in local storage');
//         return;
//       }

//       const config = {
//         headers: { Authorization: `Bearer ${token}` }
//       };

//       const response = await axios.post(`http://localhost:8080/auth/admin/createshift`, newSchedule, config);
//       setSchedules([...schedules, response.data]);
//     } catch (error) {
//       console.error('Error adding schedule:', error);
//     }
//   };
//   // const handleAdd = async (newSchedule) => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     if (!token) {
//   //       console.error('No token found in local storage');
//   //       return;
//   //     }
  
//   //     const decodedToken = jwtDecode(token);
//   //     const managerId = decodedToken.userId; // Extract the managerId from the token
//   //     console.log(managerId);
//   //     const config = {
//   //       headers: { Authorization: `Bearer ${token}` }
//   //     };
  
//   //     // Include the managerId in the newSchedule object
//   //     const scheduleWithManager = { ...newSchedule, managerId };
  
//   //     const response = await axios.post(`http://localhost:8080/auth/admin/createshift`, scheduleWithManager, config);
//   //     setSchedules([...schedules, response.data]);
//   //   } catch (error) {
//   //     console.error('Error adding schedule:', error);
//   //   }
//   // };

//   const handleEdit = async (editedSchedule) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found in local storage');
//         return;
//       }

//       const config = {
//         headers: { Authorization: `Bearer ${token}` }
//       };

//       const response = await axios.put(`http://localhost:8080/auth/admin/updateshift/${editedSchedule.shiftId}`, editedSchedule, config);
//       setSchedules(schedules.map(schedule => schedule.shiftId === editedSchedule.shiftId ? response.data : schedule));
//       setIsEditing(false);
//       setCurrentSchedule(null);
//     } catch (error) {
//       console.error('Error editing schedule:', error);
//     }
//   };

//   const handleEditButtonClick = (schedule) => {
//     setIsEditing(true);
//     setCurrentSchedule(schedule);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setCurrentSchedule(null);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="unique-view-schedule-container">
//         <h2 className="unique-view-schedule-title">Schedule</h2>
//         <button className="unique-add-button" onClick={() => {
//           const newSchedule = {
//             staffId: prompt("Enter Staff ID:"),
//             task: prompt("Enter Task:"),
//             date: prompt("Enter Date (YYYY-MM-DD):"),
//             start_time: prompt("Enter Start Time (HH:MM):"),
//             end_time: prompt("Enter End Time (HH:MM):")
//           };
//           handleAdd(newSchedule);
//         }}>
//           Add Schedule
//         </button>
//         <table className="unique-view-schedule-table">
//           <thead>
//             <tr>
//               <th>Staff ID</th>
//               <th>Task</th>
//               <th>Date</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedules.map(schedule => (
//               <tr key={schedule.shiftId}>
//                 <td>{schedule.staffId}</td>
//                 <td>{schedule.task}</td>
//                 <td>{new Date(schedule.date).toLocaleDateString()}</td>
//                 <td>{schedule.start_time}</td>
//                 <td>{schedule.end_time}</td>
//                 <td>
//                   <button
//                     className="unique-edit-button"
//                     onClick={() => handleEditButtonClick(schedule)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="unique-delete-button"
//                     onClick={() => handleDelete(schedule.shiftId)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {isEditing && currentSchedule && (
//           <div className="unique-edit-schedule-container">
//             <h3>Edit Schedule</h3>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               const editedSchedule = {
//                 ...currentSchedule,
//                 staffId: e.target.staffId.value,
//                 task: e.target.task.value,
//                 date: e.target.date.value,
//                 start_time: e.target.start_time.value,
//                 end_time: e.target.end_time.value,
//               };
//               handleEdit(editedSchedule);
//             }}>
//               <label>
//                 Staff ID:
//                 <input type="text" name="staffId" defaultValue={currentSchedule.staffId} />
//               </label>
//               <label>
//                 Task:
//                 <input type="text" name="task" defaultValue={currentSchedule.task} />
//               </label>
//               <label>
//                 Date:
//                 <input type="date" name="date" defaultValue={new Date(currentSchedule.date).toISOString().split('T')[0]} />
//               </label>
//               <label>
//                 Start Time:
//                 <input type="time" name="start_time" defaultValue={currentSchedule.start_time} />
//               </label>
//               <label>
//                 End Time:
//                 <input type="time" name="end_time" defaultValue={currentSchedule.end_time} />
//               </label>
//               <button type="submit" style={{marginBottom:'2rem'}}>Save</button>
//               <button type="button" onClick={handleCancelEdit} style={{marginBottom:'2rem'}}>Cancel</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ViewSchedule;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import for jwt-decode
import './ViewSchedule.css'; // Updated CSS import
import Navbar from './Navbar';
import { getUserIdByEmail } from './getUserIdByEmail'; // Assuming getUserIdByEmail is correctly imported

const ViewSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(null);

  useEffect(() => {
    const fetchUserId = async (email) => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const id = await getUserIdByEmail(email);
        setUserId(id);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    const fetchSchedules = async (userId, role, token) => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        let apiEndpoint = '';
        if (role === 'ROLE_USER') {
          apiEndpoint = `http://localhost:8080/auth/viewshift/${userId}`;
        } else if (role === 'ROLE_ADMIN') {
          apiEndpoint = `http://localhost:8080/auth/admin/viewshift/${userId}`;
        }

        const response = await axios.get(apiEndpoint, config);
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    const init = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found in local storage');
          return;
        }

        const decodedToken = jwtDecode(token);
        const { sub: email, role } = decodedToken;

        const id = await getUserIdByEmail(email);
        setUserId(id);

        if (id) {
          fetchSchedules(id, role, token);
        }
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    init();
  }, []);

  const handleDelete = async (shiftId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.delete(`http://localhost:8080/auth/admin/deleteshift/${shiftId}`, config);
      setSchedules(schedules.filter(schedule => schedule.shiftId !== shiftId));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  const handleAdd = async (newSchedule) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = await axios.post(`http://localhost:8080/auth/admin/createshift`, newSchedule, config);
      setSchedules([...schedules, response.data]);
    } catch (error) {
      console.error('Error adding schedule:', error);
    }
  };

  const handleEdit = async (editedSchedule) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = await axios.put(`http://localhost:8080/auth/admin/updateshift/${editedSchedule.shiftId}`, editedSchedule, config);
      setSchedules(schedules.map(schedule => schedule.shiftId === editedSchedule.shiftId ? response.data : schedule));
      setIsEditing(false);
      setCurrentSchedule(null);
    } catch (error) {
      console.error('Error editing schedule:', error);
    }
  };

  const handleEditButtonClick = (schedule) => {
    setIsEditing(true);
    setCurrentSchedule(schedule);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentSchedule(null);
  };

  return (
    <>
      <Navbar />
      <div className="unique-view-schedule-container">
        <h2 className="unique-view-schedule-title">View Schedule</h2>
        <button className="unique-add-button" onClick={() => {
          const newSchedule = {
            managerId:userId,
            staffId: prompt("Enter Staff ID:"),
            task: prompt("Enter Task:"),
            date: prompt("Enter Date (YYYY-MM-DD):"),
            start_time: prompt("Enter Start Time (HH:MM):"),
            end_time: prompt("Enter End Time (HH:MM):")
          };
          handleAdd(newSchedule);
        }}>
          Add Schedule
        </button>
        <table className="unique-view-schedule-table">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Task</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.shiftId}>
                <td>{schedule.staffId}</td>
                <td>{schedule.task}</td>
                <td>{new Date(schedule.date).toLocaleDateString()}</td>
                <td>{schedule.start_time}</td>
                <td>{schedule.end_time}</td>
                <td>
                  <button
                    className="unique-edit-button"
                    onClick={() => handleEditButtonClick(schedule)}
                  >
                    Edit
                  </button>
                  <button
                    className="unique-delete-button"
                    onClick={() => handleDelete(schedule.shiftId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditing && currentSchedule && (
          <div className="unique-edit-schedule-container">
            <h3>Edit Schedule</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const editedSchedule = {
                ...currentSchedule,
                staffId: e.target.staffId.value,
                task: e.target.task.value,
                date: e.target.date.value,
                start_time: e.target.start_time.value,
                end_time: e.target.end_time.value,
              };
              handleEdit(editedSchedule);
            }}>
              <label>
                Staff ID:
                <input type="text" name="staffId" defaultValue={currentSchedule.staffId} />
              </label>
              <label>
                Task:
                <input type="text" name="task" defaultValue={currentSchedule.task} />
              </label>
              <label>
                Date:
                <input type="date" name="date" defaultValue={new Date(currentSchedule.date).toISOString().split('T')[0]} />
              </label>
              <label>
                Start Time:
                <input type="time" name="start_time" defaultValue={currentSchedule.start_time} />
              </label>
              <label>
                End Time:
                <input type="time" name="end_time" defaultValue={currentSchedule.end_time} />
              </label>
              <button type="submit" style={{marginBottom:'2rem'}}>Save</button>
              <button type="button" onClick={handleCancelEdit} style={{marginBottom:'2rem'}}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewSchedule;
