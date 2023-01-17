import Card from 'react-bootstrap/Card';
import '../../components/card-product/styles/card-product.css';

const CardProduct = (props) => {
  console.log(props.data);
  return props.data.map((item) => {
    return (
      <Card className='shadow-sm' style={{ width: '11rem' }}>
        {/* <Card.Img
        className='text-center img-card-product rounded-cirlce'
        variant='top'
        src={require('../../assets/images/product-customer-images/veggie-tomato-mix.jpg')}
        alt='menu'
      /> */}
        <Card.Img
          className='text-center img-card-product rounded-cirlce'
          variant='top'
          src={item.img}
          alt='menu'
        />
        <Card.Body>
          <Card.Title className='text-center'>{item.title}</Card.Title>
          <Card.Text className='text-center'>{item.title}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
};

export default CardProduct;
