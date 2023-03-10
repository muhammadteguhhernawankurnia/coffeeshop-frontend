// import ProductCustomerPage from '../src/pages/product-customer-page/index';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import HomePage from './pages/home/index';
import Product from './pages/product-menu/index';
import ProductDetail from './pages/product-details/index';
import Payment from './pages/payment';
import History from './pages/history';
import ProductTesting from './pages/product-customer-page/index';
import SignUp from './pages/signup';
import Login from './pages/login/index';
import ForgotPassword from './pages/forgot-password/index';
import Profile from './pages/profile/index';
import Chat from './pages/chat/index';
import AdminAddNewProduct from './pages/admin-new-product/index';
import NoMatch from './pages/404/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<Product />} />
        {/* <Route path='products:id' element={<ProductDetail />} /> */}
        <Route path='productdetails' element={<ProductDetail />} />
        <Route path='payment' element={<Payment />} />
        <Route path='history' element={<History />} />
        <Route path='producttesting' element={<ProductTesting />} />
        <Route path='auth/signup' element={<SignUp />} />
        <Route path='auth/login' element={<Login />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='profile' element={<Profile />} />
        <Route path='chat' element={<Chat />} />
        <Route path='adminaddnewproduct' element={<AdminAddNewProduct />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
