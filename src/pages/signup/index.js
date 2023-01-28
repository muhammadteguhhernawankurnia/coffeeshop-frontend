import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MiniHeaderSignUp from '../../components/mini-header-signup';
import MiniFooter from '../../components/mini-footer';
import '../../pages/signup/styles/sign-up.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [SignUpForm, setSignUpForm] = useState({
    username: '',
    password: '',
  });

  const [validate, setValidate] = useState({ error: false, message: '' });
  //hooks
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    // alert('awkwokowko');
    axios({
      url: 'http://localhost:5000/api/v1/auth/register',
      method: 'POST',
      data: SignUpForm,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('@userSignUp', JSON.stringify(res.data.data));
        navigate('/auth/login');
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  //private route ketika user sudah login gak bisa balik ke form login
  useEffect(() => {
    if (localStorage.getItem('@userSignUp')) {
      // navigate('/auth/login');
    }
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
          <form onSubmit={handleSignUp} className=''>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setSignUpForm({
                    ...SignUpForm,
                    username: e.target.value,
                  })
                }
                type='text'
                placeholder='Enter your email adress'
                id='email'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setSignUpForm({
                    ...SignUpForm,
                    password: e.target.value,
                  })
                }
                type='password'
                placeholder='Enter your password'
                id='password'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter your phone number'
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
              <Button
                type='submit'
                variant=''
                size='lg'
                className='shadow-lg button-yellow'
              >
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
              <Link
                className='link-dark text-decoration-none text-center'
                to='/auth/login'
              >
                <Form.Text className='text-muted text-decoration-underline text-center'>
                  Already have an account?
                </Form.Text>
              </Link>
              <Link
                className='shadow-lg text-center rounded button-chocolate'
                to='/auth/login'
              >
                <Button variant='' size='lg' className='text-white'>
                  <h5>
                    <b>Login Here</b>
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

export default SignUp;
