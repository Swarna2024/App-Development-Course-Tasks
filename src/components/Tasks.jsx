// import React, { useState, useEffect } from 'react';
// import './Tasks.css';
// import Navbar from './Navbar';

// const TaskComponent = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [progress, setProgress] = useState(0);
//   const [quote, setQuote] = useState('');

//   const motivationalQuotes = [
//     "Every step forward is a step closer to your goal!",
//     "Keep pushing, you're doing great!",
//     "Halfway there! Stay strong!",
//     "Almost there! Keep going!",
//     "You've made it! Great job!"
//   ];

//   useEffect(() => {
//     calculateProgress();
//   }, [tasks]);

//   const calculateProgress = () => {
//     const completedTasks = tasks.filter(task => task.completed).length;
//     const progressPercent = tasks.length ? (completedTasks / tasks.length) * 100 : 0;
//     setProgress(progressPercent);
//     setQuote(getQuote(progressPercent));
//   };

//   const getQuote = (progressPercent) => {
//     if (progressPercent === 0) return motivationalQuotes[0];
//     if (progressPercent > 0 && progressPercent <= 25) return motivationalQuotes[1];
//     if (progressPercent > 25 && progressPercent <= 50) return motivationalQuotes[2];
//     if (progressPercent > 50 && progressPercent <= 75) return motivationalQuotes[3];
//     return motivationalQuotes[4];
//   };

//   const handleAddTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const handleCompleteTask = (index) => {
//     const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: true } : task);
//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="task-component">
//       <h2 className="task-title">My To-Do List</h2>
//       <input
//         className="task-input"
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Add a new task..."
//       />
//       <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
//       <div className="task-list">
//         {tasks.map((task, index) => (
//           <div className={`task-item ${task.completed ? 'completed' : ''}`} key={index}>
//             <span className="task-text">{task.text}</span>
//             {!task.completed && (
//               <button
//                 className="complete-task-button"
//                 onClick={() => handleCompleteTask(index)}
//               >
//                 Complete
//               </button>
//             )}
//             <button
//               className="delete-task-button"
//               onClick={() => handleDeleteTask(index)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="progress-container">
//         <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//       </div>
//       <p className="motivational-quote">{quote}</p>
//     </div>
//     </>
//   );
// };

// export default TaskComponent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Tasks.css';
// import Navbar from './Navbar';

// const Tasks = () => {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState('');
//     const [progress, setProgress] = useState(0);
//     const [quote, setQuote] = useState('');

