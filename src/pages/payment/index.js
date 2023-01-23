import HeaderResponsive from '../../components/header-responsive';
import MiniFooter from '../../components/mini-footer/index';
import '../../pages/payment/styles/payment.css';
import CardPayment1Checkout from '../../components/card-payment-1-checkout';
import CardPayment2Adress from '../../components/card-payment-2-adress';
import CardPayment3PaymentMethod from '../../components/card-payment-3-payment-method';

const Payment = () => {
  return (
    <>
      {/* <MiniHeader /> */}
      <HeaderResponsive title='Payment' />
      <div className='payment-background'>
        <img
          src={require('../../assets/images/payment-images/payment-background.jpg')}
          className='img-fluid '
          alt='background-img'
        />
      </div>
      <div className='payment-content'>
        <div className='text-white'>
          <h2>Checkout your item now!</h2>
        </div>
        <div className='d-flex flex-wrap align-content-center container'>
          <div className='p-2 m-2 rounded'>
            <CardPayment1Checkout />
          </div>
          <div className='text-white'></div>
          <div className='p-2 m-2 rounded'>
            <h2>Adress Details</h2>
            <p className='text-white text-decoration-underline'>Edit</p>
            <CardPayment2Adress />
            <h2 className='mt-4'>Payment method</h2>
            <CardPayment3PaymentMethod />
            <button class='btn button-chocolate mt-4' type='button'>
              <h5>Confirm and Pay</h5>
            </button>
          </div>
        </div>
      </div>
      <MiniFooter />
    </>
  );
};

export default Payment;
