// SignUpForm.jsx

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

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSignUp = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="formContainer">
            <Typography variant="h5" gutterBottom>
                Sign Up
            </Typography>
            <FormControl fullWidth variant="outlined" margin="normal">
                <TextField
                    label="Username"
                    variant="outlined"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            <FormControl fullWidth variant="outlined" margin="normal">
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSignUp}>
                Sign Up
            </Button>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Sign Up successful!"
            />
        </div>
    );
};

export default SignUpForm;
