// import Card from 'react-bootstrap/Card';
import '../../components/card-product-details-checkout/styles/card-product-details-checkout.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardProductDetailsCheckout = () => {
  return (
    <>
      <div className='card-checkout bg-white rounded text-dark shadow-lg'>
        <div className='row'>
          <div className='col rounded'>
            <img
              alt=''
              src={require('../../assets/images/product-details-images/image 25.jpg')}
              width='120'
              height='120'
              className='round p-1 shadow-lg'
            />
          </div>
          <div className='col mt-2'>
            <div className='ini gambar'>
              <h3>COLD BREW</h3>
              <p>x1 (Large)</p>
              <p>x1 (Regular)</p>
            </div>
          </div>
          <div className='col p-4 '>
            <ButtonGroup
              className='button-plus-minus shadow-lg'
              aria-label='Basic example'
            >
              <Button variant=''>-</Button>
              <Button variant=''>2</Button>
              <Button variant=''>+</Button>
            </ButtonGroup>
            <br />
            <button class='btn button-checkout mt-2 shadow-lg' type='button'>
              <h5>
                Checkout <FontAwesomeIcon icon={faArrowRight} />
              </h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProductDetailsCheckout;
