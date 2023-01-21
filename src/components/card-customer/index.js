import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardCustomer() {
  return (
    <Card className='shadow-lg mt-3' style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title>
          <div className='col'>
            <img
              src={require('../../assets/images/home-page-images/viezh.png')}
              className='img-fluid'
              alt='our-partner'
            />
            <h5>Viezh Robert</h5>
            <p>Warsaw, Poland</p>
            4.5 <FontAwesomeIcon icon={faStar} />
          </div>
        </Card.Title>
        <Card.Text>
          "Wow... I am very happy to spend my whole day here. The wi-fi is good,
          and the coffee and meals tho. I like it here!!! Very recommended!"
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardCustomer;
