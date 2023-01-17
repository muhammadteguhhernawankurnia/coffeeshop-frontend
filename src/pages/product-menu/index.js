import Header from '../../components/header';
import CardPromo from '../../components/card-promo';
import Footer from '../../components/footer';
// import ListMenuTabs from './list-menu-tabs';
import CardProduct from '../../components/card-product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductMenu = () => {
  const [dataMenuProduct, setDataMenuProduct] = useState([]);
  useEffect(() => {
    // console.log('awwokwokok');
    axios
      .get('http://localhost:5000/api/v1/products') //get udh bisa pake cors changer plugins
      .then((res) => setDataMenuProduct(res.data.data))
      .catch((err) => console.log(err.mesagge));
  }, []);
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-sm-3 bg-white text-white shadow-sm'>
            <div className='row'>
              <div className='col-sm-12 p-1 bg-white text-dark text-center'>
                <h3>Promo Today</h3>
                <p>Coupons will be updated every weeks. Check them out!</p>
              </div>
              <div className='col-sm-12 p-1 bg-white text-dark text-center'>
                <CardPromo />
              </div>
              <div class='d-grid gap-2 p-4 col-10 mx-auto'>
                <button class='btn btn-warning' type='button'>
                  Apply Coupon
                </button>
              </div>
              <div className='col-sm-12 bg-white text-dark '>
                <p>
                  <b>Terms and Condition:</b>
                </p>
                <p>1. You can only apply 1 coupon per day</p>
                <p>2. It only for dine in</p>
                <p>3. Buy 1 get 1 only for new user</p>
                <p>4. Should make member card to apply</p>
              </div>
            </div>
          </div>
          <div className='col-sm-9 p-5 bg-light text-dark'>
            <h4>All Products</h4>
            {/* <ListMenuTabs /> */}
            <div className='row p-5 m-2'>
              <CardProduct data={dataMenuProduct} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMenu;