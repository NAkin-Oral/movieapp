import {
  Input,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  FormGroup,
  Link,
} from '@mui/material';

const Login = () => {
  return (
    <div className="login  text-center d-flex">
      <div className="loginleft">
        <img src="https://picsum.photos/1100/900" alt="" />
      </div>
      <div className="loginright">
        <h1 className="loginTitle">LOGIN</h1>
        <FormGroup className="d-flex flex-col gap-4">
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input
              id="my-password"
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText className="mb-3" id="my-helper-text">
              We'll never share your password.
            </FormHelperText>
            <Link href="#" underline="always">
              {'Forgot password?'}
            </Link>
          </FormControl>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Continue With Google</Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Login;
