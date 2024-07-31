// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Register.css';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length === 0) {
//       // Proceed with form submission
//       navigate('/home');
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2 className="register-title">Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             className="register-input"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           {errors.username && <div className="error-message">{errors.username}</div>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             className="register-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <div className="error-message">{errors.password}</div>}
//         </div>
//         <button type="submit" className="register-button">Register</button>
//       </form>
//       <p className="register-link">Already have an account? <Link to="/login">Log in</Link></p>
//     </div>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Register.css';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('staff'); // Default role
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email Id is required';
//     if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (!role) newErrors.role = 'Role is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length === 0) {
//       console.log({ email, password, role });
//       navigate('/home');
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2 className="register-title">Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email Id:</label>
//           <input
//             type="email"
//             id="email"
//             className="register-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             aria-invalid={!!errors.email}
//             aria-describedby="email-error"
//           />
//           {errors.email && (
//             <div id="email-error" className="error-message">
//               {errors.email}
//             </div>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             className="register-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             aria-invalid={!!errors.password}
//             aria-describedby="password-error"
//           />
//           {errors.password && (
//             <div id="password-error" className="error-message">
//               {errors.password}
//             </div>
//           )}
//         </div>
//         <div className="form-group custom-radio-group" style={{ marginLeft: '35px' }}>
//           <label className="custom-radio-label">
//             <input
//               type="radio"
//               value="staff"
//               checked={role === 'staff'}
//               onChange={(e) => setRole(e.target.value)}
//               className="custom-radio-input"
//               aria-checked={role === 'staff'}
//             />
//             <span className="custom-radio-indicator"></span>
//             Staff
//           </label>
//           <label className="custom-radio-label">
//             <input
//               type="radio"
//               value="manager"
//               checked={role === 'manager'}
//               onChange={(e) => setRole(e.target.value)}
//               className="custom-radio-input"
//               aria-checked={role === 'manager'}
//             />
//             <span className="custom-radio-indicator"></span>
//             Manager
//           </label>
//           {errors.role && (
//             <div id="role-error" className="error-message">
//               {errors.role}
//             </div>
//           )}
//         </div>
//         <button type="submit" className="register-button">Register</button>
//       </form>
//       <p className="register-link">
//         Already have an account? <Link to="/login">Log in</Link>
//       </p>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('staff');
  const [organization, setOrganization] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email Id is required';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!role) newErrors.role = 'Role is required';
    if (!organization) newErrors.organization = 'Organization Name is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/users', {
          email,
          password,
          role,
          organization,
        });
        console.log('Response:', response); 
        navigate('/login');
      } catch (error) {
        console.error('Error saving user:', error);
        if (error.response) {
          setErrors({ submit: `Server responded with status ${error.response.status}: ${error.response.data}` });
        } else if (error.request) {
          
          setErrors({ submit: 'No response from server. Please try again later.' });
        } else {
         
          setErrors({ submit: `Error: ${error.message}` });
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            className={`register-input ${errors.email ? 'input-error' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <div id="email-error" className="error-message">
              {errors.email}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className={`register-input ${errors.password ? 'input-error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <div id="password-error" className="error-message">
              {errors.password}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization Name:</label>
          <input
            type="text"
            id="organization"
            className={`register-input ${errors.organization ? 'input-error' : ''}`}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            aria-invalid={!!errors.organization}
            aria-describedby="organization-error"
          />
          {errors.organization && (
            <div id="organization-error" className="error-message">
              {errors.organization}
            </div>
          )}
        </div>
        <div className="form-group custom-radio-group" style={{ marginLeft: '35px' }}>
          <label className="custom-radio-label">
            <input
              type="radio"
              value="staff"
              checked={role === 'staff'}
              onChange={(e) => setRole(e.target.value)}
              className="custom-radio-input"
              aria-checked={role === 'staff'}
            />
            <span className="custom-radio-indicator"></span>
            Staff
          </label>
          <label className="custom-radio-label">
            <input
              type="radio"
              value="manager"
              checked={role === 'manager'}
              onChange={(e) => setRole(e.target.value)}
              className="custom-radio-input"
              aria-checked={role === 'manager'}
            />
            <span className="custom-radio-indicator"></span>
            Manager
          </label>
          {errors.role && (
            <div id="role-error" className="error-message">
              {errors.role}
            </div>
          )}
        </div>
        <button type="submit" className="register-button">Register</button>
        {errors.submit && <div className="error-message">{errors.submit}</div>}
      </form>
      <p className="register-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;


