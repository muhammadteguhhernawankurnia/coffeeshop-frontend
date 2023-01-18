import MiniFooter from '../../components/mini-footer/index';
import { Link } from 'react-router-dom';
import '../../pages/404/styles/404.css';

function NoMatch() {
  return (
    <div>
      <div class='row row-cols-1'>
        <div class='col mr-0'>
          <img
            src={require('../../assets/images/page-not-found/page-not-found-images.jpg')}
            className='img-fluid'
            alt='background-img'
          />
        </div>
      </div>
      <div className='page-404-main-content'>
        <Link className='text-decoration-none text-dark' to='/'>
          <h3 className='d-flex justify-content-center '>
            Nothing to see here
          </h3>
          <p className='d-flex justify-content-center'>
            <h4>Click me for go to home page!</h4>
          </p>
        </Link>
      </div>
      <MiniFooter />
    </div>
  );
}

export default NoMatch;
