import '../../components/header-was-login/styles/header-was-login.css';

const HeaderWasLogin = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <div className='brand-logo'>
            <img
              src={require('../../assets/images/product-customer-images/coffee-logo.png')}
              alt='logo'
            />
          </div>
          <div className='brand-coffeeshop'>
            <h3>Coffee Shop</h3>
          </div>
        </div>
        <nav>
          <p>Home</p>
          <p>Product</p>
          <p>Your Cart</p>
          <p>History</p>
        </nav>
        <div className='helper'>
          <img
            src={require('../../assets/images/product-customer-images/search.png')}
            alt='search'
          />
          <img
            src={require('../../assets/images/product-customer-images/chat.png')}
            alt='chat'
          />
          <img
            src={require('../../assets/images/product-customer-images/images-profile-header.png')}
            alt='images-profile-header'
          />
        </div>
      </header>
    </>
  );
};

export default HeaderWasLogin;
