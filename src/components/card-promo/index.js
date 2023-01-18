import '../../components/card-promo/styles/card-promo.css';

const CardPromo = () => {
  return (
    <>
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
    </>
  );
};

export default CardPromo;
