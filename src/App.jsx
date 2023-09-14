import Aos from "aos";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loading/Loader";
// ROUTES
const Home = lazy(() => import("./views/home/Home"));
const Product = lazy(() => import("./views/product/Product"));
const ProductDetail = lazy(() => import("./views/product/ProductDetail"));
const Constructor = lazy(() => import("./views/constructor/Constructor"));

const loading = <Loader />;

const App = () => {
  window.addEventListener("load", () => {
    Aos.init();
  });

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products-by-category/:id" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/constructor" element={<Constructor />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
