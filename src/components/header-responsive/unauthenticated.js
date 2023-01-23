import { Link, useNavigate } from 'react-router-dom';

const Unaunthenticated = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='mt-1 header-content-3'>
        <button
          type='button'
          className='button btn-outline-warning'
          onClick={() => navigate('/auth/login')}
        >
          {/* <Link className='link-dark text-decoration-none' to='/auth/login'>
            Login
          </Link> */}
          Login
        </button>{' '}
        <button type='button' className='button btn-outline-warning'>
          <Link className='link-dark text-decoration-none' to='/auth/signup'>
            Sign Up
          </Link>
        </button>
      </div>
    </>
  );
};

export default Unaunthenticated;
