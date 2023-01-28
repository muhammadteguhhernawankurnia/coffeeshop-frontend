import '../../components/card-promo/styles/card-promo.css';
// import { Link } from 'react-router-dom';

const CardPromo = () => {
  return (
    <>
      {/* <Link className='link-dark text-decoration-none' to='/products:id'> */}
      {/* <Link className='link-dark text-decoration-none' to='/productdetails'> */}
      <div className='card-promo'>
        <img
          src={require('../../assets/images/product-customer-images/promo.png')}
          alt='profile 1'
        />
        <div className='card-promo-text'>
          <p>
            <b>JUM'AT BERKAH!!!</b>
          </p>
          <p>
            Get one of our favorite menu for free after Jum'at Shalat at
            Al-Jabar Mosque!
          </p>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default CardPromo;
