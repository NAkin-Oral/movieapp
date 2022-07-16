import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar  bg-primary">
      <div className="navleft">
        <h4 className="bg-info title ms-2" onClick={() => navigate('/')}>
          React Movie App
        </h4>
      </div>
      <div className="navright ">
        <button className="btn bg-success " onClick={() => navigate('login')}>
          Login
        </button>
        <button
          className="btn bg-danger ms-3"
          onClick={() => navigate('register')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
