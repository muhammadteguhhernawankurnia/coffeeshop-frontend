import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Payment = () => {
  return (
    <>
      <Header />
      <div class='row row-cols-1 bg-white'>
        <div class='col'>
          <img
            src={require('../../assets/images/payment-images/payment-background.jpg')}
            className='img-fluid'
            alt='background-img'
          />
        </div>
        <div className='container text-white top-left content-1 '>
          <h2>Checkout your</h2>
          <h2>Item now!</h2>
          <br />
          <Card style={{ width: '30rem' }}>
            <Card.Title className='text-dark text-center p-5'>
              Order Summary
            </Card.Title>
            <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
            <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
            <Card.Body>
              <Card.Text>SUB TOTAL</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>
                <h4>SUB TOTAL</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>TAX & FEES</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>SHIPPING</h4>
              </ListGroup.Item>
              <ListGroup.Item className='text-center'>
                <h4>TOTAL</h4>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {/* <Card.Link href='#'>Card Link</Card.Link>
              <Card.Link href='#'>Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
