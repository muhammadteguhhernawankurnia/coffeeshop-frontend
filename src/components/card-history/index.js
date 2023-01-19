import Card from 'react-bootstrap/Card';
import '../../components/card-history/styles.css/card-history.css';
import Form from 'react-bootstrap/Form';

function TextExample() {
  return (
    <Card
      className='d-flex flex-wrap align-content-center round'
      style={{ width: '20rem' }}
    >
      <Card.Body>
        <div className='row'>
          <div className='col'>
            <div className='picture-rounded-for-history'>
              <img
                src={require('../../assets/images/history-images/veggie tomato mix.jpg')}
                className='img-fluid img-card-history'
                alt='background-img'
              />
            </div>
          </div>
          <div className='col'>
            <Card.Subtitle className='mb-2 text-dark text-center'>
              Tomato Mix
            </Card.Subtitle>
            <Card.Text className='mb-2 text-dark text-center'>
              IDR 34.000
            </Card.Text>
            <Card.Text className='mb-2 text-dark text-center'>
              Delivered
            </Card.Text>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`reverse-${type}`} className='mb-3'>
                  <Form.Check
                    reverse
                    label='1'
                    name='group1'
                    type={type}
                    id={`reverse-${type}-1`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
