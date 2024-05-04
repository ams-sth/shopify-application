import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Women from "./components/category/Women";
import Men from "./components/category/Men";
import UserLayout from "./layout/UserLayout";
import Accessory from "./components/category/Accessory";
import AboutUs from "./components/navigationbar/AboutUs";
import ContactUs from "./components/navigationbar/ContactUs";
import FAQ from "./components/navigationbar/FAQ";
import Blogs from "./components/navigationbar/Blogs";
import Cart from "./components/cart/Cart";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Details from "./components/pages/Details";
import Articles from "./components/pages/Articles";
import Checkout from "./components/cart/Checkout";
import Profile from "./components/authentication/Profile";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/details/:productId"
          element={
            <UserLayout>
              <Details />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout>
              <AboutUs />
            </UserLayout>
          }
        />
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <UserLayout>
              <Profile />
            </UserLayout>
          }
        />
        <Route
          path="/register"
          element={
            <UserLayout>
              <Register />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout>
              <ContactUs />
            </UserLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <UserLayout>
              <FAQ />
            </UserLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <UserLayout>
              <Blogs />
            </UserLayout>
          }
        />
        <Route
          path="/article/:blogId"
          element={
            <UserLayout>
              <Articles />
            </UserLayout>
          }
        />
        <Route
          path="/women"
          element={
            <UserLayout>
              <Women />
            </UserLayout>
          }
        />
        <Route
          path="/men"
          element={
            <UserLayout>
              <Men />
            </UserLayout>
          }
        />
        <Route
          path="/accessories"
          element={
            <UserLayout>
              <Accessory />
            </UserLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <UserLayout>
              <Cart />
            </UserLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <UserLayout>
              <Checkout />
            </UserLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
