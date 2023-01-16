// import HeaderNotLogin from '../../components/header-not-login/index';
// import HeaderWasLogin from '../../components/header-was-login/index';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

const HomePage = () => {
  return (
    <>
      {/* <HeaderNotLogin /> */}
      {/* <HeaderWasLogin /> */}
      <Header />
      <br />
      <br />
      <br />
      <div class='row row-cols-1'>
        <div class='col mr-0'>
          <img
            src={require('../../assets/images/home-page-images/background.jpg')}
            className='img-fluid'
            alt='background-img'
          />
        </div>
        <div class='col p-5 bg-white rounded'>Staff</div>
        <div class='col p-5 bg-warning'>We Provide</div>
        <div class='col p-5 bg-primary'>Here is</div>
        <div class='col p-5 bg-warning'>Visit</div>
        <div class='col p-5 bg-primary'>Our Partner</div>
        <div class='col p-5 bg-warning'>Loved</div>
        <div class='col p-5 bg-primary'>Check our</div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
