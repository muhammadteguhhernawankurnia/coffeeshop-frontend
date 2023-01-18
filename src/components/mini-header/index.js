import { Link } from 'react-router-dom';

const MiniHeader = () => {
  return (
    <div className='row '>
      <div className='mini-header col-sm-11 bg-white d-flex'>
        <div className='row p-3 bg-white col-sm-10 text-dark shadow-sm'>
          <Link className='link-dark text-decoration-none' to='/'>
            <img
              alt=''
              src={require('../../assets/images/product-customer-images/coffee-logo.png')}
              width='40'
              height='40'
              className='login-background'
            />{' '}
            <b>Coffee Shop</b>
          </Link>
        </div>
        <div className='row p-3 bg-white col-sm-2 text-white top-0 end-0'>
          <h5>
            <b>space</b>
          </h5>
        </div>
        <div className='row p-3 bg-white col-sm-2 text-dark top-0 end-0'>
          <h5>
            <b>Login</b>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
