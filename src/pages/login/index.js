import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MiniHeader from '../../components/mini-header';
import MiniFooter from '../../components/mini-footer';
import '../../pages/login/styles/login.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/auth/login')
      .then((result) => {
        console.log('data API', result.data);
      })
      .catch((error) => {
        console.log('error: ', error.response);
      });
  }, []);

  return (
    <div className='container p-1 bg-white rounded shadow-lg'>
      <div className='row'>
        <div className='col-sm-6 login-background'>
          <img
            src={require('../../assets/images/login-images/background-login.png')}
            className='img-fluid'
            alt='background-img'
          />
        </div>
        <div className='col-sm-6 bg-white text-dark'>
          <div className='row'>
            <MiniHeader />
          </div>
          <br />
          <form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email adress'
                id='email'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your password'
                id='password'
              />
              <Link
                className='link-dark text-decoration-none'
                to='/forgotpassword'
              >
                <Form.Text className='text-decoration-underline'>
                  Forgot password?
                </Form.Text>
              </Link>
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button variant='' size='lg' className='shadow-lg button-yellow'>
                <h5>
                  <b>Login</b>
                </h5>
              </Button>
              <Button variant='' size='lg' className='shadow-lg button-white'>
                <h5>
                  <img
                    alt=''
                    src={require('../../assets/images/login-images/google.png')}
                    width='20'
                    height='20'
                    className=''
                  />{' '}
                  <b>Login with Google</b>
                </h5>
              </Button>
              <Link
                className='link-dark text-decoration-none text-center'
                to='/signup'
              >
                <Form.Text className='text-decoration-underline '>
                  Don't have an account?
                </Form.Text>
              </Link>
              <Link
                className='shadow-lg text-center rounded button-chocolate'
                to='/signup'
              >
                <Button
                  variant=''
                  size='lg'
                  className='shadow-lg text-center rounded button-chocolate text-white'
                >
                  <h5>
                    <b>Sign Up Here</b>
                  </h5>
                </Button>
              </Link>
            </div>
          </form>

          <MiniFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;
