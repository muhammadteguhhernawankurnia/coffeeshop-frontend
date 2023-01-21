import { Link } from 'react-router-dom';

const MiniFooter = () => {
  return (
    <div className='container-fluid mt-5 mini-footer'>
      <div className='row'>
        <div className='col-12 p-2 bg-white text-dark'>
          <Link className='link-dark text-decoration-none' to='/'>
            <img
              alt=''
              src={require('../../assets/images/product-customer-images/coffee-logo.png')}
              width='40'
              height='40'
              className=''
            />{' '}
            <b>Coffee Shop</b>
          </Link>
          <div className='brand-definition p-2'>
            <p>
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans.
            </p>
          </div>
          <div className='brand-social'>
            <a href='https://id-id.facebook.com/'>
              <img
                src={require('../../assets/images/product-customer-images/fb.png')}
                alt='fb'
                width='60'
                height='60'
              />
            </a>
            <a href='https://twitter.com/i/flow/login'>
              <img
                src={require('../../assets/images/product-customer-images/twitter.png')}
                alt='twitter'
                width='60'
                height='60'
              />
            </a>
            <a href='https://www.instagram.com/?hl=id'>
              <img
                src={require('../../assets/images/product-customer-images/ig.png')}
                alt='ig'
                width='60'
                height='60'
              />
            </a>
          </div>
          <div className='brand-copyright'>
            <p>© {new Date().getFullYear()} Coffe Shop</p>
          </div>
        </div>

        <div className='col p-3 bg-white text-dark'>
          <div className='tittle-product'>
            <h3>Product</h3>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Download</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Pricing</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Locations</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Countries</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Blog</p>
            </Link>
          </div>
        </div>
        <div class='col p-3 bg-white text-dark'>
          <div className='tittle-engage'>
            <h3>Engage</h3>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Coffee Shop?</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>FAQ</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>About Us</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Privacy Policy</p>
            </Link>
            <Link className='text-decoration-none text-dark' to='/404'>
              <p>Terms of Service</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
