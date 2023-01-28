import '../../components/header-responsive/styles/header-responsive.css';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Aunthenticated from './authenticated';
import Unaunthenticated from './unauthenticated';
import { useEffect, useState } from 'react';

const pageTitle = (title) => {
  if (typeof title == 'undefined') {
    return 'Coffee Shop';
  }
  return `${title} - Coffe Shop`;
};

//(props)
const HeaderResponsive = ({ headerShown, title }) => {
  const [isLogin, setIsLogin] = useState(false);

  const RenderMenu = () => {
    if (isLogin) {
      return <Aunthenticated setIsLogin={setIsLogin} />;
    }
    return <Unaunthenticated />;
  };

  useEffect(() => {
    if (localStorage.getItem('@userLogin')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <Navbar className='navbar-responsive container bg-white' expand='lg'>
        <Container>
          <div className='header-content-1'>
            <Link className='link-dark text-decoration-none' to='/'>
              <img
                alt=''
                src={require('../../assets/images/product-customer-images/coffee-logo.png')}
                width='40'
                height='40'
                className=''
              />{' '}
              {/* <b>Coffee Shop | {title}</b> */}
              <b>{pageTitle(title)}</b>
            </Link>
          </div>
          <Navbar.Toggle className='' aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className='mt-1 header-content-2'>
                <div className='row'>
                  <div className='col p-2 bg-white text-dark'>
                    <Link className='link-dark text-decoration-none' to='/'>
                      Home
                    </Link>
                  </div>
                  <div className='col p-2 bg-white text-dark'>
                    <Link
                      className='link-dark text-decoration-none'
                      to='/product'
                    >
                      Product
                    </Link>
                  </div>
                  <div className='col p-2 bg-white text-dark'>
                    <Link
                      className='link-dark text-decoration-none'
                      to='/payment'
                    >
                      Cart
                    </Link>
                  </div>
                  <div className='col p-2 bg-white text-dark'>
                    <Link
                      className='link-dark text-decoration-none'
                      to='/history'
                    >
                      History
                    </Link>
                  </div>
                </div>
              </div>
            </Nav>

            <RenderMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {props.headerShown && <header className='mt-4 bg-white'></header>} */}
      {headerShown && <header className='mt-4 bg-white'></header>}
      {/* conditional rendering */}
    </>
  );
};

export default HeaderResponsive;
