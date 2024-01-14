import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';

function App() {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: "200px",
    justifyContent: "center",
    padding: "20px"
  }
  const textField = {
    margin: "10px",
    width: "300px",
  }
  const buttonStyle = {
    width: "150px",
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailRegex.test(email) && password.length > 7){
      setValidated(true);
    }else{
      setValidated(false);
    }
  }, [email, password]);

  return (
    <div style={wrapperStyle}>
      <TextField
        value={email}
        style={textField}
        label={"Email"}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type={showPassword ? 'text' : 'password'}
        value={password}
        style={textField}
        label={"Password"}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        Show Password
        <Checkbox
          checked={showPassword}
          onChange={(event) => setShowPassword(event.target.checked)}
        />
      </div>
      <Button
        disabled={!validated}
        style={buttonStyle}
        variant='contained'
      >
        Login
      </Button>
    </div>
  );
}

export default App;
