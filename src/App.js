import logo from './logo.svg';
import './App.css';
import HomePage from './customer/pages/HomePage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewProduct from './customer/pages/ViewProductPage';
import SearchProductPage from './customer/pages/SearchProductPage';
import ProductCart from './customer/pages/ProductCart';
import PlaceOrder from './customer/pages/PlaceOrder';
import SearchBar from './customer/pages/searchBarPage';

function App() {
  return (
    <div className=' overflow-hidden bg-white'>
    <Router>
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/viewProduct' element={<ViewProduct/>}/>
        <Route path='/searcheditems' element={<SearchProductPage/>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path='/cart' element={<ProductCart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
