import Card from 'react-bootstrap/Card';
import '../../components/card-payment-1-checkout/styles/card-payment-1-checkout.css';

const CardPayment1Checkout = () => {
  return (
    <>
      <Card
        className='d-flex flex-wrap align-content-center'
        style={{ width: '22rem' }}
      >
        <Card.Body>
          <div className='row'>
            <Card.Title className='mb-2 text-dark text-center mb-2'>
              Order Summary
            </Card.Title>
            <Card.Text className='mb-2 text-dark'>
              ...........................................................................
            </Card.Text>
            <div className='col'>
              <div className='picture-rounded-for-history'>
                <img
                  src={require('../../assets/images/history-images/veggie tomato mix.jpg')}
                  className='img-fluid img-card-payment'
                  alt='item-choose'
                />
              </div>
            </div>
            <div className='col mt-2'>
              <Card.Subtitle className='mb-2 text-dark'>
                Tomato Mix
              </Card.Subtitle>
              <Card.Text className='mb-2 text-dark'>(x1) IDR 34.000</Card.Text>
              <Card.Text className='mb-2 text-dark'>Regular</Card.Text>
            </div>
          </div>
          <Card.Text className='mb-2 text-dark'>
            ...........................................................................
          </Card.Text>
          <Card.Text className='mb-2 text-dark mt-2'>
            SUBTOTAL .............................. (IDR 34.000)
          </Card.Text>
          <Card.Text className='mb-2 text-dark'>
            TAX & FEES ............................ (IDR 3400)
          </Card.Text>
          <Card.Text className='mb-2 text-dark'>
            SHIPPING ............................... (IDR 12.600)
          </Card.Text>
          <Card.Text className='mb-2 text-dark'>
            ...........................................................................
          </Card.Text>
          <Card.Text className='mb-2 text-dark text-center mt-2'>
            TOTAL (IDR 50.000)
          </Card.Text>
          <Card.Text className='mb-2 text-dark'>
            ...........................................................................
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPayment1Checkout;
