import '../../components/card-chat-left-1/styles/card-chat-left-1.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CardChatLeft1 = () => {
  return (
    <>
      <div className='col card-chat-left'>
        <div className='col'>
          <Form className='d-flex p-2'>
            <Form.Control
              type='search'
              placeholder='Search chat'
              className='me-2'
              aria-label='Search '
            />
            <Button variant='outline-light'>Search</Button>
          </Form>
        </div>
        <div className='col text-center mt-3'>
          <h5>Choose a staff you want to talk with</h5>
        </div>
        <div className='row'>
          <div className='d-flex p-2'>
            <img
              alt=''
              src={require('../../assets/images/chat-images/barista-1.png')}
              width='80'
              height='80'
              className='p-1 m-2 rounded'
            />{' '}
            <div className='col p-1 m-2'>
              <p>Hey, I'm Ujang. Gaskeun ngopi kuy.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex p-2'>
            <img
              alt=''
              src={require('../../assets/images/chat-images/barista-3.png')}
              width='80'
              height='80'
              className='p-1 m-2 rounded'
            />{' '}
            <div className='col p-1 m-2'>
              <p>Hey, I'm Epul. Gaskeun ngopi kuy.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex p-2'>
            <img
              alt=''
              src={require('../../assets/images/chat-images/barista-2.png')}
              width='80'
              height='80'
              className='p-1 m-2 rounded'
            />
            <div className='col p-1 m-2'>
              <p>Hey, I'm Neneng. Gaskeun ngopi kuy.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardChatLeft1;
