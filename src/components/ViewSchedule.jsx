import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode to decode the token
import './ViewSchedule.css';
import Navbar from './Navbar';

const ViewSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found in local storage');
          return;
        }

        // Decode the token to get the user ID or manager ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Adjust this based on your token structure

        // Set the authorization header with the Bearer token
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Fetch schedules from the API using the decoded user ID
        const response = await axios.get(`http://localhost:8080/auth/viewshift/${userId}`, config);
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
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

  return (
    <>
      <Navbar />
      <div className="view-schedule-container">
        <h2 className="view-schedule-title">View Schedule</h2>
        <table className="view-schedule-table">
          <thead>
            <tr>
              <th>Shift ID</th>
              <th>Staff ID</th>
              <th>Task</th>
              <th>Manager ID</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.shiftId}>
                <td>{schedule.shiftId}</td>
                <td>{schedule.staffId}</td>
                <td>{schedule.task}</td>
                <td>{schedule.managerId}</td>
                <td>{new Date(schedule.date).toLocaleDateString()}</td>
                <td>{schedule.start_time}</td>
                <td>{schedule.end_time}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(schedule.shiftId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewSchedule;
