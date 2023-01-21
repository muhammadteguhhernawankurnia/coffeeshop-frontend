import '../../components/card-profile-form-2/styles/card-profile-form-2.css';
import Form from 'react-bootstrap/Form';

const CardProfileForm2 = () => {
  return (
    <>
      <div className='bg-light text-dark rounded form-profile'>
        <h3>Contacs</h3>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email adress:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email adress'
            id='Email adress'
          />
          <Form.Label>Delivery adress:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Delivery adress'
            id='Delivery adress'
          />
          <Form.Label>Mobile number:</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter the Mobile number'
            id='Mobile number'
          />
        </Form.Group>

        <h3>Details</h3>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Display name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the Display name'
            id='Display name'
          />
          <Form.Label>First name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the First name'
            id='First name'
          />
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter the Last name'
            id='Last name'
          />
          <Form.Label>DD/MM/YY:</Form.Label>
          <Form.Control type='date' placeholder='Enter your date' id='date' />
        </Form.Group>
        <Form>
          {['radio'].map((type) => (
            <div key={`default-${type}`} className='mb-3'>
              <Form.Check type={type} id={`default-${type}`} label={`Male`} />
              <Form.Check type={type} id={`default-${type}`} label={`Female`} />
            </div>
          ))}
        </Form>
      </div>
    </>
  );
};

export default CardProfileForm2;
