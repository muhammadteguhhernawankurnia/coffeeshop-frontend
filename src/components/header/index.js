import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HeaderNotLogin = () => {
  return (
    <>
      <header>
        <div className='container'>
          <nav className='navbar navbar-expand-lg my-2'>
            <Navbar bg='white' expand='lg'>
              <Container>
                <Navbar.Brand href='#'>
                  <img
                    src='./coffee-logo.png'
                    width='40'
                    height='40'
                    className='d-inline-block align-top'
                    alt='coffeshop-logo'
                  />
                  <h3>Coffee Shop</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                  <Nav
                    className='me-auto my-2 my-lg-0'
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href='#action1'>Home</Nav.Link>
                    <Nav.Link href='#action1'>Product</Nav.Link>
                    <Nav.Link href='#action1'>Your Cart</Nav.Link>
                    <Nav.Link href='#action1'>History</Nav.Link>
                  </Nav>
                  <Form className='d-flex'>
                    <Button variant='d-none'>Login</Button>
                    <Button variant='d-none'>Sign Up</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderNotLogin;
