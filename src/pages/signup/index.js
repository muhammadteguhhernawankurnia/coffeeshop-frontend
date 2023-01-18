import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MiniHeaderSignUp from '../../components/mini-header-signup';
import MiniFooter from '../../components/mini-footer';
import '../../pages/signup/styles/sign-up.css';
import axios from 'axios';
import { useEffect } from 'react';

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
            src={require('../../assets/images/login-images/background-login_original.png')}
            className='img-fluid'
            alt='background-img'
          />
        </div>
        <div className='col-sm-6 bg-white text-dark'>
          <div className='row'>
            <MiniHeaderSignUp />
          </div>
          <br />
          <form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email adress'
                id='username'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your password'
                id='password'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your phone number'
                id='password'
              />
              <Form.Text className='text-decoration-underline'>
                Forgot password?
              </Form.Text>
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button variant='' size='lg' className='shadow-lg button-yellow'>
                <h5>
                  <b>Sign Up</b>
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
                  <b>Sign Up with Google</b>
                </h5>
              </Button>
              <Form.Text className='text-muted text-decoration-underline text-center'>
                Don't have an account?
              </Form.Text>
              <Button
                variant=''
                size='lg'
                className='shadow-lg button-chocolate'
              >
                <h5>
                  <b>Login Here</b>
                </h5>
              </Button>
            </div>
          </form>

          <MiniFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;
