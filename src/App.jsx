import {
    BrowserRouter ,
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
  import HomePage from "./Pages/HomePage";
  import LoginPage from "./Pages/LoginPage";
  import ProductDetailsPage from "./Pages/ProductDetailsPage";
  import ProductPage from "./Pages/ProductPage";
  import AboutPage from "./Pages/AboutPage";
  
  import "./App.css";
  
  function App() {
    
    return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  