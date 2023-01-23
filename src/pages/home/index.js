// import Header from '../../components/header/index';
// import Footer from '../../components/footer/index';
import HeaderResponsive from '../../components/header-responsive/index';
import MiniFooter from '../../components/mini-footer/index';
import '../../pages/home/styles/home-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faUser,
  faLocationPin,
  faHeart,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import CardFavoriteHomePage from '../../components/card-favorite-homepage';
import CardCustomer from '../../components/card-customer';
import Button from 'react-bootstrap/Button';
import '../../pages/home/styles/home-page.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderResponsive title='Home' headerShown={false} />
      {/* add props headers */}
      {/* start content 1 */}
      <div class='row row-cols-1 bg-white '>
        <div class='col '>
          <img
            src={require('../../assets/images/home-page-images/background-original.jpg')}
            className='img-fluid'
            alt='background-img'
          />
          <div className='container text-white top-left content-1'>
            <h2>Start Your Day with</h2>
            <h2>Coffee and Good Meals</h2>
            <h5>We provide high quality beans, good taste, and healthy</h5>
            <h5>meals made by love just for you. Start your day with us</h5>
            <h5>for a bigger smile!</h5>
            <br />
            <Link className='link-dark text-decoration-none' to='/product'>
              <button type='button' class='btn button btn-warning btn-lg'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* end content 1 */}
        {/* start content 2 */}
        <div class='col p-5 bg-white content-2 shadow-lg'>
          <div class='container'>
            <div class='row '>
              <div className='col'>
                <div class='text-dark'>
                  <h4>
                    <button type='button' class='btn btn-warning round-button'>
                      <FontAwesomeIcon icon={faUser} />
                    </button>
                    {''} 90+
                  </h4>
                  <div>Staff</div>
                </div>
              </div>
              <div className='col'>
                <div class='text-dark'>
                  <h4>
                    <button type='button' class='btn btn-warning round-button'>
                      <FontAwesomeIcon icon={faLocationPin} />
                    </button>
                    {''} 30+
                  </h4>
                  <div>Store</div>
                </div>
              </div>
              <div className='col'>
                <div class='text-dark'>
                  <h4>
                    <button type='button' class='btn btn-warning round-button'>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    {''} 800+
                  </h4>
                  <div>Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end content 3 */}
        {/* start content 3 */}
        <div class='col p-5 bg-white content-3 mt-1'>
          <div class='row'>
            <div class='col bg-white justify-content-center'>
              <img
                alt='team-work'
                src={require('../../assets/images/home-page-images/team work.jpg')}
                width='500'
                height='370'
                className='rounded content-3-img'
              />
            </div>
            <div class='col bg-white'>
              <div className='row'>
                <h3>We Provide Good Coffee</h3>
                <h3>and Healthy Meals</h3>
                <p>You can explore the menu that we provide with fun and</p>
                <p>have their own taste and make your day better.</p>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} /> High quality beans
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} /> Healthy meals, you
                  can request the ingredients
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} /> Chat with our staff
                  to get better experience for ordering
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} /> Free member card with
                  a minimum purchase of IDR 200.000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end content 3 */}
        {/* start content 4 */}
        <div className='col p-5 mt-5 mb-5 bg-light '>
          <div className='row'>
            <div className='col-sm-12 p-1 bg-light text-dark text-center'>
              <h3>Here is People's Favorite</h3>
            </div>
            <div className='col-sm-12 p-1 bg-light text-dark text-center'>
              <p>
                Let's choose and have a bit taste of people's favorite. It might
                be yours too!
              </p>
              <br />
              <br />
            </div>
            <br />
            <div class='container'>
              <div class='row'>
                <div class='col'>
                  <CardFavoriteHomePage />
                </div>
                <div class='col'>
                  <CardFavoriteHomePage />
                </div>
                <div class='col'>
                  <CardFavoriteHomePage />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end content 4 */}
        {/* start content 5 */}
        <div className='col p-1 bg-white'>
          <div className='row'>
            <div className='col-sm-12 p-1 bg-white text-dark text-center'>
              <h3>Visit Our Store in the</h3>
              <h3>Spot on the Map Below</h3>
            </div>
            <div className='col-sm-12 p-1 bg-white text-dark text-center'>
              <p>
                See our store in every city on the spot and spen your good day
                there. See you soon!
              </p>
            </div>
            <img
              src={require('../../assets/images/home-page-images/map.jpg')}
              className='img-fluid'
              alt='map'
            />
          </div>
        </div>
        {/* end content 5 */}
        {/* start content 6 */}
        <div className='col p-5 bg-white'>
          <div className='row'>
            <div className='col-sm-12 p-1 bg-white text-dark text-center'>
              <h3>Our Partner</h3>
            </div>
            <img
              src={require('../../assets/images/home-page-images/Sponsored.png')}
              className='img-fluid'
              alt='our-partner'
            />
          </div>
        </div>
        {/* end content 6 */}
        {/* start content 7 */}
        <div className='col p-4 bg-white '>
          <div className='row'>
            <div className='col-sm-12 p-1 bg-white text-dark text-center'>
              <h3>Loved by Thousands of</h3>
              <h3>Happy Customer</h3>
            </div>
            <div className='col-sm-12 p-1 bg-white text-dark text-center'>
              <p>
                These are the stories of our customers who have visited us with
                great pleasure.
              </p>
            </div>
            <div class='container text-dark'>
              <div class='row'>
                <div class='col'>
                  <CardCustomer />
                </div>
                <div class='col'>
                  <CardCustomer />
                </div>
                <div class='col'>
                  <CardCustomer />
                </div>
              </div>
            </div>
            <br />
            <div>
              <br />
              <Button
                className='round-button button-chocolate'
                variant=''
                size='lg'
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
              {'    '}
              <Button
                className='round-button button-chocolate'
                variant=''
                size='lg'
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* end content 7 */}
        {/* start content 8 */}
        <div className='col p-5 mt-5 bg-white shadow-lg content-8'>
          <div class='container'>
            <div class='row '>
              <div className='col'>
                <div className='col-sm-12 p-1 bg-white text-dark'>
                  <h3>Check our promo today!</h3>
                  <p>Let's see the deals and pick yours!</p>
                </div>
              </div>
              <div class='d-grid gap-2 col-3 mx-auto'>
                <Link className='link-dark text-decoration-none' to='/product'>
                  <button class='btn button btn-warning btn-lg' type='button'>
                    See Promo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* end content 8 */}
      <br />
      <br />
      {/* <Footer /> */}
      <MiniFooter />
    </>
  );
};

export default HomePage;
