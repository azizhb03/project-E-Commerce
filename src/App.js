
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import { LoginSignup } from './pages/LoginSignup';
import {Product} from "./pages/Product"
import { Commande } from './pages/commande';
export default function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<shop/>}/>
      <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
      
      
     <Route path='/commande' element={<Commande/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
};
