import '../../pages/product-customer-page/styles/product-customer-page.css';
import HeaderWasLogin from '../../components/header-was-login/index';
import ProductCard from '../../pages/product-customer-page/product-card/index';
import Footer from '../../components/footer/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const ProductCustomerPage = () => {
//   useEffect(() => {
//     axios
//       .get('https://63a3d4209704d18da096c7e0.mockapi.io/xhagumi-food') //fetching link backend
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//   }, []);

const ProductCustomerPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    axios
      .get('https://63a3d4209704d18da096c7e0.mockapi.io/xhagumi-food') //fetching link backend
      .then((res) => setDataProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <HeaderWasLogin />
      <main>
        <section>
          <h2>Promo Today</h2>
          <p>Coupons will be updated every weeks.</p>
          <p>Check them out!</p>
          <div className='first-card'>
            <img
              src={require('../../assets/images/product-customer-images/profile-1.png')}
              alt='profile 1'
            />
            <div className='first-promo-text'>
              <p>
                <b>HAPPY MOTHER'S DAY!</b>
              </p>
              <p>Get one of our favorite menu for free!</p>
            </div>
          </div>
          <div className='second-card'>
            <img
              src={require('../../assets/images/product-customer-images/profile-2.png')}
              alt='profile 2'
            />
            <div className='second-promo-text'>
              <p>
                <b>Get a cup of coffee for free on sunday morning</b>
              </p>
              <p>Only at 7 to 9 AM</p>
            </div>
          </div>
          <div className='third-card'>
            <img
              src={require('../../assets/images/product-customer-images/profile-1.png')}
              alt='profile 1'
            />
            <div className='third-promo-text'>
              <p>
                <b>HAPPY MOTHER'S DAY!</b>
              </p>
              <p>Get one of our favorite menu for free!</p>
            </div>
          </div>
          <div className='fourth-card'>
            <img
              src={require('../../assets/images/product-customer-images/profile-4.png')}
              alt='profile 4'
            />
            <div className='fourth-promo-text'>
              <p>
                <b>HAPPY HALLOWEEN!</b>
              </p>
              <p>
                Do you like chicken wings? Get 1 free only if you buy pinky
                promise
              </p>
            </div>
          </div>
          <button type='button' className='btn btn-apply-coupon'>
            Apply Coupon
          </button>
          <div className='terms-and-condition'>
            <h5>Terms and Condition</h5>
            <p>1. You can only apply 1 coupon per day</p>
            <p>2. It only for dine in</p>
            <p>3. Buy 1 get 1 only for new user</p>
            <p>4. Should make member card to apply coupon</p>
          </div>
        </section>
        <aside>
          <nav-product>
            <h4>Coffee</h4>
            <h4>Non Coffee</h4>
            <h4>Foods</h4>
            <h4>Add-on</h4>
          </nav-product>
          <div className='menu-product'>
            <ProductCard data={dataProduct} />
            {/* <div className='first-menu'>
              <div className='photo-product'>
                <img
                  src={require('../../assets/images/product-customer-images/veggie-tomato-mix.jpg')}
                  alt='veggie tomato mix'
                />
                <h5>
                  <b>Veggie Tomato Mix</b>
                </h5>
                <h6>IDR 34.000</h6>
              </div>
            </div> */}
            {/* <div className='row'>
              {dataProduct.length === 0 ? (
                <p>loading...</p> // kalo bisa pake react placholder
              ) : (
                dataProduct.map((item) => {
                  return (
                    <div key={item.id} className='col-xs-12 col-md-4'>
                      <div className='card border-0 shadow p-3 mb-5 bg-body rounded-costum'>
                        <div className='card-body text-center'>
                          <img src={item.product} alt='p-4' />
                          <h5 className='card-title'>{item.menu}</h5>
                          <p className='card-text py-3'>{item.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div> */}
          </div>
          <div className='price-info'>
            <p>*the price has been cutted by discount appears</p>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default ProductCustomerPage;
