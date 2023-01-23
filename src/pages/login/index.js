import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MiniHeader from '../../components/mini-header';
import MiniFooter from '../../components/mini-footer';
import '../../pages/login/styles/login.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Login = () => {
  const [LoginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [validate, setValidate] = useState({ error: false, message: '' });
  //hooks
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // alert('awkwokowko');
    axios({
      url: 'http://localhost:5000/api/v1/auth/login',
      method: 'POST',
      data: LoginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('@userLogin', JSON.stringify(res.data.data));
        navigate('/product');
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setValidate({ error: true, message: err.response.data.message });
      });
  };
  //private route ketika user sudah login gak bisa balik ke form login
  useEffect(() => {
    if (localStorage.getItem('@userLogin')) {
      navigate('/product');
    }
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
          {validate.error && (
            <Alert variant='success'>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <hr />
              <p className='mb-0'>{validate.message}</p>
            </Alert>
          )}
          <form onSubmit={handleLogin} className=''>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setLoginForm({
                    ...LoginForm,
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
                  setLoginForm({
                    ...LoginForm,
                    password: e.target.value,
                  })
                }
                type='password'
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
              <Button
                type='submit'
                variant=''
                size='lg'
                className='shadow-lg button-yellow'
              >
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
                to='/auth/signup'
              >
                <Form.Text className='text-decoration-underline '>
                  Don't have an account?
                </Form.Text>
              </Link>
              <Link
                className='shadow-lg text-center rounded button-chocolate'
                to='/auth/signup'
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
