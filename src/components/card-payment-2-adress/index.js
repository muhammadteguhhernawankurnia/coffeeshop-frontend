import Card from 'react-bootstrap/Card';
import '../../components/card-payment-2-adress/styles/card-payment-2-adress.css';

function CardPayment2Adress() {
  return (
    <Card className='d-flex flex-wrap round' style={{ width: '20rem' }}>
      <Card.Body>
        <div className='row'>
          <div className='col'>
            <Card.Subtitle className='mb-2 text-dark'>
              <b>Delivery</b> to Iskandar Street
            </Card.Subtitle>
            <Card.Text className='mb-2 text-dark'>
              ......................................................................
            </Card.Text>
            <Card.Text className='mb-2 text-dark '>
              Km 5 refinery road oppsite republic food, elfurun, Jakarta
            </Card.Text>
            <Card.Text className='mb-2 text-dark'>
              ......................................................................
            </Card.Text>
            <Card.Text className='mb-2 text-dark'>+6289999999999</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPayment2Adress;
