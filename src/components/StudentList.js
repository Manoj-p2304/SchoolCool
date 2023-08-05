// StudentList.js

import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students') // Use the endpoint you set up in the backend
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/students/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStudents(students.filter((student) => student._id !== id));
      })
      .catch((error) => console.error('Error deleting student:', error));
  };

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student) => (
        <div key={student._id}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Enrollment Date: {student.enrollmentDate}</p>
          {/* Add more fields for personal info, etc. */}
          <button onClick={() => handleDelete(student._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
