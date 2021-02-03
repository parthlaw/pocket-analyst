import React from 'react';
import { TextField, Button } from '@material-ui/core';
const Register = () => {
  return (
    <div>
      <TextField id="standard-basic" label="First Name" />
      <TextField id="standard-basic" label="Last Name" />
      <TextField id="standard-basic" label="email" />
      <TextField id="standard-basic" label="contact" />
      <TextField id="standard-basic" type="date" label="DOB" />
      <TextField id="standard-basic" label="Blood Group" />
      <TextField id="standard-basic" label="Height" />
      <TextField id="standard-basic" label="Weight" />
    </div>
  );
};

export default Register;
