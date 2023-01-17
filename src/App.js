// import ProductCustomerPage from '../src/pages/product-customer-page/index';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/index';
import Product from './pages/product-menu/index';
import ProductTesting from './pages/product-customer-page/index';
import NoMatch from './pages/404/index';

const App = () => {
  return (
    // <ProductCustomerPage />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='product' element={<Product />} />
        <Route path='producttesting' element={<ProductTesting />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
