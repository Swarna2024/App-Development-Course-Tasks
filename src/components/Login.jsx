// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!email) {
//       newErrors.email = 'Email Id is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email Id is invalid';
//     }
//     if (!password) {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors({});
//     setLoading(true);

//     const newErrors = validate();
//     if (Object.keys(newErrors).length === 0) {
//       setTimeout(() => {
//         setLoading(false);
//         localStorage.setItem('isAuthenticated', 'true');
//         setIsAuthenticated(true);
//         navigate('/home');
//       }, 1000);
//     } else {
//       setLoading(false);
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email Id:</label>
//           <input
//             id="email"
//             type="email"
//             className="login-input"
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
//             id="password"
//             type="password"
//             className="login-input"
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
//         <button type="submit" className="login-button" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//       <p>
//         Don't have an account?{' '}
//         <Link to="/register" className="login-link">Create one</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// Function to validate form inputs
// const validate = (email, password) => {
//   const errors = {};
//   if (!email) {
//     errors.email = 'Email is required';
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!password) {
//     errors.password = 'Password is required';
//   } else if (password.length < 6) {
//     errors.password = 'Password must be at least 6 characters long';
//   }
//   return errors;
// };

// // Function to fetch user from a mock database
// const fetchUser = async (email) => {
//   try {
//     const response = await fetch('/path/to/db.json'); // Ensure this path is correct
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log('Fetched Data:', data); // Debugging line
//     const normalizedEmail = email.trim().toLowerCase();
//     const user = data.users.find(user => user.email.trim().toLowerCase() === normalizedEmail);
//     return user || null;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// };

// // Login component
// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setLoading(true);

//     // Validate form inputs
//     const newErrors = validate(email, password);
//     if (Object.keys(newErrors).length === 0) {
//       try {
//         // Fetch user data from mock database
//         const user = await fetchUser(email);

//         console.log('Fetched User:', user); // Debugging line

//         if (user) {
//           console.log('Entered Password:', password); // Debugging line
//           console.log('Stored Password:', user.password); // Debugging line

//           // Check if password matches
//           if (user.password.trim() === password.trim()) {
//             localStorage.setItem('isAuthenticated', 'true');
//             setIsAuthenticated(true);

//             // Redirect based on user role
//             if (user.role === 'manager') {
//               navigate('/manager-home');
//             } else if (user.role === 'staff') {
//               navigate('/home');
//             }
//           } else {
//             setErrors({ login: 'Invalid email or password' });
//           }
//         } else {
//           setErrors({ login: 'User does not exist' });
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//         setErrors({ login: 'Something went wrong. Please try again later.' });
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setLoading(false);
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             className="login-input"
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
//             id="password"
//             type="password"
//             className="login-input"
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
//         {errors.login && (
//           <div className="error-message login-error">
//             {errors.login}
//           </div>
//         )}
//         <button type="submit" className="login-button" disabled={loading}>
//           {loading ? (
//             <span className="spinner">Loading...</span>
//           ) : (
//             'Login'
//           )}
//         </button>
//       </form>
//       <p>
//         Don't have an account?{' '}
//         <Link to="/register" className="login-link">Create one</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email Id is required';
//     if (!password) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length === 0) {
//       setLoading(true);
//       try {
//         const response = await axios.get('http://localhost:3000/users');
//         const user = response.data.find(user => user.email === email);
        
//         if (user) {
//           if (user.password === password) {
//             localStorage.setItem('isAuthenticated', 'true');
//             setIsAuthenticated(true);
//             if (user.role === 'manager') {
//               navigate('/manager-home');
//             } else if (user.role === 'staff') {
//               navigate('/home');
//             }
//           } else {
//             setErrors({ login: 'Incorrect password' });
//           }
//         } else {
//           setErrors({ login: 'User does not exist' });
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//         setErrors({ login: 'Failed to log in. Please try again.' });
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email Id:</label>
//           <input
//             id="email"
//             type="email"
//             className={`login-input ${errors.email ? 'input-error' : ''}`}
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
//             id="password"
//             type="password"
//             className={`login-input ${errors.password ? 'input-error' : ''}`}
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
//         {errors.login && (
//           <div className="error-message login-error">
//             {errors.login}
//           </div>
//         )}
//         <button type="submit" className="login-button" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//       <p>
//         Don't have an account?{' '}
//         <Link to="/register" className="login-link">Create one</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './Login.css';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setAuth} = useAuth();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email Id is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        console.log('Making request to fetch users...');
        const response = await axios.get('http://localhost:3001/users');
        console.log('Received response:', response.data);
        const user = response.data.find(user => user.email === email);

        if (user) {
          console.log('User found:', user);
          if (user.password === password) {
            console.log('Password matches.');
            // localStorage.setItem('isAuthenticated', 'true');
            // setIsAuthenticated(true);
            setAuth(true);
            if (user.role === 'manager') {
              navigate('/manager-home');
            } else if (user.role === 'staff') {
              navigate('/home');
            }
          } else {
            console.log('Incorrect password.');
            setErrors({ login: 'Incorrect password' });
          }
        } else {
          console.log('User does not exist.');
          setErrors({ login: 'User does not exist' });
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrors({ login: 'Failed to log in. Please try again.' });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <input
            id="email"
            type="email"
            className={`login-input ${errors.email ? 'input-error' : ''}`}
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
            id="password"
            type="password"
            className={`login-input ${errors.password ? 'input-error' : ''}`}
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
        {errors.login && (
          <div className="error-message login-error">
            {errors.login}
          </div>
        )}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/register" className="login-link">Create one</Link>
      </p>
    </div>
  );
}

export default Login;

