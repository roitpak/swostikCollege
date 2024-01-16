import { useEffect, useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
import { buttonStyle, textField, wrapperStyle } from './LoginStyles';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (emailRegex.test(email) && password.length > 7) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    }, [email, password]);
    const onLoginPressed = () => {
        navigate('/dashboard');
    };

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
                onClick={onLoginPressed}
                disabled={!validated}
                style={buttonStyle}
                variant='contained'
            >
                Login
            </Button>
        </div>
    );
}

export default LoginPage;
