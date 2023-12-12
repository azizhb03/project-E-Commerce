
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import { Shop } from './pages/Shop';
import { LoginSignup } from './pages/LoginSignup';
import { Product } from "./pages/Product"
import { Commande } from './pages/commande';
import { Footer } from './component/Footer/Footer';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kid_banner from './component/assets/banner_kids.png'
import Uploader from './component/uploader/Uploader';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />

          <Route path='/Men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/Women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/commande' element={<Commande />} />
          <Route path='/login' element={<LoginSignup />} />

          <Route path='/uploader' element={<Uploader />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
};
