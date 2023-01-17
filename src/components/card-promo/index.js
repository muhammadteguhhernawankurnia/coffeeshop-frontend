import '../../components/card-promo/styles/card-promo.css';

const CardPromo = () => {
  return (
    <>
      <div className='card-promo'>
        <img
          src={require('../../assets/images/product-customer-images/profile-1.png')}
          alt='profile 1'
        />
        <div className='card-promo-text'>
          <p>
            <b>HAPPY MOTHER'S DAY!</b>
          </p>
          <p>Get one of our favorite menu for free!</p>
        </div>
      </div>
    </>
  );
};

export default CardPromo;
