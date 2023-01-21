import Card from 'react-bootstrap/Card';
import '../../components/card-product-details-delivery/styles/card-product-details-delivery.css';

const CardDetailProductsDelivery = () => {
  return (
    <>
      <Card
        className='d-flex flex-wrap align-content-center'
        style={{ width: '22rem' }}
      >
        <Card.Body>
          <div className='row'>
            <Card.Title className='mb-2 text-dark mb-2'>
              Delivery only on <b>Monday to Friday</b> at <b>1 - 7 pm</b>
            </Card.Title>
            <Card.Text className='mb-2 text-dark'>
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              falvour. It is brewed in small batches and steeped fo as long as
              48 hours.
            </Card.Text>
            <Card.Text className='mb-2 text-dark text-center'>
              <b>Choose a size</b>
            </Card.Text>
            <div className='row'>
              <button
                class='btn button-yellow-rounded mt-2 shadow-lg'
                type='button'
              >
                <h5>R</h5>
              </button>
              <button
                class='btn button-yellow-rounded mt-2 shadow-lg'
                type='button'
              >
                <h5>L</h5>
              </button>
              <button
                class='btn button-yellow-rounded mt-2 shadow-lg'
                type='button'
              >
                <h5>XL</h5>
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardDetailProductsDelivery;
