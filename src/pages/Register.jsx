import React from 'react';
import {
  Input,
  FormControl,
  InputLabel,
  Button,
  FormGroup,
} from '@mui/material';

const Register = () => {
  return (
    <div className="login  text-center d-flex">
      <div className="loginleft">
        <img src="https://picsum.photos/1100/900" alt="" />
      </div>
      <div className="loginright">
        <h1 className="loginTitle">REGISTER</h1>
        <FormGroup className="d-flex flex-col gap-4">
          <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input
              id="my-password"
              type="password"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Button variant="contained">Register</Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Register;
