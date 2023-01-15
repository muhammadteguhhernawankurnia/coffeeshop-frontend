import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNotLogin() {
  return (
    <Navbar className='navbar' bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={require('../../assets/images/product-customer-images/coffee-logo.png')}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Coffee Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Product</Nav.Link>
            <Nav.Link href='#action3'>Your Cart</Nav.Link>
            <Nav.Link href='#action4'>History</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Button variant='outline-success'>Login</Button>
            <Button variant='outline-success'>Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNotLogin;
