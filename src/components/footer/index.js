import '../../components/footer/styles/footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-sm-4 mt-3 mb-3'>
            <div class='col p-2 bg-light text-dark'>
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
          <div className='brand-definition'>
            <p>
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
          </div>
          <div className='brand-social'>
            <img
              src={require('../../assets/images/product-customer-images/fb.png')}
              alt='fb'
            />
            <img
              src={require('../../assets/images/product-customer-images/twitter.png')}
              alt='twitter'
            />
            <img
              src={require('../../assets/images/product-customer-images/ig.png')}
              alt='ig'
            />
          </div>
          <div className='brand-copyright'>
            <p>© {new Date().getFullYear()} Coffe Shop</p>
          </div>
        </div>
        <div className='info'>
          <div className='tittle-product'>
            <h3>Product</h3>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className='tittle-engage'>
            <h3>Engage</h3>
            <p>Coffee Shop?</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
