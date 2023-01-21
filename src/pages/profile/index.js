import '../../pages/profile/styles/profile.css';
import HeaderResponsive from '../../components/header-responsive';
import MiniFooter from '../../components/mini-footer/index';
// import CardPayment1Checkout from '../../components/card-payment-1-checkout';
// import CardPayment2Adress from '../../components/card-payment-2-adress';
// import CardPayment3PaymentMethod from '../../components/card-payment-3-payment-method';
import CardProfile1Left from '../../components/card-profile-1-left';
import CardProfileForm2 from '../../components/card-profile-form-2';

const Profile = () => {
  return (
    <>
      <HeaderResponsive />
      <div className='profile-background'>
        <img
          src={require('../../assets/images/profile-images/background.png')}
          className='img-fluid'
          alt='background-img'
        />
      </div>
      <div className='profile-background-white bg-light'></div>
      <div className='profile-content'>
        <div className='text-white'>
          <h2>User Profile</h2>
        </div>
        <div className='d-flex flex-wrap align-content-center container'>
          <CardProfile1Left />
          <CardProfileForm2 />
          <div className='text-white'></div>
          {/* <div className='p-2 m-2 rounded'>
            <h2>Adress Details</h2>
            <p className='text-white text-decoration-underline'>Edit</p>
            <CardPayment2Adress />
            <h2 className='mt-4'>Payment method</h2>
            <CardPayment3PaymentMethod />
            <button class='btn button-chocolate mt-4' type='button'>
              <h5>Confirm and Pay</h5>
            </button>
          </div> */}
        </div>
      </div>
      <MiniFooter />
    </>
  );
};

export default Profile;
