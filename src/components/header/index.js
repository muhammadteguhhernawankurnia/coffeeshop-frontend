import '../header/styles/header-styles.css';

const Header = () => {
  return (
    <>
      <div className='container-fluid bg-white text-dark text-center fixed-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 mt-3 mb-3'>
              <div class='col p-2 bg-white text-dark'>
                <img
                  alt=''
                  src={require('../../assets/images/product-customer-images/coffee-logo.png')}
                  width='30'
                  height='30'
                  className=''
                />{' '}
                <b>Coffee Shop</b>
              </div>
            </div>
            <div className='col-sm-4 mt-3'>
              <div className='row'>
                <div className='col p-2 bg-white text-dark'>Home</div>
                <div className='col p-2 bg-white text-dark'>Product</div>
                <div className='col p-2 bg-white text-dark'>Your Cart</div>
                <div className='col p-2 bg-white text-dark'>History</div>
              </div>
            </div>
            <div className='col-sm-4 mt-3'>
              <button type='button' className='button btn-outline-warning'>
                Login
              </button>{' '}
              <button type='button' className='button btn-outline-warning'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
