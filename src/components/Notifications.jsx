import React, { useState } from 'react';
import Navbar from './Navbar';  // Import Navbar component
import './ScheduleTable.css';

function ScheduleTable() {
  // Example state to manage the selected status for each row
  const [status, setStatus] = useState({
    '001': 'Pending', // Example default status for row 1
    '002': 'Pending', // Example default status for row 2
  });

  // Function to handle dropdown change
  const handleStatusChange = (requestId, newStatus) => {
    setStatus(prevStatus => ({
      ...prevStatus,
      [requestId]: newStatus
    }));
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar at the top */}
      <div className="schedule-container">
        <h2 className="schedule-title">View Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>RequestId</th>
              <th>StaffId</th>
              <th>ManagerId</th>
              <th>ShiftId</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>123</td>
              <td>789</td>
              <td>456</td>
              <td>2024-08-12</td>
              <td>
                <select 
                  value={status['001']} 
                  onChange={(e) => handleStatusChange('001', e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Accept">Accept</option>
                  <option value="Reject">Reject</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>124</td>
              <td>790</td>
              <td>457</td>
              <td>2024-08-13</td>
              <td>
                <select 
                  value={status['002']} 
                  onChange={(e) => handleStatusChange('002', e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Accept">Accept</option>
                  <option value="Reject">Reject</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleTable;