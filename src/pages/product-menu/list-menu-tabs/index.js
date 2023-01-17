import Nav from 'react-bootstrap/Nav';
import AllMenu from '../all-menu';

function ListMenuTabs() {
  return (
    <Nav className='bg-white' variant='tabs' defaultActiveKey='/'>
      <Nav.Item>
        <Nav.Link href='/'>All Products</Nav.Link>
        <br />
        <AllMenu />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-0'>Favorite & Promo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-1'>Coffee</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Non Coffee</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-3'>Foods</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/404'>Add-on</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListMenuTabs;
