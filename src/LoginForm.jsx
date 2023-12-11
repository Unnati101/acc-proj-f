// LoginForm.jsx

import { useState } from 'react';
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    OutlinedInput,
    Typography,
    Snackbar,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import './App.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleLogin = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="formContainer">
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
            <FormControl fullWidth variant="outlined" margin="normal">
                <TextField
                    label="Username or Email"
                    variant="outlined"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Login successful!"
            />
        </div>
    );
};

export default LoginForm;
