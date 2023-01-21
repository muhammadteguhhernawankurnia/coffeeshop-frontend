// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../components/card-favorite-homepage/styles/card-favorite-homepage.css';

function CardFavoriteHomePage() {
  return (
    <Card className='shadow-lg mt-5' style={{ width: '20rem' }}>
      <Card.Img
        variant='top p-3 '
        src={require('../../assets/images/home-page-images/hazelnut latte.jpg')}
        className='rounded-circle img-card-favorite '
        alt=''
      />
      <Card.Body>
        <Card.Title className='text-center text-dark'>
          Hazelnut Latte
        </Card.Title>
        <br />
        <Card.Text className='text-dark'>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Hazelnut Syrup
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Vanilla Whipped Cream
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Ice / Hot
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} /> Sliced Banana on Top
          </p>
        </Card.Text>
        <br />
        <Card.Title className='text-center text-dark'>IDR 25.000</Card.Title>
        <div class='d-grid gap-2 col-6 mx-auto'>
          <button class='btn btn-warning button' type='button'>
            Select
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardFavoriteHomePage;
