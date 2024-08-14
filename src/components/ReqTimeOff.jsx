// import React, { useState } from 'react';
// import './TimeOff.css';
// import Navbar from './Navbar';
// import axios from 'axios';

// function TimeOffRequestForm() {
//   const [form, setForm] = useState({
//     staffId: '',
//     managerId: '',
//     shiftId: '',
//     date: {
//       month: '',
//       day: '',
//       year: '',
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       date: {
//         ...form.date,
//         [name]: value,
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate date
//     const { month, day, year } = form.date;
//     if (!month || !day || !year) {
//       alert('Please fill out the date correctly.');
//       return;
//     }

//     // Format date to yyyy-MM-dd
//     const formattedDate = `${year}-${month}-${day}`;

//     const requestData = {
//       staffId: form.staffId,
//       managerId: form.managerId,
//       shiftId: form.shiftId,
//       date: formattedDate,
//       status: null, // Default status is null
//     };

//     axios.post('http://localhost:8080/auth/user/createrequest', requestData)
//       .then(response => {
//         console.log('Request created:', response.data);
//       })
//       .catch(error => {
//         console.error('There was an error creating the request!', error);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="timeoff-container">
//         <form className="timeoff-form" onSubmit={handleSubmit}>
//           <h1 className="timeoff-h1">Time Off Request</h1>
//           <p className="timeoff-p">Request a time off from work</p>

//           <label className="timeoff-label">Staff Id</label>
//           <div className="timeoff-div">
//             <input
//               type="text"
//               name="staffId"
//               placeholder="Your ID"
//               value={form.staffId}
//               onChange={handleChange}
//               className="timeoff-input-text"
//             />
//           </div>

//           <label className="timeoff-label">Manager ID</label>
//           <input
//             type="text"
//             name="managerId"
//             placeholder="Manager ID"
//             value={form.managerId}
//             onChange={handleChange}
//             className="timeoff-input-text"
//           />

//           <label className="timeoff-label">Shift ID</label>
//           <input
//             type="text"
//             name="shiftId"
//             placeholder="Shift ID"
//             value={form.shiftId}
//             onChange={handleChange}
//             className="timeoff-input-text"
//           />

//           <label className="timeoff-label">Date</label>
//           <div className="timeoff-div">
//             <select
//               name="month"
//               value={form.date.month}
//               onChange={handleDateChange}
//               className="timeoff-select"
//             >
//               <option value="">Month</option>
//               <option value="01">January</option>
//               <option value="02">February</option>
//               <option value="03">March</option>
//               <option value="04">April</option>
//               <option value="05">May</option>
//               <option value="06">June</option>
//               <option value="07">July</option>
//               <option value="08">August</option>
//               <option value="09">September</option>
//               <option value="10">October</option>
//               <option value="11">November</option>
//               <option value="12">December</option>
//             </select>
//             <input
//               type="text"
//               name="day"
//               placeholder="Day"
//               value={form.date.day}
//               onChange={handleDateChange}
//               className="timeoff-input-text"
//             />
//             <input
//               type="text"
//               name="year"
//               placeholder="Year"
//               value={form.date.year}
//               onChange={handleDateChange}
//               className="timeoff-input-text"
//             />
//           </div>

//           <button type="submit" className="timeoff-button">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default TimeOffRequestForm;

import React, { useState } from 'react';
import './TimeOff.css';
import Navbar from './Navbar';
import axios from 'axios';

function TimeOffRequestForm() {
  const [form, setForm] = useState({
    staffId: '',
    managerId: '',
    shiftId: '',
    date: {
      month: '',
      day: '',
      year: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      date: {
        ...form.date,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date
    const { month, day, year } = form.date;
    if (!month || !day || !year) {
      alert('Please fill out the date correctly.');
      return;
    }

    // Format date to yyyy-MM-dd
    const formattedDate = `${year}-${month}-${day}`;

    const requestData = {
      staffId: form.staffId,
      managerId: form.managerId,
      shiftId: form.shiftId,
      date: formattedDate,
      status: null, // Default status is null
    };

    axios.post('http://localhost:8080/auth/user/createrequest', requestData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => {
      console.log('Request created:', response.data);
      alert('Your request has been sent successfully!');
    })
    .catch(error => {
      console.error('There was an error creating the request!', error);
      if (error.response && error.response.status === 403) {
        alert('You are not authorized to make this request. Please check your credentials.');
      } else {
        alert('An error occurred while sending the request. Please try again.');
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="timeoff-container">
        <form className="timeoff-form" onSubmit={handleSubmit}>
          <h1 className="timeoff-h1">Time Off Request</h1>
          <p className="timeoff-p">Request time off from work</p>

          <label className="timeoff-label">Staff Id</label>
          <div className="timeoff-div">
            <input
              type="text"
              name="staffId"
              placeholder="Your ID"
              value={form.staffId}
              onChange={handleChange}
              className="timeoff-input-text"
            />
          </div>

          <label className="timeoff-label">Manager ID</label>
          <input
            type="text"
            name="managerId"
            placeholder="Manager ID"
            value={form.managerId}
            onChange={handleChange}
            className="timeoff-input-text"
          />

          <label className="timeoff-label">Shift ID</label>
          <input
            type="text"
            name="shiftId"
            placeholder="Shift ID"
            value={form.shiftId}
            onChange={handleChange}
            className="timeoff-input-text"
          />

          <label className="timeoff-label">Date</label>
          <div className="timeoff-div">
            <select
              name="month"
              value={form.date.month}
              onChange={handleDateChange}
              className="timeoff-select"
            >
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <input
              type="text"
              name="day"
              placeholder="Day"
              value={form.date.day}
              onChange={handleDateChange}
              className="timeoff-input-text"
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={form.date.year}
              onChange={handleDateChange}
              className="timeoff-input-text"
            />
          </div>

          <button type="submit" className="timeoff-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default TimeOffRequestForm;
