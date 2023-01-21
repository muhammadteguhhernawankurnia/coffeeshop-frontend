import '../../components/card-chat-right-1/styles/card-chat-right-1.css';

const CardChatRight1 = () => {
  return (
    <>
      <div className='col card-chat-right'>
        <div className='col p-2 mt-3 text-dark'>
          <h5 className=''>Room chat</h5>
        </div>

        <div className='row'>
          <div className='d-flex p-2'>
            <img
              alt=''
              src={require('../../assets/images/chat-images/barista-2.png')}
              width='120'
              height='120'
              className='p-1 m-2 rounded'
            />
            <div className='col p-1 m-2 text-dark'>
              <p className='text-end'>02:14 pm</p>
              <h5>Neneng</h5>
              <p>Hey, I'm Neneng. Gaskeun ngopi kuy.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardChatRight1;
