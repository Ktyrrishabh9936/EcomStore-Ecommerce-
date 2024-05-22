import logo from './logo.svg';
import './App.css';
import HomePage from './customer/pages/HomePage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewProduct from './customer/pages/ViewProductPage';
import SearchProductPage from './customer/pages/SearchProductPage';
import ProductCart from './customer/pages/ProductCart';
import PlaceOrder from './customer/pages/PlaceOrder';
import { useSelector } from 'react-redux';
import SearchPage from './customer/pages/searchPage';
import SignUp from './customer/pages/SignUp';
import LoginPage from './customer/pages/LoginPage';

function App() {
  const deviceType =  useSelector((state)=>state.webReducer.DeviceType);
  return (
    <div className='relative overflow-hidden bg-white'>
    <Router>
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/viewProduct' element={<ViewProduct/>}/>
        <Route path='/searcheditems' element={<SearchProductPage/>}/>
        {(deviceType==="mobile"||deviceType==="tablet") && <Route path='/search' element={<SearchPage/>}/>}
        <Route path='/cart' element={<ProductCart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
