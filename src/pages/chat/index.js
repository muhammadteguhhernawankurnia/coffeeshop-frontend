import '../../pages/chat/styles/chat.css';

import HeaderResponsive from '../../components/header-responsive';
import MiniFooter from '../../components/mini-footer/index';
// import CardPayment1Checkout from '../../components/card-payment-1-checkout';
// import CardPayment2Adress from '../../components/card-payment-2-adress';
// import CardPayment3PaymentMethod from '../../components/card-payment-3-payment-method';
import CardChatLeft1 from '../../components/card-chat-left-1';
import CardChatRight1 from '../../components/card-chat-right-1';
import CardChatRight2 from '../../components/card-chat-right-2';

const Chat = () => {
  return (
    <>
      <HeaderResponsive />
      <div className='chat-background'>
        <img
          src={require('../../assets/images/chat-images/chat-background.png')}
          className='img-fluid '
          alt='background-img'
        />
      </div>
      <div className='chat-content'>
        <div className='d-flex flex-wrap align-content-center container'>
          <div className='p-2 m-2 rounded'>
            {/* <CardPayment1Checkout /> */}
            <CardChatLeft1 />
          </div>
          <div className=''>
            {/* <CardPayment2Adress /> */}
            <CardChatRight1 />
            <CardChatRight2 />
          </div>
        </div>
      </div>
      <MiniFooter />
    </>
  );
};

export default Chat;
