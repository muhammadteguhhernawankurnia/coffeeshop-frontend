import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Aunthenticated = ({ setIsLogin }) => {
  return (
    <>
      <div className='mt-1 header-content-3'>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2 m-1'
            aria-label='Search'
          />
          {/* <Button variant='outline-success'>Search</Button> */}
          <img
            alt=''
            src={require('../../assets/images/header-images/chat.png')}
            width='30'
            height='30'
            className='m-1'
          />{' '}
          <img
            alt=''
            src={require('../../assets/images/header-images/profile.png')}
            width='30'
            height='30'
            className='rounded m-1'
          />
          <Button
            onClick={() => {
              localStorage.removeItem('@userLogin');
              setIsLogin(false);
            }}
            className='text-dark'
          >
            Logout
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Aunthenticated;
