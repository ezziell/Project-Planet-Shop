import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Header from '../components/Header';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import ProductList from '../containers/ProductList';
import ProductItem from '../components/ProductItem';
import EditAccount from '../pages/EditAccount';
import MyAccount from '../pages/MyAccount';
import NavConfig from '../components/NavConfig';
import HeaderToggle from '../components/HeaderToggle';
import ShoppingChart from '../containers/ShoppingChart';
import OrderItem from '../components/OrderItem';
import Pedidos from '../containers/Pedidos';
import ProductDetail from '../pages/ProductDetail';
import Error404 from '../pages/error404';
import OrderBackround from '../containers/OrderBackround';
import Chart from '../components/Chart';
import ProgressBar from '../components/ProgressBar';
import StartOrder from '../pages/StartOrder';
import SendOrder from '../pages/SendOrder';

const App = () => {
    return(
<BrowserRouter>
<Header />
      <Layout>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/SignIn' element={<SignIn />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/ProductList" element={<ProductList />} />
          <Route exact path="/ProductItem" element={<ProductItem />} />
          <Route exact path='/EditAccount' element={<EditAccount />} />
          <Route exact path='/MyAccount' element={<MyAccount />} />
          <Route exact path='/NavConfig' element={<NavConfig />} />
          <Route exact path='/HeaderToggle' element={<HeaderToggle />} />
          <Route exact path='/ShoppingChart' element={<ShoppingChart />} />
          <Route exact path='/OrderItem' element={<OrderItem />} />
          <Route exact path="/Pedidos" element={<Pedidos />} />
          <Route exact path='/ProductDetail' element={<ProductDetail />} />
          <Route exact path='/OrderBackround' element={<OrderBackround />} />
          <Route exact path='/Chart' element={<Chart />} />
          <Route exact path='/ProgressBar' element={<ProgressBar />} />
          <Route exact path='/StartOrder' element={<StartOrder />} />
          <Route exact path='SendOrder' element={<SendOrder />} />
          <Route exact path="*" element={<Error404 />} />
          </Routes>
      </Layout>
</BrowserRouter>       
    );
}

export default App;