import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Login</h1>
      <TextField
        label="Username"
        style={{ width: '50%' }}
        InputProps={{ style: { color: 'white' } }}
        InputLabelProps={{
          style: { color: '#fff' },
        }}
      />
      <br />
      <TextField label="Password" style={{ width: '50%' }} />
      <br />
      <Button variant="contained" color="primary" disableElevation>
        Login
      </Button>
      <Typography>Create an doctor account?</Typography>
      <Link to="/doctor/register">register</Link>
    </div>
  );
};

export default Login;
