import Card from 'react-bootstrap/Card';
import '../../components/card-product/styles/card-product.css';
// import { Link } from 'react-router-dom';

const CardProduct = (props) => {
  console.log(props.data);
  return props.data.map((item) => {
    return (
      // <Link className='link-dark text-decoration-none' to='/productdetails'>
      <Card className='shadow-lg p-2 mt-4 mb-4 m-2' style={{ width: '11rem' }}>
        <Card.Img
          className='text-center img-card-product picture-rounded-for-product'
          variant='top'
          src={item.img}
          alt='photo-products'
        />
        <Card.Body>
          <Card.Title className='text-center'>{item.title}</Card.Title>
          <Card.Text className='text-center text-warning'>
            IDR {item.price}
          </Card.Text>
        </Card.Body>
      </Card>
      // </Link>
    );
  });
};

export default CardProduct;
