import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//pages
// import Home from "./pages/Home.page";
import Restaurant from "./pages/Restaurant.page";
import Checkout from "./pages/Checkout.page";
import GoogleAuth from "./pages/GoogleAuth.page";
import Type from "./pages/Type.page";

//components
import Home from "./pages/Home.page";
import Overview from "./components/Restaurant/Overview.component";
import OrderOnline from "./components/Restaurant/OrderOnline.component";
import Menu from "./components/Restaurant/Menu.component";
import Reviews from "./components/Restaurant/Reviews.component";
import Photos from "./components/Restaurant/Photos.component";

// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/Reducers/user/user.action";
import { getCart } from "./redux/Reducers/cart/cart.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMySelf());
    dispatch(getCart());
  }, [localStorage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/delivery" />} /> */}
        <Route path="/:type" element={<Type />} />
        <Route path="/restaurant/:id" element={<Restaurant />}>
          <Route path="overview" element={<Overview />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="photos" element={<Photos />} />
        </Route>
        <Route path="/checkout/orders" element={<Checkout />} />
        <Route path="/google/:token" element={<GoogleAuth />} />
      </Routes>
    </>
  );
}

export default App;
