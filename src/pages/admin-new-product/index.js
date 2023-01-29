import './styles/admin-new-product.css';
import HeaderResponsive from '../../components/header-responsive/index';
import MiniFooter from '../../components/mini-footer/index';
import Form from 'react-bootstrap/Form';

const AdminNewProduct = () => {
  return (
    <>
      <HeaderResponsive />
      <div className='admin-add-new-product-content bg-light'>
        <div className='text-white container'>
          <h4 className='text-dark p-2 bg-light'>
            Favorite & Promo / Add New Product
          </h4>
        </div>
        <div className='d-flex flex-wrap align-content-center container bg-light p-4'>
          <div className='p-2 m-2 rounded'>
            <div className='col'>
              <div className='picture-rounded-for-product-details'>
                <img
                  src={require('../../assets/images/admin-add-new-product/photo-camera-2.png')}
                  className='img-fluid product-details-main-img'
                  alt='item-choose'
                />
              </div>
            </div>

            <div className='row'>
              <button class='btn button-chocolate mt-4' type='button'>
                <h5>Take a Picture</h5>
              </button>
              <button class='btn button-yellow mt-2' type='button'>
                <h5>Choose from Gallery</h5>
              </button>
            </div>

            <Form.Group className='mb-3 mt-3 text-dark' controlId=''>
              <Form.Label>Delivery Hour:</Form.Label>
              <Form.Control
                type='time'
                placeholder='Select start hours'
                id='time-start'
              />
              <Form.Control
                type='time'
                placeholder='Select start hours'
                id='time-end'
              />
              <Form.Label>Input Stock:</Form.Label>
              <Form.Control
                type='number'
                placeholder='Input Stock'
                id='input-stock'
              />
            </Form.Group>
          </div>
          <div className='p-2 m-2 rounded'>
            <Form.Group className='mb-3 text-dark' controlId='formBasicEmail'>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Type your product name min. 50 characters'
                id='product-name'
              />
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Type the price'
                id='price'
              />
              <Form.Label>Descpription:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Describe your product min. 150 characters'
                id='description'
              />
            </Form.Group>
            <h6 className='text-dark mt-2'>Input product size:</h6>
            <p className='text-dark'>
              Click size you want to use for this product
            </p>
            <div className='row'>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>R</h5>
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>L</h5>
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>XL</h5>
              </button>
            </div>
            <div className='row'>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>250 gr</h5>
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>300 gr</h5>
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                <h5>500 gr</h5>
              </button>
            </div>
            <h6 className='text-dark mt-2'>Input delivery methods:</h6>
            <p className='text-dark'>
              Click methods you want to use for this product
            </p>
            <div className='row'>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                Delivery
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                Dine In
              </button>
              <button class='btn button-chocolate-rounded mt-2' type='button'>
                Take Away
              </button>
            </div>

            <div className='row'>
              <button class='btn button-chocolate mt-4' type='button'>
                <h5>Save Product</h5>
              </button>
              <button class='btn button-yellow mt-2' type='button'>
                <h5>Cancel</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
    </>
  );
};

export default AdminNewProduct;
