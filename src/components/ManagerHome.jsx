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

// Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import HomePage from '../assests/HomePage.svg'; // Update the path as necessary
// import PageLogo from '../assests/FinalLogo.png';

// const Home = () => {
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
//       <div className="home-container">
//         <div className="home-text" style={{ marginTop: '-50px' }}>
//           <h1>
//             Welcome to TimeTrek<br />
//             <span className="highlight">Your <span className="highlight-timetrek">Productivity</span> Hub</span>
//           </h1>
//           <p className="sub-title" style={{ marginTop: '-30px' }}>Explore our features and start boosting your productivity today.</p>
//           <p className="desp">Manage your tasks, stay on top of notifications, and customize your profile to fit your workflow.</p>
//           <Link to="/shcedule" className="start-button">View Schedule</Link>
//         </div>
//         <div className="home-image">
//           <img src={HomePage} alt="Home Description" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './ManagerHome.css';
import HomePage from '../assests/HomePage.svg'; // Update the path as necessary
import PageLogo from '../assests/FinalLogo.png';

const ManageHome = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <img className="navbar-logo" src={PageLogo} alt="Your Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/manager-home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/manager-profile" className="nav-link">Profile</Link>
          <Link to="/" className="nav-link">Log out</Link>
        </div>
      </nav>
      <div className="home-container">
        <div className="home-text" style={{ marginTop: '-50px' }}>
          <h1>
            Welcome Manager<br />
            <span className="highlight">Your <span className="highlight-timetrek">Work Management</span></span>
          </h1>
          <p className="sub-title" style={{ marginTop: '-30px' }}>Manage your tasks and stay organized effortlessly.</p>
          <p className="desp">View your schedule, manage staff, handle requests, and track your progress.</p>
          <div className="button-group">
            <Link to="/manage-staff" className="start-button">Manage Staffs</Link>
            <Link to="/view-requests" className="start-button">View Requests</Link>
            <Link to="/view-schedule" className="start-button">View Schedule</Link>
          </div>
        </div>
        <div className="home-image">
          <img src={HomePage} alt="Home Description" />
        </div>
      </div>
    </>
  );
};

export default ManageHome;
