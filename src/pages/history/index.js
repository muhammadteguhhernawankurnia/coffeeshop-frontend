import MiniHeader from '../../components/mini-header';
import MiniFooter from '../../components/mini-footer';
import '../history/styles/history.css';
import CardHistory from '../../components/card-history';

const History = () => {
  return (
    <>
      <MiniHeader />
      <div className='history-background'>
        <img
          src={require('../../assets/images/payment-images/payment-background.jpg')}
          className='img-fluid'
          alt='background-img'
        />
      </div>
      <div className='content-history'>
        <div className='text-center text-white'>
          <h2>Let's see what you have bought!</h2>
          <p>Select item to delete</p>
          <p className='text-end text-decoration-underline mb-4'>Select all</p>
        </div>
        <div className='d-flex flex-wrap align-content-center container'>
          <div className='p-2 m-2 rounded'>
            <CardHistory />
          </div>
          <div className='p-2 m-2 rounded'>
            <CardHistory />
          </div>
          <div className='p-2 m-2 rounded'>
            <CardHistory />
          </div>
          <div className='p-2 m-2 rounded'>
            <CardHistory />
          </div>
          <div className='p-2 m-2 rounded'>
            <CardHistory />
          </div>
          <div className='p-2 m-2 rounded'>
            <CardHistory />
          </div>
        </div>
      </div>

      <MiniFooter />
    </>
  );
};

export default History;
