import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import About from "./components/About";
import ProductsDetails from "./components/ProductsDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <ProductsList />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productID" element={<ProductsDetails />} />
      </Routes>
    </div>
  )
}
export default App;