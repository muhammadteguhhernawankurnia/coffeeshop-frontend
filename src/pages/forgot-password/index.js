import MiniFooter from '../../components/mini-footer/index';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../pages/forgot-password/styles/forgot-password.css';

const ForgotPassword = () => {
  return (
    <>
      <div className='col-sm-12 forgot-password-background'>
        <img
          src={require('../../assets/images/forgot-password/background-original.png')}
          className='img-fluid forgot-password-background'
          alt='forgot-password-background'
        />
      </div>
      <div className='container text-white top-left p-2'>
        <div className='col align-items-start'>
          <div className='col text-center display-5 font-weight-bold mb-2'>
            Forgot your password?
          </div>
          <div className='col text-center mb-4'>
            Don't worry, we got your back!
          </div>
          <InputGroup size='lg'>
            <Form.Control
              placeholder='Enter your email adress'
              aria-label='Large'
              aria-describedby='inputGroup-sizing-sm'
            />
            <Button className='button-yellow' variant='' size='lg'>
              Send
            </Button>
          </InputGroup>
          <div className='col text-center mt-3'>
            Click here if you didn't receive any link in 2 minutes
          </div>
          <div className='col text-center mt-2'>
            <Button className='button-chocolate' variant='' size='lg'>
              Resend Link
            </Button>
          </div>
          <div className='col text-center mt-2'>01:54</div>
        </div>
      </div>
      <MiniFooter />
    </>
  );
};

export default ForgotPassword;