//     const motivationalQuotes = [
//         "Every step forward is a step closer to your goal!",
//         "Keep pushing, you're doing great!",
//         "Halfway there! Stay strong!",
//         "Almost there! Keep going!",
//         "You've made it! Great job!"
//     ];

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     useEffect(() => {
//         calculateProgress();
//     }, [tasks]);

//     const fetchTasks = async () => {
//         try {
//             const staffId = getStaffIdFromToken(); // Assuming you have a method to extract staffId from token
//             const response = await axios.get(`http://localhost:8080/auth/user/viewtasks/${staffId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             setTasks(response.data);
//         } catch (error) {
//             console.error('Error fetching tasks:', error);
//         }
//     };

//     const handleAddTask = async () => {
//         if (newTask.trim()) {
//             try {
//                 const staffId = getStaffIdFromToken();
//                 const response = await axios.post('http://localhost:8080/auth/user/createtasks', {
//                     task: newTask,
//                     completed: false,
//                     staffId: staffId
//                 }, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`
//                     }
//                 });
//                 setTasks([...tasks, response.data]);
//                 setNewTask('');
//             } catch (error) {
//                 console.error('Error adding task:', error);
//             }
//         }
//     };

//     const handleCompleteTask = async (id) => {
//         try {
//             const updatedTask = { ...tasks.find(task => task.id === id), completed: true };
//             const response = await axios.put(`http://localhost:8080/auth/user/updatetasks/${id}`, updatedTask, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             setTasks(tasks.map(task => (task.id === id ? response.data : task)));
//         } catch (error) {
//             console.error('Error updating task:', error);
//         }
//     };

//     const handleDeleteTask = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/auth/user/deletetasks/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             setTasks(tasks.filter(task => task.id !== id));
//         } catch (error) {
//             console.error('Error deleting task:', error);
//         }
//     };

//     const calculateProgress = () => {
//         const completedTasks = tasks.filter(task => task.completed).length;
//         const progressPercent = tasks.length ? (completedTasks / tasks.length) * 100 : 0;
//         setProgress(progressPercent);
//         setQuote(getQuote(progressPercent));
//     };

//     const getQuote = (progressPercent) => {
//         if (progressPercent === 0) return motivationalQuotes[0];
//         if (progressPercent > 0 && progressPercent <= 25) return motivationalQuotes[1];
//         if (progressPercent > 25 && progressPercent <= 50) return motivationalQuotes[2];
//         if (progressPercent > 50 && progressPercent <= 75) return motivationalQuotes[3];
//         return motivationalQuotes[4];
//     };

//     const getStaffIdFromToken = () => {
//         // Logic to extract and return staffId from the JWT token
//         const token = localStorage.getItem('token');
//         const payload = JSON.parse(atob(token.split('.')[1]));
//         return payload.staffId;
//     };

//     return (
//         <>
//         <Navbar/>
//         <div className="task-component">
//             <h2 className="task-title">My To-Do List</h2>
//             <input
//                 className="task-input"
//                 type="text"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 placeholder="Add a new task..."
//             />
//             <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
//             <div className="task-list">
//                 {tasks.map(task => (
//                     <div className={`task-item ${task.completed ? 'completed' : ''}`} key={task.id}>
//                         <span className="task-text">{task.task}</span>
//                         {!task.completed && (
//                             <button
//                                 className="complete-task-button"
//                                 onClick={() => handleCompleteTask(task.id)}
//                             >
//                                 Complete
//                             </button>
//                         )}
//                         <button
//                             className="delete-task-button"
//                             onClick={() => handleDeleteTask(task.id)}
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             <div className="progress-container">
//                 <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//             </div>
//             <p className="motivational-quote">{quote}</p>
//         </div>
//         </>
//     );
// };

// export default Tasks;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import './Tasks.css';
import Navbar from './Navbar';
import { getUserIdByEmail } from './getUserIdByEmail'; // Assuming this utility is available

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [userId, setUserId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [quote, setQuote] = useState('');

  const motivationalQuotes = [
    "Every step forward is a step closer to your goal!",
    "Keep pushing, you're doing great!",
    "Halfway there! Stay strong!",
    "Almost there! Keep going!",
    "You've made it! Great job!"
  ];

  useEffect(() => {
    const init = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found in local storage');
          return;
        }

        const decodedToken = jwtDecode(token);
        const { sub: email } = decodedToken;

        const id = await getUserIdByEmail(email);
        setUserId(id);

        if (id) {
          fetchTasks(id);
        }
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    const fetchTasks = async (userId) => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const response = await axios.get(`http://localhost:8080/auth/user/viewtasks/${userId}`, config);
        setTasks(response.data);
        calculateProgress(response.data); // Calculate progress after fetching tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    init();
  }, []);

  const calculateProgress = (tasks) => {
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const progressPercent = tasks.length ? (completedTasks / tasks.length) * 100 : 0;
    setProgress(progressPercent);
    setQuote(getQuote(progressPercent));
  };

  const getQuote = (progressPercent) => {
    if (progressPercent === 0) return motivationalQuotes[0];
    if (progressPercent > 0 && progressPercent <= 25) return motivationalQuotes[1];
    if (progressPercent > 25 && progressPercent <= 50) return motivationalQuotes[2];
    if (progressPercent > 50 && progressPercent <= 75) return motivationalQuotes[3];
    return motivationalQuotes[4];
  };

  const handleAddTask = async () => {
    if (newTask.trim() && userId) {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const taskData = {
          staffId: userId,
          task: newTask,
          status: 'pending'
        };

        const response = await axios.post('http://localhost:8080/auth/user/createtasks', taskData, config);
        const updatedTasks = [...tasks, response.data];
        setTasks(updatedTasks);
        setNewTask('');
        calculateProgress(updatedTasks); // Recalculate progress after adding a task
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const handleCompleteTask = async (index) => {
    const taskToUpdate = tasks[index];
    taskToUpdate.status = 'completed';

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.put(`http://localhost:8080/auth/user/updatetasks/${taskToUpdate.taskId}`, taskToUpdate, config);
      const updatedTasks = tasks.map((task, i) => (i === index ? taskToUpdate : task));
      setTasks(updatedTasks);
      calculateProgress(updatedTasks); // Recalculate progress after completing a task
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (index) => {
    const taskIdToDelete = tasks[index].taskId;

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.delete(`http://localhost:8080/auth/user/deletetasks/${taskIdToDelete}`, config);
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      calculateProgress(updatedTasks); // Recalculate progress after deleting a task
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="task-component">
        <h2 className="task-title">My To-Do List</h2>
        <input
          className="task-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className={`task-item ${task.status === 'completed' ? 'completed' : ''}`} key={index}>
              <span className="task-text">{task.task}</span>
              {task.status !== 'completed' && (
                <button
                  className="complete-task-button"
                  onClick={() => handleCompleteTask(index)}
                >
                  Complete
                </button>
              )}
              <button
                className="delete-task-button"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="motivational-quote">{quote}</p>
      </div>
    </>
  );
};

export default TaskComponent;