import MiniHeader from '../../components/mini-header';
import MiniFooter from '../../components/mini-footer/index';
import '../../pages/product-details/styles/product-details.css';
import CardDetailProductsDelivery from '../../components/card-product-details-delivery';
import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
import CardProductDetailsCheckout from '../../components/card-product-details-checkout';

const ProductDetails = () => {
  return (
    <>
      <MiniHeader />
      <div className='payment-background'>
        <img
          src={require('../../assets/images/product-details-images/background-detail-products.jpg')}
          className='img-fluid '
          alt='background-img'
        />
      </div>
      <div className='product-details-content'>
        <div className='text-white'>
          <h3>Favorite & Promo</h3>
        </div>
        <div className='d-flex flex-wrap align-content-center container'>
          <div className='p-2 m-2 rounded'>
            <div className='col'>
              <div className='picture-rounded-for-product-details'>
                <img
                  src={require('../../assets/images/product-details-images/image 25.jpg')}
                  className='img-fluid product-details-main-img'
                  alt='item-choose'
                />
              </div>
            </div>
            <h3 className='text-center mt-2'>COLD BREW</h3>
            <h3 className='text-center'>IDR 30.000</h3>
            <div className='row'>
              <button class='btn button-chocolate mt-2' type='button'>
                <h5>Add to Cart</h5>
              </button>
              <button class='btn button-yellow mt-2' type='button'>
                <h5>Ask a Staff</h5>
              </button>
            </div>
          </div>
          <div className='text-white'></div>
          <div className='p-2 m-2 rounded'>
            <CardDetailProductsDelivery />
            <h3 className='text-center text-dark mt-2'>
              Choose Delivery Methods
            </h3>
            <div className='row'>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>Dine in</h5>
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>Delivery</h5>
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>Pick up</h5>
              </button>
            </div>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Set time:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter the time you will arrived'
                id='delivery'
              />
            </Form.Group>
          </div>
        </div>
        <CardProductDetailsCheckout />
      </div>
      <MiniFooter />
    </>
  );
};

export default ProductDetails;
