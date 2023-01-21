import '../../components/card-profile-1-left/styles/card-profile-1-left.css';
import '../../pages/product-details/styles/product-details.css';

const CardProfile1Left = () => {
  return (
    <>
      <div className='card-profile-content'>
        <div className='d-flex flex-wrap align-content-center container'>
          <div className='p-2 m-2 rounded'>
            <div className='col'></div>
            <h3 className='text-center mt-2 text-dark'>
              <img
                src={require('../../assets/images/profile-images/image.png')}
                className='card-profile-img'
                alt='card-profile-img'
              />
            </h3>
            <h3 className='text-center mt-2 text-dark'>Zulaikha</h3>
            <p className='text-center text-dark'>zulaikha@gmail.com</p>
            <div className='row'>
              <button class='btn button-yellow mt-2' type='button'>
                <h5>Choose Photo</h5>
              </button>
              <button class='btn button-chocolate mt-2' type='button'>
                <h5>Remove Photo</h5>
              </button>
              <button class='btn button-yellow mt-2' type='button'>
                <h5>Edit Password</h5>
              </button>
              <h3 className='text-center mt-2 text-dark'>
                Do you want to save the change
              </h3>
              <button class='btn button-chocolate mt-2' type='button'>
                <h5>Save Change</h5>
              </button>
              <button class='btn button-yellow mt-2' type='button'>
                <h5>Cancel</h5>
              </button>
              <button class='btn button-chocolate mt-2' type='button'>
                <h5>Log Out</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfile1Left;
