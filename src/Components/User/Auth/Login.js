import React from 'react';
import { TextField, Button } from '@material-ui/core';
const Login = () => {
  return (
    <div>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained" color="primary" disableElevation>
        Login
      </Button>
    </div>
  );
};

export default Login;
