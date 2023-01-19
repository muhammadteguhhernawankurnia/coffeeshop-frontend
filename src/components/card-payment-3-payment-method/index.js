import Card from 'react-bootstrap/Card';
import '../../components/card-payment-3-payment-method/styles/card-payment-3-payment-method.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CardPayment3PaymentMethod() {
  return (
    <Card className='d-flex flex-wrap round' style={{ width: '20rem' }}>
      <Card.Body>
        <div className='row'>
          <div className='col'>
            <Card.Subtitle className='mb-2 text-dark'>
              <FontAwesomeIcon icon={faUser} /> Card
            </Card.Subtitle>
            <Card.Text className='mb-2 text-dark'>
              ......................................................................
            </Card.Text>
            <Card.Text className='mb-2 text-dark '>
              <FontAwesomeIcon icon={faUser} /> Bank Account
            </Card.Text>
            <Card.Text className='mb-2 text-dark'>
              ......................................................................
            </Card.Text>
            <Card.Text className='mb-2 text-dark'>
              <FontAwesomeIcon icon={faUser} /> Cash on delivery
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPayment3PaymentMethod;
