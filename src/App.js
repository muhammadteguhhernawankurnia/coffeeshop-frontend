// import ProductCustomerPage from '../src/pages/product-customer-page/index';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/index';
import Product from './pages/product-menu/index';
import Payment from './pages/payment';
import ProductTesting from './pages/product-customer-page/index';
import SignUp from './pages/signup';
import Login from './pages/login/index';
import NoMatch from './pages/404/index';
import ForgotPassword from './pages/forgot-password/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<Product />} />
        <Route path='payment' element={<Payment />} />
        <Route path='producttesting' element={<ProductTesting />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
