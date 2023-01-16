import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      <Header />
      <br />
      <div class='row row-cols-1'>
        <div class='col mr-0'>
          <img
            src={require('../../assets/images/page-not-found/page-not-found-images.jpg')}
            className='img-fluid'
            alt='background-img'
          />
        </div>
      </div>
      <br />
      <h2 className='d-flex justify-content-center'>Nothing to see here!</h2>
      <p className='d-flex justify-content-center'>
        <Link to='/'>Go to home page</Link>
      </p>
      <br />
      <Footer />
    </div>
  );
}

export default NoMatch;
