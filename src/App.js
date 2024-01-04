import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import { Shop } from "./pages/Shop";
import { LoginSignup } from "./pages/LoginSignup";
import { Product } from "./pages/Product";
import { Footer } from "./component/Footer/Footer";
import men_banner from "./component/assets/banner_mens.png";
import women_banner from "./component/assets/banner_women.png";
import kid_banner from "./component/assets/banner_kids.png";
import Uploader from "./component/uploader/Uploader";
import { Toaster } from "react-hot-toast";
import Profile from "./component/profile/Profile";

import { Public } from "./component/Auth";

import Auth from "./component/Auth";
import { Cart } from "./pages/Cart";
import {Formulaire } from "./component/Formul/Formul";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/Men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/Women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route
            path="/login"
            element={
              <Public>
                <LoginSignup />
              </Public>
            }
          />
          <Route
            path="/profile"
            element={
              <Auth>
                {" "}
                <Profile />{" "}
              </Auth>
            }
          />
                    <Route path="/update" element={<Formulaire/>} />

          <Route path="/uploader" element={<Uploader />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
}
