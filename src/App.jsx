import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./components/category/Women";
import Men from "./components/category/Men";
import UserLayout from "./layout/UserLayout";
import Accessory from "./components/category/Accessory";
import AboutUs from "./components/navigationbar/AboutUs";
import ContactUs from "./components/navigationbar/ContactUs";
import FAQ from "./components/navigationbar/FAQ";
import Blogs from "./components/navigationbar/Blogs";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <UserLayout>
              <AboutUs />
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
      </Routes>
    </div>
  );
};

export default App;
