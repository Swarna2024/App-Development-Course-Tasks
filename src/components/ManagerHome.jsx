// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ManagerHome.css'; // Ensure to create this CSS file
// import ManagerHomePage from '../assests/HomePage.svg'; // Update the path as necessary
// import PageLogo from '../assests/FinalLogo.png';

// const ManagerHome = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <div>
//           <img className="navbar-logo" src={PageLogo} alt="Your Logo" />
//         </div>
//         <div className="navbar-links">
//           <Link to="/home" className="nav-link">Home</Link>
//           <Link to="/features" className="nav-link">Features</Link>
//           <Link to="/about" className="nav-link">About</Link>
//           <Link to="/profile" className="nav-link">Profile</Link>
//         </div>
//       </nav>
//       <div className="manager-home-container">
//         <div className="manager-home-image">
//           <img src={ManagerHomePage} alt="Manager Home Description" />
//         </div>
//         <div className="manager-home-text">
//           <h1>
//             Welcome to the Manager Dashboard<br />
//             <span className="highlight">Efficient <span className="highlight-manager">Team Management</span></span>
//           </h1>
//           <p className="sub-title">Oversee and streamline your team's workflow effortlessly.</p>
//           <p className="desp">Manage employees, create and assign shifts, and handle requests with ease.</p>
//           <div className="button-group">
//             <h2>Employee Management</h2>
//             <Link to="/employee-management/add" className="start-button">Add Employee</Link>
//             <Link to="/employee-management/edit" className="start-button">Edit Employee</Link>
//             <Link to="/employee-management/delete" className="start-button">Delete Employee</Link>
            
//             <h2>Shift Management</h2>
//             <Link to="/shift-management/create" className="start-button">Create Shift</Link>
//             <Link to="/shift-management/edit" className="start-button">Edit Shift</Link>
//             <Link to="/shift-management/assign" className="start-button">Assign Shift</Link>
            
//             <h2>Requests</h2>
//             <Link to="/requests" className="start-button">View Requests</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ManagerHome;

import React from 'react';
import { Link } from 'react-router-dom';
import './ManagerHome.css'; 
import ManagerHomePage from '../assests/HomePage.svg'; 
import PageLogo from '../assests/FinalLogo.png';

const ManagerHome = () => {
  return (
    <>
      <nav className="manager-home-navbar">
        <div>
          <img className="manager-home-navbar-logo" src={PageLogo} alt="Your Logo" />
        </div>
        <div className="manager-home-navbar-links">
          <Link to="/manager-home" className="manager-home-nav-link">Home</Link>
          <Link to="/features" className="manager-home-nav-link">Features</Link>
          <Link to="/about" className="manager-home-nav-link">About</Link>
          <Link to="/profile" className="manager-home-nav-link">Profile</Link>
          <Link to="/" className="manager-home-nav-link">Log out</Link>
        </div>
      </nav>
      <div className="manager-home-container">
        <div className="manager-home-image">
          <img src={ManagerHomePage} alt="Manager Home Description" />
        </div>
        <div className="manager-home-text">
          <h1>
            Welcome to the Manager Dashboard<br />
            <span className="manager-home-highlight">Efficient <span className="manager-home-highlight-manager">Team Management</span></span>
          </h1>
          <p className="manager-home-sub-title">Oversee and streamline your team's workflow effortlessly.</p>
          <p className="manager-home-desp">Manage employees, create and assign shifts, and handle requests with ease.</p>
          <div className="manager-home-button-group">
            <h2>Employee Management</h2>
            <Link to="/employee-management/add" className="manager-home-start-button">Add Employee</Link>
            <Link to="/employee-management/edit" className="manager-home-start-button">Edit Employee</Link>
            <Link to="/employee-management/delete" className="manager-home-start-button">Delete Employee</Link>
            
            <h2>Shift Management</h2>
            <Link to="/shift-management/create" className="manager-home-start-button">Create Shift</Link>
            <Link to="/shift-management/edit" className="manager-home-start-button">Edit Shift</Link>
            <Link to="/shift-management/assign" className="manager-home-start-button">Assign Shift</Link>
            
            <h2>Requests</h2>
            <Link to="/requests" className="manager-home-start-button">View Requests</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerHome;
