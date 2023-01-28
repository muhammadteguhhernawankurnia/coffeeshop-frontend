import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

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
          <Link className='link-dark text-decoration-none' to='/chat'>
            <img
              alt=''
              src={require('../../assets/images/header-images/chat.png')}
              width='30'
              height='30'
              className='m-1'
            />
          </Link>
          <NavDropdown
            className='text-dark'
            title={
              <img
                alt=''
                src={require('../../assets/images/header-images/profile.png')}
                width='30'
                height='30'
                className='rounded m-1'
              />
            }
            id='navbarScrollingDropdown'
          >
            <NavDropdown.Item>
              <Link className='link-dark text-decoration-none' to='/profile'>
                Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                localStorage.removeItem('@userLogin');
                setIsLogin(false);
              }}
              className='text-dark'
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
      </div>
    </>
  );
};

export default Aunthenticated;
