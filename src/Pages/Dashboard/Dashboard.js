import { useEffect, useState } from 'react';
import authService from '../../services/authService';
import studentService from '../../services/studentService';
import { Button, TextField } from '@mui/material';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [dob, setDob] = useState();

  useEffect(() => {
    getEmailSession();
    getStudentList();
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-01-20&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`
    )
      .then((response) => console.log('Response---->', response.body))
      .catch((error) => {
        console.error(error);
      });
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

  const onCreateStudent = async () => {
    await studentService
      .createStudent({
        name: name,
        address: address,
        dob: new Date(dob)
      })
      .then((response) => {
        console.log(response);
        getStudentList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div style={createStudentStyle}>
        <TextField
          value={name}
          style={textField}
          label={'Name'}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          value={address}
          style={textField}
          label={'Address'}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextField
          value={dob}
          style={textField}
          label={'DOB yyyy-mm-dd'}
          onChange={(event) => setDob(event.target.value)}
        />
        <Button variant={'text'} onClick={onCreateStudent} style={buttonStyle}>
          {'Create student'}
        </Button>
      </div>
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
const textField = {
  margin: '10px',
  width: '300px'
};
const buttonStyle = {
  width: '150px'
};
const createStudentStyle = {
  flexDirection: 'column',
  display: 'flex'
};
export default Dashboard;
