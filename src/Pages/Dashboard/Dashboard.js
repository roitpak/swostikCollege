import { useEffect, useState } from 'react';
import authService from '../../services/authService';
import studentService from '../../services/studentService';

function Dashboard() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getEmailSession();
    getStudentList();
  }, []);

  const getEmailSession = async () => {
    await authService
      .getUser()
      .then((response) => {
        console.log('User data--->', response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getStudentList = async () => {
    await studentService
      .getStudents()
      .then((response) => {
        setStudents(response?.documents);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {students.map((student) => (
        <>
          <h1>{student.name}</h1>
          <p>{new Date(student.dob).toLocaleDateString()}</p>
          <p>{student.address}</p>
        </>
      ))}
    </div>
  );
}

export default Dashboard;
