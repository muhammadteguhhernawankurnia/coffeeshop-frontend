import '../header/styles/header-styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='container-fluid bg-white text-dark text-center fixed-top shadow-sm opacity-75'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 mt-3 mb-3'>
              <div class='col p-2 bg-white text-dark'>
                <Link className='link-dark text-decoration-none' to='/'>
                  <img
                    alt=''
                    src={require('../../assets/images/product-customer-images/coffee-logo.png')}
                    width='30'
                    height='30'
                    className=''
                  />{' '}
                  <b>Coffee Shop</b>
                </Link>
              </div>
            </div>
            <div className='col-sm-4 mt-3'>
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
                    Your Cart
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
            <div className='col-sm-4 mt-3'>
              <button type='button' className='button btn-outline-warning'>
                <Link className='link-dark text-decoration-none' to='/login'>
                  Login
                </Link>
              </button>{' '}
              <button type='button' className='button btn-outline-warning'>
                <Link className='link-dark text-decoration-none' to='/signup'>
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
